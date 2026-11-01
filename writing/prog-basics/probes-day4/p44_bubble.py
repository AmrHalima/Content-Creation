"""Part 44 - Bubble sort. Every comparison and every swap, printed.

Run: python p44_bubble.py
"""
print("== 44.1  the script's example [3, 1, 2], every comparison logged ==")


def bubble_trace(a, verbose=True, early_exit=True):
    a = list(a)
    n = len(a)
    comps = swaps = 0
    states = []
    pass_end = []
    for passno in range(1, n):
        if verbose:
            print(f"  pass {passno}")
        swapped = False
        for i in range(n - passno):
            comps += 1
            left, right = a[i], a[i + 1]
            if left > right:
                a[i], a[i + 1] = right, left
                swaps += 1
                swapped = True
                states.append(list(a))
                if verbose:
                    print(f"    compare a[{i}]={left} > a[{i + 1}]={right} -> SWAP -> {a}")
            elif verbose:
                print(f"    compare a[{i}]={left} > a[{i + 1}]={right}? no -> {a}")
        pass_end.append(list(a))
        if verbose:
            print(f"    end of pass {passno}: {a}")
        if early_exit and not swapped:
            if verbose:
                print("    no swaps this pass -> already sorted, stop early (this variant only)")
            break
    return a, comps, swaps, states, pass_end


final, comps, swaps, states, pass_end = bubble_trace([3, 1, 2])
print(f"  final: {final} | comparisons: {comps} | swaps: {swaps}")
print("  state after each swap:", ["".join(map(str, s)) for s in states])

print()
print("== 44.2  does the script's chain match?  [3, 1, 2] -> [1, 3, 2] -> [1, 2, 3] ==")
want = [[1, 3, 2], [1, 2, 3]]
print("states after each swap, executed:", states)
print("matches the script's chain:", states == want)
print("pass-end states, executed:", pass_end)
print()
print("LABEL WARNING - this is the one trap in part 44. The two boxed states are AFTER SWAP 1 and")
print("AFTER SWAP 2. The second one is also the end of pass 1. Pass 2 compares one pair and")
print("changes nothing, so its end state is IDENTICAL to pass 1's.")
print("A frame that labels [1, 3, 2] = 'pass 1' and [1, 2, 3] = 'pass 2' is WRONG.")
print("Correct options: (a) label the two boxes AFTER SWAP, or (b) show three boxes")
print("PASS 1 [1,2,3] / PASS 2 [1,2,3] - the repeat is itself the 'this is slow' lesson.")

print()
print("== 44.3  'the largest value bubbles to the end each pass' - verified at the right index ==")
print("(an earlier version of this probe read a[n-passno-1] instead of a[n-passno] and reported")
print(" this claim FALSE. It is TRUE. The bug was in the probe, not the script.)")
for start in ([3, 1, 2], [5, 1, 4, 2, 8, 3], [9, 8, 7, 6, 5, 4, 3, 2, 1]):
    a = list(start)
    n = len(a)
    settled = []
    for passno in range(1, n):
        for i in range(n - passno):
            if a[i] > a[i + 1]:
                a[i], a[i + 1] = a[i + 1], a[i]
        settled.append(a[n - passno])          # the cell this pass just fixed
    ok = settled[0] == max(start)
    print(f"  {start}")
    print(f"    largest after pass 1 = {settled[0]} (true largest {max(start)}) -> {'TRUE' if ok else 'FALSE'}")
    print(f"    values locked at the right end, pass by pass: {settled}")
    print(f"    sorted at the end? {a == sorted(start)}")

print()
print("== 44.4  real comparison and swap counts, so O(n^2) is evidenced ==")
print("variant matters: the textbook version runs every pass; the early-exit version stops.")
print("n  | worst (reversed) textbook | worst early-exit | best (sorted) textbook | best early-exit")
for n in (3, 5, 10):
    rev = list(range(n, 0, -1))
    srt = list(range(1, n + 1))
    _, ct, st, _, _ = bubble_trace(rev, False, early_exit=False)
    _, ce, se, _, _ = bubble_trace(rev, False, early_exit=True)
    _, bt, _, _, _ = bubble_trace(srt, False, early_exit=False)
    _, be, _, _, _ = bubble_trace(srt, False, early_exit=True)
    print(f"{n:<2} | {ct:>4} comps, {st:>4} swaps      | {ce:>4} comps, {se:>4} swaps  "
          f"| {bt:>4} comps, 0 swaps          | {be:>4} comps, 0 swaps")
print()
print("the exact worst-case formula, checked against the counts:")
for n in (3, 5, 10, 20, 40):
    _, c, s, _, _ = bubble_trace(list(range(n, 0, -1)), False, early_exit=False)
    print(f"  n={n:>2}: comparisons {c:>5} = n(n-1)/2 = {n * (n - 1) // 2:<5} match {c == n * (n - 1) // 2}"
          f" | swaps {s:>5} = same (fully reversed: every pair is inverted)")

print()
print("doubling test - the only honest way to show 'quadratic':")
prev_n = prev_c = None
for n in (5, 10, 20, 40, 80):
    _, c, _, _, _ = bubble_trace(list(range(n, 0, -1)), False, early_exit=False)
    if prev_c is not None:
        print(f"  n {prev_n} -> {n} (x{n / prev_n:.0f}) : comparisons {prev_c} -> {c} (x{c / prev_c:.2f}) "
              f"- expected x4 for quadratic")
    prev_n, prev_c = n, c
print("=> ratios converge to 4.0 as n grows; the gap at small n is the '-1' in n(n-1)/2, not a")
print("   broken claim. On screen, print n(n-1)/2 and the two counts for one doubling pair")
print("   (10 -> 20: 45 -> 190), never a lone 'n^2' with no number under it.")
print()
print("the part says 'It's easy to understand but slow, O(n^2)'. Strictly: worst and average")
print("case O(n^2); best case is O(n) WITH the early-exit flag and O(n^2) WITHOUT it. n=3, sorted")
print("input: textbook 3 comparisons, early-exit 2. Both executed above.")

print()
print("== 44.5  'nobody uses it' - the fair comparison, no stopwatch needed ==")
n = 1000
_, c, s, _, _ = bubble_trace(list(range(n, 0, -1)), False, early_exit=False)
import math
timsort_like = n * math.log2(n)
print(f"bubble sort on {n} items, worst case: {c} comparisons, {s} swaps (executed above)")
print(f"n log2 n for the same {n} = {timsort_like:.0f}  (a good sort's comparison count grows this way)")
print(f"ratio: {c / timsort_like:.0f}x more comparisons at n=1000, growing with n.")
print("This is arithmetic on counts, not a timed claim, so it is portable across machines.")
print("NOTE: CPython's sort() is Timsort - O(n log n) worst case, and it detects an already")
print("descending run in O(n). Do NOT stage a race against reversed input: that is Timsort's")
print("best case and the ratio becomes meaningless (an earlier draft of this probe did exactly")
print("that and printed a 2-million-x number, which was an artifact of the comparison, not a fact).")
print("The explain line's 'real code uses faster sorts' is true: sorted() is not bubble sort.")
