"""Part 43 - Binary search. Real probe sequence and real step counts.

Run: python p43_binary.py
"""
import math

print("== 43.1  the script's example: find 7 in [1, 3, 5, 7, 9], every probe logged ==")


def bsearch_trace(arr, target):
    lo, hi = 0, len(arr) - 1
    probes = []
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            probes.append((len(probes) + 1, lo, hi, mid, arr[mid], "== target -> FOUND"))
            return probes, True
        if arr[mid] < target:
            probes.append((len(probes) + 1, lo, hi, mid, arr[mid], f"< {target} -> discard LEFT, lo = {mid + 1}"))
            lo = mid + 1
        else:
            probes.append((len(probes) + 1, lo, hi, mid, arr[mid], f"> {target} -> discard RIGHT, hi = {mid - 1}"))
            hi = mid - 1
    return probes, False


arr = [1, 3, 5, 7, 9]
probes, found = bsearch_trace(arr, 7)
print("probe | lo | hi | mid | arr[mid] | what happens")
for p in probes:
    print(f"{p[0]:>5} | {p[1]:>2} | {p[2]:>2} | {p[3]:>3} | {p[4]:>7} | {p[5]}")
print("found:", found, "| TOTAL PROBES:", len(probes))

print()
print("== 43.2  does the script's narration match the trace? ==")
print("script says: 'the middle is 5, go right, found 7'")
print("trace says : probe 1 mid = 2 -> arr[2] = 5; 5 < 7 so the LEFT half is discarded and the")
print("             search goes right; probe 2 mid = 3 -> arr[3] = 7 -> found.")
print("middle value 5: TRUE. 'go right': TRUE. 'found': TRUE. Number of probes the script leaves")
print("unstated: 2. A frame that animates two probe boxes is exactly right; three is not.")

print()
print("== 43.3  worst-case probes as n grows, measured by brute force ==")
print("n           | measured worst probes | ceil(log2 n) | ceil(log2(n+1)) | log2(n)")
for n in (5, 8, 16, 1000, 1023, 1024, 1000000, 10**9):
    if n <= 1024:
        a = list(range(0, 2 * n, 2))
        worst = max(len(bsearch_trace(a, t)[0]) for t in list(a) + [-1, 2 * n + 1])
    else:
        def worst_virtual(size):
            m = 0
            for t in (0, size - 1, size // 2, size // 2 + 1, size - 2):
                lo, hi, c = 0, size - 1, 0
                while lo <= hi:
                    c += 1
                    mid = (lo + hi) // 2
                    if mid == t:
                        break
                    if mid < t:
                        lo = mid + 1
                    else:
                        hi = mid - 1
                m = max(m, c)
            return m
        worst = worst_virtual(n)
    print(f"{n:<11} | {worst:>21} | {math.ceil(math.log2(n)):>14} | {math.ceil(math.log2(n + 1)):>16} "
          f"| {math.log2(n):.3f}")
print("=> the closed form that MATCHES the measured counts is ceil(log2(n+1)), not ceil(log2 n).")
print("   They differ exactly at powers of two: n=8 -> 4 probes but ceil(log2 8) = 3;")
print("   n=1024 -> 11 probes but ceil(log2 1024) = 10. 1000 is not a power of two, so the CTA's")
print("   answer is 10 either way - lucky, but do not let that teach the wrong formula.")

print()
print("== 43.4  the two CTAs, answered with the numbers above ==")
print("Hook: 'Find one number among a billion in about 30 steps.'")
print(f"  log2(1,000,000,000) = {math.log2(10**9):.4f} -> worst case {2 ** 30 > 10**9 and 30 or 29} probes.")
print("  2^30 =", 2 ** 30, "> 1,000,000,000, so 30 halvings is enough. 'about 30' is TRUE,")
print("  and 30 is the worst case, not an average.")
print("CTA: 'about how many steps for 1,000 items?'")
a = list(range(0, 2000, 2))
worst1000 = max(len(bsearch_trace(a, t)[0]) for t in a + [-1, 2001])
print(f"  measured worst case over all 1,000 values plus both miss cases = {worst1000} probes.")
print(f"  ceil(log2(1000)) = {math.ceil(math.log2(1000))}  (log2(1000) = {math.log2(1000):.4f})")
print(f"  best case = 1 probe (target happens to be the first middle).")
print("  pinned answer for the comment: 10.")
print("  2^10 =", 2 ** 10, ">= 1000, which is why 10 is the number and not 9.")

print()
print("== 43.5  'works on sorted data' - what happens if you ignore that ==")
unsorted = [5, 1, 9, 3, 7]
probes, found = bsearch_trace(unsorted, 1)
for p in probes:
    print(f"  probe {p[0]}: mid {p[3]} -> {p[4]} | {p[5]}")
print("searching an UNSORTED list for 1 reports found =", found,
      "-> the structure is a guarantee, not a preference.")
