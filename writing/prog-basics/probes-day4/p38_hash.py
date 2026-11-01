"""Part 38 - Hash collisions. THE TRAP PROBE.

Python's hash(str) is salted per process (PYTHONHASHSEED), so `hash('ab') % 10`
cannot be printed on screen: every render would show a different slot and two
different renders of the same part would disagree.

This probe (a) proves the salt, (b) searches deterministic documented hash
functions for one where 'ab' and 'cd' really do both land in slot 3, (c) prints
real chaining and open-addressing contents under the chosen function.

Run: python p38_hash.py
"""
import os
import subprocess
import sys
import zlib

PY = sys.executable
SMALL = "import zlib; print(zlib.crc32(b'ab')%10, zlib.crc32(b'cd')%10, hash('ab')%10, hash('cd')%10)"

print("== 38.1  proof that Python's own hash() is unusable on screen ==")
print("five fresh interpreters, default (randomised) seed, printing hash('ab')%10:")
randomised = []
for _ in range(5):
    out = subprocess.run([PY, "-c", SMALL], capture_output=True, text=True).stdout.split()
    randomised.append(out[2])
    print(f"  hash('ab')%10 -> {out[2]}   hash('cd')%10 -> {out[3]}   (crc32: {out[0]}, {out[1]})")
print("distinct values seen for hash('ab') % 10:", sorted(set(randomised)))
print("=> crc32 is identical in all five runs; hash() is not. Screen must use the deterministic one.")

fixed = subprocess.run([PY, "-c", SMALL], capture_output=True, text=True,
                       env={"PYTHONHASHSEED": "0", "PATH": os.environ["PATH"],
                            "SYSTEMROOT": os.environ.get("SYSTEMROOT", "C:\\Windows")})
fv = fixed.stdout.split()
print(f"with PYTHONHASHSEED=0 the same line is stable at: hash('ab')%10 = {fv[2]}, hash('cd')%10 = {fv[3]}")
print("=> pinning the seed makes Python's own hash reproducible (and here it even collides, in slot 1),")
print("   but a render that forgets the env var silently changes the number. Do not use it on screen.")

print()
print("== 38.2  candidate deterministic hash functions ==")


def h_sum(key):                      # documented: sum of character codes
    return sum(ord(c) for c in key)


def h_horner31(key):                 # documented: Horner with multiplier 31
    acc = 0
    for c in key:
        acc = acc * 31 + ord(c)
    return acc


def h_djb2(key):                     # Bernstein's djb2, 5381
    acc = 5381
    for c in key:
        acc = acc * 33 + ord(c)
    return acc & 0xFFFFFFFFFFFFFFFF


def h_crc32(key):
    return zlib.crc32(key.encode()) & 0xFFFFFFFF


def h_ordproduct(key):               # first char * 26 + second char (letters only)
    return sum((ord(c) - 96) * (26 ** i) for i, c in enumerate(key))


FNS = {"sum(ord(c))": h_sum, "Horner base 31": h_horner31, "djb2": h_djb2,
       "crc32": h_crc32, "base-26 letter value": h_ordproduct}

print(f"{'function':<22} | {'h(ab)':>12} | {'h(cd)':>12} | h(ab)%4 h(cd)%4 | %8 | %10")
for name, fn in FNS.items():
    a, c = fn("ab"), fn("cd")
    print(f"{name:<22} | {a:>12} | {c:>12} | {a % 4:^11} {c % 4:^9} | {a % 8} {c % 8} | {a % 10} {c % 10}")

print()
print("== 38.3  does the script's example survive anywhere? search (function, m) with BOTH == 3 ==")
hits = []
for name, fn in FNS.items():
    a, c = fn("ab"), fn("cd")
    diff = abs(a - c)
    for m in range(4, 65):
        if a % m == 3 and c % m == 3:
            hits.append((name, m, a, c, diff))
for name, m, a, c, diff in hits:
    print(f"  TRUE under {name!r} with m = {m}: {a} % {m} = {a % m}, {c} % {m} = {c % m}  -> both slot 3")
if not hits:
    print("  no candidate/table size puts both in slot 3")

print()
print("== 38.4  PINNED for the frame: h(key) = sum(ord(c) for c in key) % 4  (m = 4 slots) ==")
M = 4
for key in ("ab", "cd"):
    print(f"  {key!r}: ord sum = {h_sum(key)} -> {h_sum(key)} % {M} = {h_sum(key) % M}")

print()
print("== 38.5  chaining: real slot contents (same function, same m = 4, same two keys) ==")
table = [[] for _ in range(M)]
for key in ("ab", "cd"):
    table[h_sum(key) % M].append(key)
for i, slot in enumerate(table):
    print(f"  slot {i}: {' -> '.join(slot) if slot else '(empty)'}")
print("keys stored:", sum(len(s) for s in table), "| slots used:",
      sum(1 for s in table if s), "| longest chain:", max(len(s) for s in table))

print()
print("== 38.6  open addressing: SAME function, SAME m = 4, linear probing ==")
oa = [None] * M
inserts = []
for key in ("ab", "cd"):
    idx = h_sum(key) % len(oa)
    probes = 0
    while oa[idx] is not None:
        idx = (idx + 1) % len(oa)
        probes += 1
    oa[idx] = key
    inserts.append((key, h_sum(key) % len(oa), idx, probes))
print(f"{'key':<5} | home slot | probes moved | landed in")
for key, home, land, probes in inserts:
    print(f"{key:<5} | {home:^9} | {probes:^12} | {land}")
for i, cell in enumerate(oa):
    print(f"  slot {i}: {cell if cell else '(empty)'}")
print()
print("both strategies begin from the identical collision the script names: 'ab' and 'cd' both")
print("want slot 3. Chaining stacks them there. Open addressing sends 'cd' probing 3 -> 0.")

print()
print("== 38.7  honest context for a 4-slot demo table ==")
print("other keys under the pinned function:",
      {k: h_sum(k) % M for k in ("ab", "cd", "ef", "hi", "cat", "dog")})
print("=> at m = 4 collisions are COMMON. That is the point of the part, but it sits beside the")
print("   explain line 'good hash functions and resizing keep collisions rare', which is about a")
print("   real table. The screen must not imply m = 4 is a rare-collision table.")
print("the same 8 words in a 100-slot table:",
      {w: h_sum(w) % 100 for w in ("ab", "cd", "ef", "hi", "cat", "dog", "red", "blue")})
print("crc32 % 100 for the same 8:",
      {w: h_crc32(w) % 100 for w in ("ab", "cd", "ef", "hi", "cat", "dog", "red", "blue")})
