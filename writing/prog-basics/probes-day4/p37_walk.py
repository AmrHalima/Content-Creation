"""Part 37 - Array vs linked list, counted rather than asserted.

"Access item 500: array O(1), linked list O(n)" becomes a real hop count here.
Note the two readings of "item 500" - index 500 (0-based) and the 500th item
(1-based) - because a frame can only draw one of them.

Run: python p37_walk.py
"""
import sys


class Node:
    __slots__ = ("value", "next")

    def __init__(self, value, next_=None):
        self.value, self.next = value, next_


N = 501
arr = list(range(N))

# build linked list 0 -> 1 -> ... -> N-1
head = Node(N - 1)
for v in range(N - 2, -1, -1):
    head = Node(v, head)


def walk(head, index):
    hops, cur = 0, head
    while index:
        cur = cur.next
        hops += 1
        index -= 1
    return cur.value, hops


print("== 37.1  hop count to reach index 500 from head ==")


def ordinal(i):
    return f"{i}{'th' if 11 <= i % 100 <= 13 else {1: 'st', 2: 'nd', 3: 'rd'}.get(i % 10, 'th')}"


for idx in (499, 500):
    value, hops = walk(head, idx)
    print(f"linked list: reach index {idx} (the {ordinal(idx + 1)} item) "
          f"-> value {value} in {hops} hops")
print("hops == index for a singly linked list starting at head (0 hops for index 0).")
print("OFF-BY-ONE HAZARD: 'item 500' means index 500 = 500 hops (the 501st item), but the 500th")
print("item is index 499 = 499 hops. A frame drawing a chain of boxes must pick ONE and label the")
print("box with its INDEX, not its counting number.")

print()
print("== 37.2  the array does the same thing ==")
print("array: arr[500] ->", arr[500], "| pointer dereferences performed:", 1,
      "| comparisons in a loop: 0 (there is no loop)")

print()
print("== 37.3  node objects cost extra memory, measured ==")
print(f"Python {sys.version.split()[0]}, 64-bit")
print("list of", N, "ints  sys.getsizeof(list object) =", sys.getsizeof(arr), "bytes")
node_bytes = sys.getsizeof(Node(0))
print("one Node with __slots__ = ('value','next')      =", node_bytes, "bytes")
print(f"{N} nodes = {N * node_bytes} bytes, before counting the {N} int objects each one points at")
print("so the same 501 values cost at least",
      round(N * node_bytes / sys.getsizeof(arr), 2), "x the container bytes in the linked form")

print()
print("== 37.4  the insert claim, counted ==")
mid = 250
# linked: reach the node, then splice
value, hops = walk(head, mid)
print(f"linked insert after index {mid}: {hops} hops to get there + 2 pointer writes + 1 new node "
      "(the walk is the cost, the splice is free)")
b = list(range(N))
b.insert(mid + 1, 999)
print(f"array insert at position {mid + 1}: {N - (mid + 1)} elements shifted right (counted by CPython memmove)")
print("array length after insert:", len(b))

print()
print("== 37.5  what the wall clock actually says (machine-specific - NOT a screen claim) ==")
import timeit
t_arr = timeit.timeit("a[500]", number=200000, globals={"a": arr})
t_link = timeit.timeit("h", number=200000, globals={"h": head})
print(f"array[500]: {t_arr:.4f}s for 200k reads | linked HEAD pointer read: {t_link:.4f}s for 200k")
print("Timing depends on this machine and must not be printed as a lesson number;")
print("the hop counts in 37.1 are the reproducible evidence.")
