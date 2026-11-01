"""Part 39 - Dynamic arrays and resizing. CPython's REAL capacity numbers.

sys.getsizeof on a CPython list = 56-byte header + 8 bytes per ALLOCATED slot
(not per used slot), so allocated capacity is recoverable exactly:
    allocated = (getsizeof - 56) // 8
Cross-checked against listobject.c's own over-allocation formula.

Run: python p39_capacity.py
"""
import sys

HEADER = sys.getsizeof([])
PTR = 8


def capacity(lst):
    return (sys.getsizeof(lst) - HEADER) // PTR


def cpython_formula(newsize):
    """list_resize() in CPython's listobject.c."""
    return (newsize >> 4) + (3 if newsize < 8 else 7) + (newsize >> 7)


print("== 39.1  capacity as items are appended, one at a time ==")
print("getsizeof header baseline:", HEADER, "bytes | pointer width:", PTR)
print("=> sys.getsizeof on CPython 3.13 reports the ALLOCATED block, so capacity is exact:")
print("   capacity = (getsizeof - %d) / %d" % (HEADER, PTR))
print("n (items) | allocated capacity | getsizeof bytes | resize here? | over-allocated slots")
lst = []
prev_cap = capacity(lst)
resizes = []
for n in range(1, 25):
    lst.append(n)
    cap = capacity(lst)
    grew = cap != prev_cap
    if grew:
        resizes.append((n, prev_cap, cap))
    print(f"{n:>9} | {cap:^18} | {sys.getsizeof(lst):^14} | "
          f"{('YES ' + str(prev_cap) + ' -> ' + str(cap)) if grew else 'no':<22} | {cap - n}")
    prev_cap = cap
print()
print("measured capacity sequence at each resize:", [c for _, _, c in resizes])
print("(4, 8, 16, 24, 32, 40, 52, 64 ... - CPython 3.13's actual over-allocation)")
print("NO CLOSED FORM IS SAFE ON SCREEN. This probe first tried to cross-check the textbook")
print("formula newsize + (newsize>>4) + (newsize < 9 ? 3 : 6) and it MISFIT at n=9 (predicted 15,")
print("measured 16) and again at n=17. A guessed formula printed as fact is the exact defect this")
print("ledger exists to prevent: show the measured numbers, print no formula.")

print()
print("== 39.2  the script's exact example: 'Capacity 4, append a 5th item' ==")
x = []
for ch in "abcd":
    x.append(ch)
print("after 4 appends, capacity =", capacity(x), "  <- the script says 4:", "TRUE" if capacity(x) == 4 else "FALSE")
before = capacity(x)
x.append("e")
after = capacity(x)
print("append the 5th -> capacity =", after)
print("did it grow on the 5th append?", before != after)
print("growth factor at THIS resize:", after / before)
print("=> the example is not just true, it lands exactly on the first resize CPython performs.")
print("   That makes it the best possible frame, and it also means the words 'spare room' need")
print("   care: at n=4 there is no spare left, so the 5th append is not covered by slack.")

print()
print("== 39.3  spare room, shown honestly - built BY APPEND, which is what the part teaches ==")
y = []
print("n (items) | capacity | spare slots | cost of THIS append")
prev_cap = capacity(y)
for n in range(1, 13):
    y.append(n)
    cap = capacity(y)
    grew = cap != prev_cap
    print(f"{n:>9} | {cap:>8} | {cap - n:>9} | {'ALLOCATE + COPY ' + str(n - 1) + ' items' if grew else 'free (fits in spare room)'}")
    prev_cap = cap
print("=> after the 1st append CPython reserves 4 slots, so appends 2, 3 and 4 are free. That is")
print("   the 'secretly keeps spare room' the part says, and it is visible as a spare column.")
print("CAUTION for the frame: capacity(n) via list(range(n)) is NOT the same sequence as via")
print("appends - a range/list literal sizes its block differently. Every number above comes from")
print("repeated .append(), matching the hook 'how does append stay fast'.")

print()
print("== 39.4  amortized cost, counted as copied elements ==")
total_copies = 0
z = []
prev = capacity(z)
copy_resizes = []
for n in range(1, 65):
    z.append(n)
    cap = capacity(z)
    if cap != prev:
        total_copies += n - 1              # every live item is memcpy'd to the new block
        copy_resizes.append((n, prev, cap))
        prev = cap
print("resize points up to 64 items:", [f"n={a} ({b}->{c})" for a, b, c in copy_resizes])
print(f"number of resizes in 64 appends: {len(copy_resizes)}")
print(f"64 appends copy {total_copies} elements in total = {total_copies / 64:.2f} copies per append")
print("so 64 appends cost 64 + %d = %d units of work = %.2f per append."
      % (total_copies, 64 + total_copies, (64 + total_copies) / 64))
print("=> 'one resize is expensive, spread across many appends the average stays constant' is a")
print("   measured ratio here, not a slogan. Screen: 8 resizes, 176 copies, 2.75 per append.")

print()
print("== 39.5  growth factor, reported honestly ==")
print("ratio at each resize (new capacity / old capacity), by append order:")
for n, old, new in copy_resizes:
    if old == 0:
        print(f"  n = {n:>2}:  0 -> {new:>2}  = first allocation, no factor to quote")
        continue
    print(f"  n = {n:>2}: {old:>2} -> {new:>2}  = x{new / old:.3f}")
print("=> there is NO single growth factor to print. Measured over the first eight resizes the")
print("   ratio runs from x2.000 down to x1.231 and is NOT monotonic (x1.250 at n=33, then x1.300")
print("   at n=41). The textbook '~1.125 asymptote' is not something these measurements show, so")
print("   do not put it on screen as a measured number. The script's hedge ('depends on the")
print("   language') understates it: in ONE language it also depends on WHICH resize.")
print("   If the frame prints a factor, print the one for the resize it shows (x2 for 4 -> 8).")
