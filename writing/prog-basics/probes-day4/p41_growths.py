"""Part 41 - Big O. Exact values for the curves, and the CTA answered by counting.

Every number here is integer or exact-fraction arithmetic - nothing a chart has to
fudge. Run: python p41_growths.py
"""
import math

print("== 41.1  the growth table (exact, plottable) ==")
NS = [1, 2, 4, 8, 16, 32, 64]
print("n".ljust(4), "| O(1)", "| O(log n)", "|   O(n)  |  O(n log n)  |  O(n^2)")
for n in NS:
    print(f"{n:<4} |  {1:<4} | {math.log2(n):>8.0f} | {n:>7} | {n * math.log2(n):>11.0f} | {n * n:>7}")

print()
print("== 41.2  what each curve ACTUALLY counts, measured by instrumenting real loops ==")


def count_constant(n):      # O(1): one job regardless of n
    return 1


def count_linear(n):        # O(n): one step per item
    c = 0
    for _ in range(n):
        c += 1
    return c


def count_halving(n):       # O(log n): halve until gone
    c = 0
    while n > 0:
        n //= 2
        c += 1
    return c


def count_nested(n):        # O(n^2): loop inside a loop, both over n
    c = 0
    for _ in range(n):
        for _ in range(n):
            c += 1
    return c


def count_nested_const(n):  # the counter-example: loop inside a loop, inner over 3
    c = 0
    for _ in range(n):
        for _ in range(3):
            c += 1
    return c


print("n   | constant | linear | halving | nested(n x n) | nested(n x 3)")
for n in NS:
    print(f"{n:<3} | {count_constant(n):>8} | {count_linear(n):>6} | {count_halving(n):>7} "
          f"| {count_nested(n):>14} | {count_nested_const(n):>13}")

print()
print("== 41.3  THE SCRIPT'S OWN CLAIM, TESTED: 'a loop inside a loop is O(n^2)' ==")
print("n = 64: nested over n x n =", count_nested(64), "steps | nested with a fixed inner of 3 =",
      count_nested_const(64), "steps")
print("=> inner loop over a CONSTANT makes the whole thing O(n), not O(n^2). As written the")
print("   sentence is false for the extremely common `for i: for j in range(3)` shape.")
d1, d2 = count_nested_const(32), count_nested_const(64)
n1, n2 = count_nested(32), count_nested(64)
print(f"   doubling test, n x 3: 32 -> {d1} | 64 -> {d2} = x{d2 / d1:.1f} (linear: work doubles)")
print(f"   doubling test, n x n: 32 -> {n1} | 64 -> {n2} = x{n2 / n1:.1f} (quadratic: work quadruples)")
print("   The fix is two words: 'a loop inside a loop over the SAME size'.")

print()
print("== 41.4  'O(log n) halves the work each step' - convention matters, so measure both ==")
print("n    | halving loop iterations | log2(n) | ceil(log2 n) | floor(log2 n)+1")
for n in NS:
    print(f"{n:<4} | {count_halving(n):>23} | {math.log2(n):>7.0f} | {math.ceil(math.log2(n)):>12} "
          f"| {math.floor(math.log2(n)) + 1:>15}")
print("=> 'halves the work each step' is TRUE as behaviour, but the count a loop prints is")
print("   floor(log2 n) + 1, not log2 n, because the last iteration is the one that reaches zero.")
print("   A chart that plots log2(n) and a box that counts loop passes will DISAGREE by one.")
print("   Pin one convention per part: 41 shows the curve values (log2), 43 shows measured probe")
print("   counts. Never put both numbers in the same frame.")

print()
print("== 41.5  the CTA answered: Big O of a hash map lookup ==")
print("AVERAGE case is O(1). Measured by counting real work a dict does per lookup:")


class Counting:
    """Counts every __hash__ and __eq__ a dict performs, so 'constant' is a count not an assertion."""
    __slots__ = ("v",)
    hashes = 0
    eqs = 0

    def __init__(self, v):
        self.v = v

    def __hash__(self):
        Counting.hashes += 1
        return hash(self.v)

    def __eq__(self, other):
        Counting.eqs += 1
        return self.v == other.v


print("keys    | lookup of the SAME object | lookup of an EQUAL new object")
for n in (10, 1000, 100000, 1000000):
    keys = [Counting(i) for i in range(n)]
    d = dict.fromkeys(keys, "x")
    Counting.hashes = Counting.eqs = 0
    _ = d[keys[n // 2]]                       # identity shortcut: no __eq__ at all
    same = (Counting.hashes, Counting.eqs)
    Counting.hashes = Counting.eqs = 0
    _ = d[Counting(n // 2)]                   # a fresh equal key: one equality test
    new = (Counting.hashes, Counting.eqs)
    print(f"{n:>7} | {same[0]} hash, {same[1]} eq            | {new[0]} hash, {new[1]} eq")
print("=> flat at 1 hash call and at most 1 equality test from 10 keys to 1,000,000 keys.")
print("   That is the measured O(1) average. (An earlier version of this probe printed '1 and 1'")
print("   for the identity case too - the real number there is 0 eq. Fixed.)")
print("WHAT 'AVERAGE' IS HIDING:")
print("     worst case is O(n): if every key collides the lookup walks a chain. Executed proof,")
print("     counters reset AFTER the dict is built so only the lookup is counted:")


class AlwaysSame(Counting):
    def __hash__(self):
        Counting.hashes += 1
        return 7


bad = dict.fromkeys([AlwaysSame(i) for i in range(200)], "x")
Counting.hashes = Counting.eqs = 0
_ = bad[AlwaysSame(199)]
print(f"     dict of 200 keys that all hash to 7 -> ONE lookup did {Counting.eqs} equality tests")
print(f"     (build cost is excluded; the ~n behaviour is the point: 200 keys, ~200 tests)")
for nn in (50, 200, 800):
    b2 = dict.fromkeys([AlwaysSame(i) for i in range(nn)], "x")
    Counting.hashes = Counting.eqs = 0
    _ = b2[AlwaysSame(nn - 1)]
    print(f"       n = {nn:>3}: {Counting.eqs} equality tests")
print("  2. it assumes a good hash and a resized table, so load factor stays low; the same")
print("     structure degrades if either stops holding;")
print("  3. 'constant' counts comparisons, not wall-clock time: a bigger table costs more cache")
print("     misses per lookup even at 1 comparison. The part says 'ignores constants' - true,")
print("     and that is exactly why the CTA's answer is O(1) while a real lookup is not free.")
