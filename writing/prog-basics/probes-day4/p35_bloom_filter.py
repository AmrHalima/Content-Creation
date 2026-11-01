"""Part 35 - Bloom filter. Is "'cat' sets 3 bits, 'dog' finds one bit still 0" true?

A Bloom filter's behaviour is entirely determined by (m = bit count, k = hash
count, the hash functions). The script never states them, so this probe states
them and then scans for the smallest m where the script's example is TRUE.

Hash family used on screen (documented, deterministic, no PYTHONHASHSEED):
    h_i(key) = zlib.crc32(bytes([i]) + key.encode()) % m     for i in 0,1,2
i.e. three genuinely separate hash functions, salted by their index. This is a
Kirsch-Mitzenmacher-style construction and is stable across runs and machines.

Run: python p35_bloom_filter.py
"""
import zlib


def positions(key, m, k=3):
    return [zlib.crc32(bytes([i]) + key.encode()) % m for i in range(k)]


def add(bits, key, m, k=3):
    for p in positions(key, m, k):
        bits[p] = 1
    return bits


def probe(bits, key, m, k=3):
    ps = positions(key, m, k)
    hits = [bits[p] for p in ps]
    return ps, hits, all(h == 1 for h in hits)


def render(bits):
    return "".join(str(b) for b in bits)


print("== 35.1  positions of the two words, raw (before any modulo) ==")
for key in ("cat", "dog"):
    raw = [zlib.crc32(bytes([i]) + key.encode()) for i in range(3)]
    print(f"{key!r:6} crc32 salted by index -> {raw}")

print()
print("== 35.2  scan: which table sizes m make the script's example honest? ==")
print("m  | cat positions | distinct bits set | dog positions | any dog bit 0? | example OK?")
good = []
for m in range(3, 65):
    bits = [0] * m
    add(bits, "cat", m)
    cp = sorted(set(positions("cat", m)))
    dp, dh, present = probe(bits, "dog", m)
    ok = len(cp) == 3 and 0 in dh
    if ok:
        good.append(m)
    if m <= 40:
        print(f"{m:>2} | {str(sorted(cp)):^13} | {len(cp):^17} | {str(sorted(dp)):^13} "
              f"| {str(0 in dh):^14} | {'YES' if ok else 'no'}")

print()
print("every m in 3..64 where the example is TRUE:", good)
print("first honest m is", min(good), "but a 4-bit filter with 3 of 4 bits set is a useless filter,")
print("so the frame pins m = 16: the smallest round power of two where the example holds and the")
print("load still looks like a filter (3 of 16 bits).")

M = 16
K = 3
print()
print(f"== 35.3  PINNED CONFIGURATION for the frame: m = {M} bits, k = {K} hashes ==")
bits = [0] * M
print("before:  " + render(bits))
add(bits, "cat", M)
cp = positions("cat", M)
print(f"'cat' positions: {cp}  -> distinct bits set: {len(set(cp))}")
print("after cat: " + render(bits) + f"   ({sum(bits)} of {M} bits are 1)")
dp, dh, present = probe(bits, "dog", M)
shared = sorted(set(dp) & set(cp))
print(f"'dog' positions: {dp}  bit values at those positions: {dh}")
print(f"'dog' already shares {len(shared)} position(s) with 'cat' {shared}; the {3 - len(shared)} still 0 "
      f"is enough -> filter says {'MAYBE' if present else 'DEFINITELY NOT'}")
print("this is the lesson: 2 of 3 bits matching is still 'definitely not', because ALL k must be 1.")

print()
print("== 35.4  the CTA: why can there be no false negative? ==")
bits2 = [0] * M
add(bits2, "cat", M)
print("bits 'cat' owns:", sorted(set(positions("cat", M))))
for w in ("ant", "bat", "rat", "dog", "log"):
    add(bits2, w, M)
print("after 5 more inserts, bits:", render(bits2))
print("re-probe 'cat':", probe(bits2, "cat", M)[2], "-> still YES; bits are only ever set to 1, never cleared")
print("so a member can never probe to a 0. False negatives would need a bit to be UNset,")
print("and nothing in the structure does that.")

print()
print("== 35.5  honest cost: false positives at this m ==")
allkeys = [chr(a) + chr(b) for a in range(97, 123) for b in range(97, 123)]   # all 676 aa..zz
stored = ["hi", "go", "up", "no", "ok", "id", "to", "do"]
for n in (1, 4, 8):
    for m in (M, 256):
        b = [0] * m
        for w in stored[:n]:
            add(b, w, m)
        fps = [w for w in allkeys if w not in stored[:n] and probe(b, w, m)[2]]
        print(f"m={m:>4}, {n} item(s) stored, {sum(b)} of {m} bits set -> "
              f"{len(fps)} of {len(allkeys)} un-stored keys say MAYBE ({len(fps) / len(allkeys) * 100:.1f}%)")
print("at m = 16 the filter saturates fast: it is a demo, not a design.")
print("Any on-screen 'tiny memory' claim must carry its m, or the part claims a property the")
print("pinned table does not have. m = 16 bits is literally 2 bytes.")
