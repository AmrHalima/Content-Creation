// Part 39 / Part 38 in JavaScript - what the "depends on the language" hedge can and
// cannot show, and why JS cannot be the second chamber for a hash number.
//
// Run: node p39_p38_js_check.mjs
//
// Reason this file exists: a builder adding a JS chamber to 39 or 38 would have to
// INVENT both the capacity number and the hash number, because neither is observable
// or defined in the language. This proves it rather than asserting it.

console.log("== 39-JS  is a JS array's allocated capacity observable? ==");
const a = [];
for (let i = 0; i < 9; i++) a.push(i);
console.log("a.length after 9 pushes:", a.length);
console.log("'capacity' property:", a.capacity);
console.log("'allocated' property:", a.allocated);
console.log("Object.keys of the array (index keys only?):", JSON.stringify(Object.keys(a)));
console.log("JSON size proxy - is there ANY standard way to read V8's backing-store slack?");
console.log("  Reflect.ownKeys(a).length =", Reflect.ownKeys(a).length,
            "(indices + 'length' - no capacity field)");
console.log("=> NO. V8 keeps backing-store slack internally and exposes nothing. The only honest");
console.log("   JS-side statement is the script's own hedge: 'the growth factor depends on the");
console.log("   language'. A JS capacity NUMBER on screen would be fabricated. CPython numbers");
console.log("   (p39_capacity.py) are real because sys.getsizeof reports the allocated block.");

console.log();
console.log("== 38-JS  is there a built-in string hash to print? ==");
console.log("typeof 'ab'.hashCode:", typeof "ab".hashCode);
console.log("typeof Object.hash:", typeof Object.hash);
console.log("typeof globalThis.hash:", typeof globalThis.hash);
let exposed = undefined;
try {
  // Structured cloning would throw on a function key; instead probe for a name that
  // a JS tutorial might claim exists.
  exposed = typeof globalThis.hashCode;
} catch (e) {
  exposed = "threw: " + e.message;
}
console.log("globalThis.hashCode:", exposed);
console.log("=> JavaScript defines NO string hash function in the language. Any hash on screen");
console.log("   for part 38 is a function the part itself writes down - which is fine, and is");
console.log("   exactly why 38 must SHOW its formula (see p38_hash.py: sum of char codes).");

console.log();
console.log("== deterministic JS hash, the same sum-of-ord rule, for cross-language honesty ==");
const sumOrd = (s) => [...s].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
for (const k of ["ab", "cd"]) {
  console.log(`  ${JSON.stringify(k)}: ord sum = ${sumOrd(k)} -> % 4 = ${sumOrd(k) % 4}`);
}
console.log("=> same numbers as Python's sum(ord(c)) % 4 (195 -> 3, 199 -> 3). The 38 lesson is");
console.log("   portable ONLY because the part supplies its own hash, not because both");
console.log("   languages hash strings alike. Say 'here is OUR toy hash', never 'Python/JS hash'.");
