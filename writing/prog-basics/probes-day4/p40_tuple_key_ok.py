# Part 40 chamber C - "A tuple of hashable items can even be a dictionary key."
# Run as a FILE so the printed output is real stdout.
location = {}
location[(3, 4)] = "the point at 3, 4"
location[(0, 0)] = "origin"
print(location[(3, 4)])
print(location)
print("hashable?", hash((3, 4)) is not None)
print("a tuple holding a list is NOT:", end=" ")
try:
    hash(((1, 2), [3]))
except TypeError as exc:
    print(exc)
