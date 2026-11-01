"""Part 34 - Circular buffers. Ring of size 3, write A B C D.

Everything printed here is executed state, so a frame can draw each cell plus
head/tail per step. Run: python p34_circular_buffer.py
"""
SIZE = 3


class Ring:
    """Fixed-size ring. `tail` is the next write slot, `head` the oldest live slot."""

    def __init__(self, size):
        self.size = size
        self.cells = [None] * size
        self.head = 0
        self.tail = 0
        self.count = 0
        self.overwrote = None

    def write(self, item):
        self.overwrote = None
        if self.count == self.size:          # full: this write destroys the oldest
            self.overwrote = self.cells[self.tail]
            self.head = (self.head + 1) % self.size
        self.cells[self.tail] = item
        self.tail = (self.tail + 1) % self.size
        self.count = min(self.count + 1, self.size)
        return self

    def live_order(self):
        """Oldest -> newest, reading round the ring from head."""
        return [self.cells[(self.head + i) % self.size] for i in range(self.count)]

    def row(self, step, wrote):
        return (step, wrote, "".join(c or "." for c in self.cells),
                self.head, self.tail, self.count,
                self.overwrote, "->".join(self.live_order()))


print("== 34.1  ring of size 3, writes A B C D ==")
print("step | wrote | cells[0,1,2] | head | tail | count | evicted | oldest->newest")
r = Ring(SIZE)
for step, ch in enumerate("ABCD", start=1):
    r.write(ch)
    s, w, cells, head, tail, count, ev, order = r.row(step, ch)
    print(f"{s:>4} | {w:^5} | {cells:^12} | {head:>4} | {tail:>4} | {count:>5} | {str(ev):^7} | {order}")

print()
print("cells after the four writes, literally:", r.cells)
print("did D overwrite A? ", r.overwrote == "A", "(evicted cell reported in the table above)")
print("len(cells) after 4 writes:", len(r.cells), "(the array never grew)")

print()
print("== 34.2  the hook's actual case: a log that keeps only the latest 100 entries ==")
log = Ring(100)
for i in range(1, 251):                      # 250 lines written
    log.write(f"line{i}")
print("writes issued: 250 | slots: 100 | len(cells):", len(log.cells),
      "| count:", log.count)
print("first live entry:", log.live_order()[0], "| last live entry:", log.live_order()[-1])
print("equals the last 100 of a plain list?",
      log.live_order() == [f"line{i}" for i in range(151, 251)])
print("head slot:", log.head, "tail slot:", log.tail, "(tail == head when full: writes wrap onto the oldest)")
