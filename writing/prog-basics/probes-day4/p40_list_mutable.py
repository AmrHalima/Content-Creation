# Part 40 chamber D - "A list is mutable: you can add, remove, and change items."
# and "A tuple is immutable: once created, it's fixed."
# Run as a FILE so every printed line is real stdout.
nums = [10, 20, 30]

nums[1] = 99            # change
print("change  nums[1] = 99      ->", nums)

nums.append(40)         # add
print("add     nums.append(40)   ->", nums)

nums.remove(99)         # remove the item just changed - remove(20) would raise
                        # ValueError, because line 7 overwrote the 20
print("remove  nums.remove(99)   ->", nums)

point = (3, 4)
print("tuple stays fixed         ->", point, "| len", len(point))

print()
print("identity vs value, the reason immutability is what makes a tuple hashable:")
a = [1, 2]
b = [1, 2]
print("  a == b:", a == b, "| same object:", a is b)
a[0] = 9                # actually performed, so the line below is evidence not narration
print("  after a[0] = 9 -> a is", a, "and b is still", b, "(two separate lists)")
print("  the printed a really did change:", a == [9, 2], "| b untouched:", b == [1, 2])
ta, tb = (1, 2), (1, 2)
print("  (1,2) == (1,2):", ta == tb, "| hash equal:", hash(ta) == hash(tb))
print("  tuple value can never drift, so its hash can never drift - that is the whole argument")
print("  for 'a tuple of hashable items can be a dictionary key', and why the list version cannot.")
