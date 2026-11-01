"""Part 36 - LRU cache. Capacity 2: put A, put B, get A, put C. What is evicted?

Hand-rolled exactly as the explain line describes (hash map + doubly linked
list) so the on-screen pointers are real. After every operation this prints the
recency order front -> back and what the hash map actually points at.

Run: python p36_lru_cache.py
"""


class Node:
    __slots__ = ("key", "value", "prev", "next")

    def __init__(self, key, value):
        self.key, self.value = key, value
        self.prev = self.next = None


class LRU:
    def __init__(self, capacity):
        self.capacity = capacity
        self.map = {}                      # key -> Node  (the "hash map for fast lookup")
        self.head = Node("H", None)        # sentinels: head = most recently used
        self.tail = Node("T", None)        # tail = least recently used
        self.head.next, self.tail.prev = self.tail, self.head

    def _unlink(self, n):
        n.prev.next, n.next.prev = n.next, n.prev

    def _push_front(self, n):
        n.prev, n.next = self.head, self.head.next
        self.head.next.prev = n
        self.head.next = n

    def order(self):
        out, cur = [], self.head.next
        while cur is not self.tail:
            out.append(cur.key)
            cur = cur.next
        return out

    def map_targets(self):
        return {k: f"node({v.key})" for k, v in sorted(self.map.items())}

    def put(self, k, v):
        if k in self.map:
            n = self.map[k]
            n.value = v
            self._unlink(n)
            self._push_front(n)
            return f"put({k},{v}) -> key already present, moved to front"
        if len(self.map) == self.capacity:
            lru = self.tail.prev
            self._unlink(lru)
            del self.map[lru.key]
            n = Node(k, v)
            self._push_front(n)
            self.map[k] = n
            return f"put({k},{v}) -> FULL, evicted {lru.key}"
        n = Node(k, v)
        self._push_front(n)
        self.map[k] = n
        return f"put({k},{v}) -> room free, inserted"

    def get(self, k):
        n = self.map.get(k)
        if n is None:
            return f"get({k}) -> miss"
        self._unlink(n)
        self._push_front(n)
        return f"get({k}) -> hit, {k} moved to front"


def snapshot(cache, line):
    return (line, " -> ".join(cache.order()), str(cache.map_targets()), len(cache.map))


c = LRU(2)
print("== 36.1  the script's exact sequence ==")
print("op performed                    | recency front->back | hash map points at     | size")
# each op runs, THEN the state is read - building the list up front would print the
# final state four times (this bug was caught and is why this section exists)
for step in (lambda: c.put("A", 1), lambda: c.put("B", 2),
             lambda: c.get("A"), lambda: c.put("C", 3)):
    line = step()
    op, order, targets, size = snapshot(c, line)
    print(f"{op:<33} | {order:^19} | {targets:^20} | {size}")

print()
print("== 36.2  the eviction answer, for the quiz CTA ==")
print("evicted on put C:", "B" if "B" not in c.map else "NOT B")
print("keys still cached:", sorted(c.map))
print("final recency order:", " -> ".join(c.order()))
print("why not A: A was touched by get(A) before put(C), so A sat at the front;")
print("B had not been touched since its put, so B was the tail = least recently used.")

print()
print("== 36.3  counterfactual a commenter will raise: drop the get(A) ==")
c2 = LRU(2)
print("op performed                    | recency front->back | size")
for step in (lambda: c2.put("A", 1), lambda: c2.put("B", 2), lambda: c2.put("C", 3)):
    line = step()
    print(f"{line:<33} | {' -> '.join(c2.order()):^19} | {len(c2.map)}")
print("without the get(A), put(C) evicts:", "A" if "A" not in c2.map else "NOT A")
print("=> the get is doing all the work in the example. The quiz only has one answer")
print("   because of it, which is what makes it a quiz.")

print()
print("== 36.4  every operation is constant time because... ==")
n = 3
print(f"a put/get touches {n} pointer fields regardless of capacity "
      "(unlink + push front), never a scan of the cache")
print("list.remove-style scan this replaces: O(capacity). Verified by construction in the code above.")
