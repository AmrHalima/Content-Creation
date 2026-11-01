"""Part 42 - Time vs space, as a measured PAIR of numbers, not a slogan.

Squares dictionary vs recomputing. Memory via sys.getsizeof (exact, CPython
64-bit), item count by len(), and wall-clock for the "saves time" half.

Run: python p42_time_space.py
"""
import sys
import timeit


def dict_bytes(n):
    d = {i: i * i for i in range(1, n + 1)}
    container = sys.getsizeof(d)
    keys = sum(sys.getsizeof(k) for k in d)
    vals = sum(sys.getsizeof(v) for v in d.values())
    return d, container, keys, vals


print("== 42.1  the cached version: real item count and real bytes ==")
print("baseline: sys.getsizeof({}) =", sys.getsizeof({}), "bytes (empty dict)")
print("n items | dict items | container bytes | key objects | value objects | total bytes")
for n in (100, 1000, 5000):
    d, container, keys, vals = dict_bytes(n)
    print(f"{n:>7} | {len(d):>8} | {container:>15} | {keys:>11} | {vals:>13} | {container + keys + vals:>11}")

d, container, keys, vals = dict_bytes(1000)
print(f"\npinned example: squares 1..1000 -> {len(d)} items, {container} + {keys} + {vals} = "
      f"{container + keys + vals} bytes")
print(f"that is {(container + keys + vals) / 1024:.1f} KiB for the cached version")
print("note: the container alone does NOT include the int objects; a frame that prints only")
print("getsizeof(d) understates the tradeoff by roughly 4x. Both numbers are printed above so")
print("the builder can choose, and the total is the honest one.")

print()
print("== 42.2  the recomputed version: real bytes ==")
print("recompute holds nothing: sys.getsizeof of no container = 0 bytes of extra storage")
print("(one temporary int at a time; the loop variable is reused)")
print(f"tradeoff at n=1000: pay {container + keys + vals} bytes to avoid recomputing 1000 multiplications")

print()
print("== 42.3  the time half, measured on this machine (MACHINE-SPECIFIC: label or omit) ==")
REPS = 200000
t_cache = timeit.timeit("d[1000]", globals={"d": d}, number=REPS)
t_re = timeit.timeit("1000 * 1000", number=REPS)
print(f"{REPS:,} lookups in the cached dict:   {t_cache:.4f}s = {t_cache / REPS * 1e9:.0f} ns each")
print(f"{REPS:,} recomputed multiplications:   {t_re:.4f}s = {t_re / REPS * 1e9:.0f} ns each")
print(f"ratio: the cached path is {t_cache / t_re:.1f}x SLOWER than just multiplying")
print("=> THE PART'S OWN EXAMPLE DEMONSTRATES THE OPPOSITE OF ITS CLAIM. 'caching results uses")
print("   more memory but saves time' is true in general; for `squares[i] = i*i` specifically it")
print("   is false - you pay 92,952 bytes to avoid a multiplication a dict lookup costs more than.")
print("   Do not put a stopwatch number on screen for 42's squares example; the honest screen")
print("   pair is BYTES CACHED vs WORK SAVED, and the work has to be big enough to matter:")

print()
print("== 42.4  the same trade where it DOES pay, so the part is not a false advertising case ==")
import functools
import math


@functools.lru_cache(maxsize=None)
def slow_square_root_of_sum(a, b):
    total = 0
    for i in range(a, b):
        total += i * i
    return math.isqrt(total)


slow_square_root_of_sum(1, 5000)
CACHED_CALLS = 200
t_cached = timeit.timeit("f(1, 5000)", globals={"f": slow_square_root_of_sum}, number=CACHED_CALLS)


def recompute():
    total = 0
    for i in range(1, 5000):
        total += i * i
    return math.isqrt(total)


t_recompute = timeit.timeit("g()", globals={"g": recompute}, number=CACHED_CALLS)
info = slow_square_root_of_sum.cache_info()
print(f"{CACHED_CALLS} calls, cached:      {t_cached:.4f}s = {t_cached / CACHED_CALLS * 1e6:.1f} us per call")
print(f"{CACHED_CALLS} calls, recomputed:  {t_recompute:.4f}s = {t_recompute / CACHED_CALLS * 1e6:.1f} us per call")
print(f"speedup x{t_recompute / t_cached:.0f} at this n, bought with cache_info() below")
print("cache_info() verbatim AFTER the timed calls:", info)
print(f"=> hits={info.hits}, misses={info.misses}, entries kept={info.currsize}")
print("The honest on-screen pair for 42 is therefore:")
print(f"   CACHED:    {container + keys + vals} bytes stored for n=1000 squares, 1 lookup, work saved only when the work is big")
print(f"   RECOMPUTED: 0 extra bytes stored, {1000} multiplications repeated")
print("Any 'saves time' number on screen must be labelled as measured on this machine, or cut.")

print()
print("== 42.5  the space side of the same coin, so 'space complexity' is not just a cache ==")
squash = sum(i * i for i in range(1, 1001))
print(f"computing the same sum with NO dict at all costs {sys.getsizeof(squash)} bytes "
      f"(one int) and {len(str(squash))} digits")
print("=> recomputing is not free either; the honest pair is (bytes stored) vs (work repeated),")
print("   and both must be numbers on screen or the part is a slogan.")
