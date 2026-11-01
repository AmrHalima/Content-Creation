# YouTube Shorts — titles and descriptions (all `videos/*`)

**Built from:** each project's `BRIEF.md` frontmatter, the shipped narration in its `SCRIPT.md`,
`node studio/tools/studio.mjs status --sync` for real durations and render state, and the engagement
lever assigned to each topic in `150 Dev Shorts 14-Day Production Plan and Scripts (EN + Syrian Arabic).md`.
Nothing here is invented from the topic name — every title and description line traces to copy that is
already on screen or in `BRIEF.md`.

**Scope:** 37 publishable clips. `edit-test-001` and `product-intro` are scaffolds, not content, and are
listed separately at the bottom. 11 of the 37 have no MP4 yet (see "What is uploadable today").

## The limits this is written to

| Field | Platform limit | What I used |
|---|---|---|
| Title | 100 chars, truncates around 70 | under 70 everywhere, longest is 69 |
| Description line 1 | ~100 chars visible before "Show more" | line 1 is the hook, always under 100 |
| Hashtags | 15 max (over 15 = **all** ignored), first 3 show above the title as clickable labels | 3–4 per video, topic terms in the first 3 |

Notes that changed the copy:

- **No `#Shorts` tag.** YouTube does not need it for discovery any more, and the first three hashtags
  become the labels above your title, so those slots go to topic terms a developer would search.
- **Links live in the pinned comment, not the description.** On Shorts the description is behind
  "Show more", so almost nobody sees it. The article handoff is stated once in the description and
  carried again as a pinned comment.
- **Quiz answers go in the pinned comment on purpose.** That is the plan's own design for the Quiz
  lever ("What prints?" with the answer in a pinned comment), and it drives the comment thread the
  video asks for.
- **Engagement bait is banned** ("Agree?", "Thoughts?"), so the Debate videos end on the actual split
  being argued, and every question asked is one this account wants answered.
- Titles avoid the contrast-reveal and colon-reveal shapes, em dashes, and exclamation marks, per
  `.agents/skills/copywriting/references/ai-tells.md`. Colons appear only as definition labels.
- Vertical 1080x1920 on all 37, so every clip qualifies as a Short by shape. `call-forwarding-scam`
  is 132s, which still fits the 3-minute Shorts ceiling.

---

# Programming Basics (22 parts, Python, beginner)

Channel series: parts 1–11 are Day 1 / BASICS I, parts 12–22 are Day 2 / BASICS II.
`series: prog-basics`. Voice: Kokoro `af_heart`, burned-in English captions, no music.

## 1. prog-basics-01-variable — 43.1s — `[B]` Quiz

**Title**
```
A variable is a labeled box. The name stays when the value changes
```

**Description**
```
Every app you use remembers things. Here's the trick behind it.

A variable is a name pointing at a value. Put the value in, name the box, use the name whenever you need it. Change what is inside and the name is still there.

score = 10
score = score + 5
print(score)

Part 1 of 22 in Programming Basics. The answer to the quiz is in the pinned comment.

#python #programming #beginners
```

**Pinned comment**
```
105. score becomes score + 5, so one hundred plus five prints as 105. Same rule as the video: the number inside changed, the name never did.
```

## 2. prog-basics-02-data-types — 39.0s — `[B]` Quiz

**Title**
```
Why 5 + 5 gives you 55 in Python
```

**Description**
```
Because every value carries a type, and the type decides what the operation means.

Plus on numbers adds. Plus on text glues. Five plus five gives 10; put them both in quotes and plus stops adding.

The four you use every day: int for whole numbers, float for decimals, str for text, bool for yes and no.

Part 2 of 22. Quiz answer is pinned.

#python #datatype #programming
```

**Pinned comment**
```
'5' * 3 gives '555'. The star repeats the string three times. It is not multiplication, because there is no number in the expression to multiply.
```

## 3. prog-basics-03-strings-vs-chars — 40.1s — `[B]` Save

**Title**
```
Strings, characters, and why the first index is zero
```

**Description**
```
A string isn't one thing. It's a lot of tiny things in a row.

A character is one symbol: one letter, one digit, even one space. Line them up and you have a string, and each one sits at a position that counts from zero. A slice takes the characters before its end.

word = "code"
word[0] gives c
word[1:3] gives od

Save this, then slice your own name. Part 3 of 22.

#python #string #programming
```

**Pinned comment**
```
name[0] is the first letter of your name, and name[1:3] is the second and third. The end position is never included in the slice.
```

## 4. prog-basics-04-functions — 44.1s — `[B]` Tag

**Title**
```
Write the steps once, name them, and one fix repairs every call
```

**Description**
```
If you copy-paste the same code twice, you're missing something.

A function is a named recipe. Write the steps once, give them a name, call it whenever you need it. Every call runs the steps again, so fixing the recipe once repairs every place it is called.

def greet(name):
    print("Hi " + name)

greet("Sara")
greet("Omar")

Two calls, one recipe. Part 4 of 22.

#python #functions #programming
```

**Pinned comment**
```
Send this to the person you know who still copy-pastes. The whole argument for naming your steps is that a fix happens once.
```

## 5. prog-basics-05-params-vs-args — 42.9s — `[B]` Myth

**Title**
```
Parameters vs arguments: the empty seat and the value that fills it
```

**Description**
```
Parameters and arguments are not the same thing, and interviewers know it.

A parameter is the placeholder in the definition. It is the empty seat. An argument is the value you pass when you call. The seat exists before anyone arrives; the value fills it for one call and then it is gone.

def add(a, b)  those two are parameters
add(2, 3)      those two are arguments

Part 5 of 22.

#python #functions #codinginterview
```

**Pinned comment**
```
The memory hook: parameter is the seat in the definition, argument is the value that sits in it at the call. If that finally made it click, the word is "seat".
```

## 6. prog-basics-06-return-vs-print — 47.0s — `[M]` Debate

**Title**
```
return vs print: both make 8, only one hands it back
```

**Description**
```
Two functions can look identical and behave completely differently.

A return value goes back to whoever called it, and the caller keeps it, stores it, builds on it. A side effect is something the function does outside itself: prints on screen, writes a file.

Both functions below make eight. One gives the caller something to use, the other gives it None.

def double(x):
    return x * 2

def show(x):
    print(x * 2)

y = show(4)   is None

Team Return or Team Print, and why. Part 6 of 22.

#python #return #programming
```

**Pinned comment**
```
Use return when the next line of code needs the value, and print when a person is reading the screen. A function that only prints hands the caller None, so nothing can be built on top of it.
```

## 7. prog-basics-07-scope — 51.7s — `[B]` Quiz

**Title**
```
Scope: why your variable stops existing one line later
```

**Description**
```
Why does your variable not exist one line later?

Scope decides where a name is visible. Inside the function x is real. Outside, it never was. The box is made inside and dies inside, and a global x with the same name never changed. Two boxes, one label.

x = 99
def f():
    x = 1
f()
print(x)      still 99
print(f.x)    NameError

Which scope error have you hit most? Part 7 of 22.

#python #scope #programming
```

**Pinned comment**
```
UnboundLocalError is the one people misread. Assigning to x anywhere inside a function makes x local to that function, so reading it before that assignment fails. The fix is to return the value instead of reassigning the global.
```

## 8. prog-basics-08-constants-immutability — 49.1s — `[B]` Save

**Title**
```
A constant is a promise Python does not check
```

**Description**
```
The safest variable is the one that can't change.

A constant is a name you promise never to change. Python does not check that promise, and nothing stops you reassigning it. Immutable is a different thing: the value itself refuses.

MAX_USERS = 100          caps is a note for whoever reads next
s = "hi"
s[0] = "H"              TypeError, because a string is immutable

Save this for your next code review. Look for a name you promised never to change, then check if it changed. Part 8 of 22.

#python #constants #coding
```

**Pinned comment**
```
Caps is a note to whoever reads the code next. Whether the value can change is a property of the type. Two different guarantees, and beginners mix them constantly.
```

## 9. prog-basics-09-if-else — 48.8s — `[B]` Challenge

**Title**
```
if, elif, else: the first true answer wins
```

**Description**
```
Every decision your app makes comes down to this.

A condition is a yes or no question. If it is true this block runs, otherwise the other one. More paths means more elif, and the first true answer wins while the rest never get checked.

if age >= 18:
    print("Welcome")
else:
    print("Sorry")

age 20 gives Welcome. age 15 gives Sorry.

Challenge: rewrite that as a one-liner. The obvious attempt does not parse. Part 9 of 22.

#python #ifelse #programming
```

**Pinned comment**
```
print("Welcome") if age >= 18 else print("Sorry")
That one parses. Putting the if inside the print call does not, because an if without else is a statement, and a statement cannot sit inside an expression.
```

## 10. prog-basics-10-switch — 47.8s — `[B]` Debate

**Title**
```
Switch statements: the missing break runs the next case too
```

**Description**
```
A switch is just a tidy pile of if statements.

One subject, many cases. The switch runs the case that fits, while an if-chain asks again every line. Many languages need a break to stop there. Skip it and the case below runs too, so Saturday also runs Sunday.

Python has no switch at all. Its version is match, and it never falls through. Kotlin and Swift do not either.

Switch, or the if-else chain? Part 10 of 22.

#python #javascript #programming
```

**Pinned comment**
```
An if-chain asks a fresh question every line, so a branch you forgot is visible in the code. A switch that falls through runs a line you never wrote, which is why most style guides forbid fallthrough even where the language allows it.
```

## 11. prog-basics-11-for-vs-while — 43.9s — `[B]` Quiz

**Title**
```
for loop vs while loop, and which one can hang your program
```

**Description**
```
Pick the wrong loop and you'll hang your program.

A for loop repeats a known count, or walks a list item by item. A while loop repeats until something changes: waiting for a right answer, retrying until it works. If that check never turns false, it never stops.

for i in range(3)     gives 0, 1, 2
while not done        runs until somebody sets done to True

Which do you use more? Part 11 of 22.

#python #loops #programming
```

**Pinned comment**
```
for when you already know the count or you are walking a collection. while when you are waiting on a condition, and then something inside the loop has to change what that condition reads.
```

## 12. prog-basics-12-infinite-loops — 25.6s — `[B]` Quiz — **not rendered yet**

**Title**
```
An infinite loop happens when nothing changes the condition
```

**Description**
```
Your program froze and your laptop fan is screaming. Here's why.

An infinite loop happens when the condition never becomes false, and almost always it is because you forgot to update the variable the condition depends on.

while i < 5:
    print(i)

Nothing prints five times and stops. It prints forever, and the terminal fills with zeros.

Before running any loop, ask: what changes each round, and what ends it? Spot the missing line. Part 12 of 22.

#python #loops #programming
```

**Pinned comment**
```
i += 1. Without it i stays 0, the condition stays true, and the loop has no way out.
```

## 13. prog-basics-13-break-and-continue — 31.4s — `[B]` Challenge — **not rendered yet**

**Title**
```
break leaves the loop. continue skips the rest of the round
```

**Description**
```
Two tiny keywords that save you from messy loops.

Break exits the loop the instant it fires. Use it when you have found what you need. Continue drops the rest of this round and the walk goes on. Use it to ignore items you do not care about.

for n in nums:
    if n < 0:
        continue
    if n == target:
        break

seen keeps 3, 8, 2, 7.

Challenge: find the first even number in a list using break. Part 13 of 22.

#python #loops #coding
```

**Pinned comment**
```
for n in nums:
    if n % 2 == 0:
        first_even = n
        break

break on a find, continue on an ignore. Once you have the answer you stop looking, and once a row is irrelevant you only skip it.
```

## 14. prog-basics-14-what-is-recursion — 34.7s — `[B]` Myth — **not rendered yet**

**Title**
```
To understand recursion you must first understand recursion
```

**Description**
```
Recursion is a function calling itself on a smaller version of the same problem.

Each call trusts the next one to solve a piece, and it stops when the problem is small enough that the answer is obvious. You are not watching the function loop. You are watching it hand the work down.

def fact(n):
    if n == 1:
        return 1
    return n * fact(n - 1)

fact(4) waits on fact(3), then 2, then 1. One is the base case, and 4 times 3 times 2 times 1 is 24.

Drop the best recursion joke you know. Part 14 of 22.

#python #recursion #programming
```

**Pinned comment**
```
The honest version of the joke: recursion is a function trusting a smaller call to finish, plus a base case that stops the trusting. Without the base case there is nothing to hand the work back to.
```

## 15. prog-basics-15-base-case — 31.7s — `[B]` Quiz — **not rendered yet**

**Title**
```
Forget the base case and you get a stack overflow
```

**Description**
```
Forget this one thing and you'll get a stack overflow.

The base case is the card where the descent stops. Without it the function calls itself until the call stack runs out, and the interpreter raises instead of answering.

def sum(lst):
    if not lst:
        return 0
    return lst[0] + sum(lst[1:])

Every recursive function needs a base case and a step that moves toward it. What is the base case for summing a list? Part 15 of 22.

#python #recursion #programming
```

**Pinned comment**
```
An empty list sums to 0. That is the base case, and lst[1:] is the step that walks toward it by making the list smaller every call.
```

## 16. prog-basics-16-type-casting — 31.1s — `[B]` Debate — **not rendered yet**

**Title**
```
'5' + 3 is '53' in JavaScript and an error in Python
```

**Description**
```
In JavaScript, '5' + 3 is '53', but '5' - 3 is 2. Yes, really.

Casting is you converting a type on purpose, like int('5'). Coercion is the language doing it silently, and the two languages here disagree about the same characters.

int('5') + 3     Python: 8
'5' + 3          JavaScript: '53'
'5' + 3          Python: TypeError

Explicit is safer, because coercion rules can surprise you. Should languages coerce types automatically? Part 16 of 22.

#python #javascript #casting
```

**Pinned comment**
```
Why minus and plus differ in JavaScript: minus only has a number meaning, so the string gets converted. Plus is also the string glue operator, so it concatenates when either side is a string.
```

## 17. prog-basics-17-null-nil-none — 31.5s — `[B]` Save — **not rendered yet**

**Title**
```
The inventor of null called it his billion-dollar mistake
```

**Description**
```
null, nil and None all mean there is no value here.

Zero is a value. An empty string is a value. None is the absence of one. Asking nothing for a method is what makes you check before you use it.

user = None
user.name     Python: AttributeError
null.name     JavaScript: TypeError

Save this, then tell me your worst null bug. Part 17 of 22.

#python #javascript #null
```

**Pinned comment**
```
Empty means a value is there holding nothing. None means no value arrived at all. Check for None before you call anything on the name, and treat the two cases as different questions.
```

## 18. prog-basics-18-code-comments — 33.6s — `[B]` Debate — **not rendered yet**

**Title**
```
A comment earns its place by explaining why
```

**Description**
```
Some teams hold that good code needs no comments. Most of them mean comments like these two:

# how many times to retry before giving up
retries = 3

i = i + 1

The code already answers both. A comment pays for its place by saying why, or by carrying a warning, or by naming a decision, which is the one below doing real work:

# the payment API drops requests under load
retries = 3

Save comments for decisions, warnings and tricky reasons. When a comment only echoes the line, rename the line. Part 18 of 22, and the debate is open.

#python #coding #clean
```

**Pinned comment**
```
When a comment restates the line, the name is what needs the fix. Rename until the code explains itself, then keep the comment for the reason nobody can read off the syntax.
```

## 19. prog-basics-19-operators — 30.5s — `[B]` Quiz — **not rendered yet**

**Title**
```
Python operators: one equals stores, two equals asks
```

**Description**
```
One of these operators is not what you think.

Arithmetic operators do math. Comparison operators answer true or false. Logical operators combine checks: and, or, not. And the one that costs people the most time is the single equals sign, because it stores instead of asking.

x = 5        assigns
x == 5       compares
7 // 2       3
7 / 2        3.5
7 % 3        ?

What is 7 % 3? Part 19 of 22.

#python #operators #programming
```

**Pinned comment**
```
1. The percent sign is modulo, which returns the remainder, and 7 divided by 3 leaves 1. That is also why % is the even and odd test: n % 2 == 0.
```

## 20. prog-basics-20-short-circuit — 30.6s — `[M]` Tag — **not rendered yet**

**Title**
```
Your code skips half the condition, and that is a feature
```

**Description**
```
With and or, the language stops as soon as the answer is known.

Take A and B. If A is false, B never runs. Take A or B: if A is true, B never runs. That is what lets you guard a risky check, by putting the cheap question in front of it.

user = None
if user and user.is_admin:
    print("admin")

The and stops at once, so is_admin is never read. Nothing prints, and nothing breaks.

Tag the dev who writes nested ifs for this. Part 20 of 22.

#python #logic #programming
```

**Pinned comment**
```
if user and user.is_admin does the same job as an if inside an if, in one line. The second half only evaluates once the first half survives, so the short-circuit is what makes the guard safe.
```

## 21. prog-basics-21-arrays — 29.1s — `[B]` Save — **not rendered yet**

**Title**
```
Arrays: reading any position is a jump, inserting is a shift
```

**Description**
```
Need 100 variables? You need one array.

An array holds many values in order, side by side in memory, and each one sits at an index counting from zero. Reading by index is instant, because the position is arithmetic. Inserting in the middle means shifting everything after it.

nums = [10, 20, 30]
nums[1]     20

Save this. Quick one: what is nums[-1] in Python? Part 21 of 22.

#python #arrays #dsa
```

**Pinned comment**
```
The last element. Python counts backwards from the end, so -1 is the final item and -2 the one before it. A negative index is a second counting direction on the same array.
```

## 22. prog-basics-22-linked-lists — 32.0s — `[B]` Quiz — **not rendered yet**

**Title**
```
A linked list is a treasure hunt: 49 hops to reach the 50th
```

**Description**
```
An array is a row of seats. A linked list is a treasure hunt.

A linked list is a chain of nodes. Each node holds a value and where to go next. Adding at the front is one assignment. Reaching the fiftieth item means walking through forty-nine nodes first, one hop at a time.

Here is the same chain as code: to reach the third node you follow two pointers. An array asks for index two and gets it.

Which is faster for inserting at the front, array or linked list? Part 22 of 22, and the end of BASICS II.

#python #linkedlist #dsa
```

**Pinned comment**
```
The linked list. Prepending is one pointer write, while the array has to shift every element down one position first. The array still wins at reading by position, which is the trade the whole structure is built on.
```

---

# Backend Patterns (10 parts, experienced developers)

`series: backend-patterns`. English narration, burned captions, code-editorial visual grammar.
**No article exists for this campaign**, so nothing here links off-platform. Do not add a link.

## 1. repository-pattern — 72.0s

**Title**
```
The Repository Pattern is the direction the dependency points
```

**Description**
```
A service method that builds its own query and maps its own rows is three layers wearing one name.

The pattern splits that. The contract is written in domain language, the implementation owns the database, and the consumer sees only the contract. Then watch the dependency: the implementation answers to a contract the domain owns, so nothing in the domain names a table.

Part 1 of 10 in Backend Patterns.

#backend #cleanarchitecture #repository
```

**Pinned comment**
```
The tell is leakage. Return a query object or a commit call and the caller is back inside the database, just further away. It pays when storage changes apart from the use case, and the price is mapping code you write twice and keep honest.
```

## 2. pattern-factory — 75.5s

**Title**
```
A factory stops the caller from choosing the concrete type
```

**Description**
```
A caller that builds an object answers one question first: which concrete type.

Today the caller does it itself. Read a config value, branch, call the constructor, and now the caller knows every gateway it can build. A factory takes that question away. The caller asks for a gateway, the factory decides which one, and when a new gateway lands the change stays inside the factory.

Part 2 of 10 in Backend Patterns.

#backend #designpatterns #factory
```

**Pinned comment**
```
The tell: a factory that forwards one argument list to one constructor has nothing to choose. Keep it and you have ceremony, a layer standing in the middle with no decision inside it.
```

## 3. pattern-singleton — 74.5s

**Title**
```
Singleton is a lifetime decision wearing a pattern's clothes
```

**Description**
```
Some things a program should only ever have one of. A connection pool, the app config.

A singleton is a class enforcing that about itself: a static holder, one instance behind it, and every caller reaching the same door. Nobody else gets to make a second.

It also outlives the test run. State left by one case is sitting there in the next one.

Part 3 of 10 in Backend Patterns.

#backend #designpatterns #singleton
```

**Pinned comment**
```
You can keep the guarantee and drop the static. Let the DI container own the lifetime as a single instance, and let the caller declare the dependency. Same one object, and the class stops enforcing policy about itself.
```

## 4. pattern-strategy — 75.6s

**Title**
```
Strategy is a behaviour you can swap behind one signature
```

**Description**
```
Every checkout asks for a price, and the answer depends on the contract.

That branch inside the call site is the coupling. Pull the varying behaviour out behind one signature. The call site keeps the question, the implementations keep the how, and the dependency narrows to one name. A factory picks which type to build; a strategy picks which behaviour to run.

Part 4 of 10 in Backend Patterns.

#backend #designpatterns #strategy
```

**Pinned comment**
```
The tell is three strategies that share nothing but the interface. One reads a table, one calls a provider, one returns a constant. A switch grows a new case per behaviour while a map grows an entry, and a seam nobody ever plugs into is just ceremony.
```

## 5. pattern-observer — 77.4s

**Title**
```
Observer buys you decoupling and charges you the causal trace
```

**Description**
```
An order shipped, and three listeners want to know.

Calling them directly means each new listener edits the sender. Observer moves the knowing into a list. The subject holds its listeners and calls each one when its state changes, without naming who is on the list. A listener is one method behind an interface.

The decoupling is the product. Losing the ability to follow one event to its effect is the price.

Part 5 of 10 in Backend Patterns.

#backend #designpatterns #observer
```

**Pinned comment**
```
The second cost leaks quietly. A listener added on mount and never removed keeps its subject alive after the view is gone, so every mount registers again and the earlier entry stays pointing at nothing. Subscribe hands back a detach, and the scope that subscribed runs it on teardown.
```

## 6. pattern-builder — 79.5s

**Title**
```
Five fields, three optional: the overload maze a builder deletes
```

**Description**
```
A builder exists because constructors stop scaling.

Five fields, three optional, and an overload for every combination. Drop the overloads and callers assign fields afterwards, in an order only the caller remembers, so the object is live before it is valid. Construction moves to a builder: each call takes one piece and hands back the same builder, and build() checks the invariants once.

Part 6 of 10 in Backend Patterns.

#backend #designpatterns #builder
```

**Pinned comment**
```
Two cautions. Hand a mutable builder onward and the next holder adds a line, then builds a different order, so pass the finished product. And three mandatory fields need no builder at all: call the constructor and hand over a finished order.
```

## 7. pattern-adapter — 73.1s

**Title**
```
Adapter: your code wants one shape and the SDK has another
```

**Description**
```
Your code wants one shape. The vendor's SDK hands you a different one.

An adapter lets them talk and neither side changes, because it converts one interface into another. A factory picks which thing to build; an adapter reshapes a thing that already exists. It is what lets your domain stay clean while a legacy vendor or a third-party SDK stays in the room.

Part 7 of 10 in Backend Patterns.

#backend #designpatterns #adapter
```

**Pinned comment**
```
The misuse tell: the wrapped API leaking through anyway, or adapters stacked on adapters, which fail the same way one layer down. Keep one box per pair of shapes and finish the translation inside it.
```

## 8. pattern-decorator — 72.7s

**Title**
```
Three behaviours, seven subclasses. A decorator wraps instead
```

**Description**
```
You want caching, retries and logging on one service, and each one changes what the call does.

Inheritance answers that with a subclass per combination: three behaviours, seven classes, picked before the program runs. A decorator wraps instead. It answers the same interface, does its own work, then calls the object inside, so the stack is chosen at runtime.

Part 8 of 10 in Backend Patterns.

#backend #designpatterns #decorator
```

**Pinned comment**
```
Inheritance needed seven classes fixed at compile time. Three decorators need three classes and one expression per stack. Left unchecked though, every call site adds a ring, and twelve deep a type check on the class you wrapped reads false.
```

## 9. pattern-cqrs — 77.6s

**Title**
```
CQRS: the command side owns the invariants, the read side denormalises
```

**Description**
```
One class answers the writes and serves the reads. The rules pull one way, the screens the other.

Split the model along that seam and each side takes its own shape. Commands change state, and the write side keeps normalised entities. Queries answer questions, and the read side ships flat rows, joined and pre-summed for the screen. The models are the split.

Part 9 of 10 in Backend Patterns.

#backend #architecture #cqrs
```

**Pinned comment**
```
The price is a gap: one side reads what the other wrote, and the copy can lag by a moment. The failure mode is paying it for nothing, two stores and an event stream on a workload that never asked, and a page that writes, reads back, and shows nothing.
```

## 10. pattern-circuit-breaker — 76.2s

**Title**
```
A circuit breaker gives a dying dependency room to recover
```

**Description**
```
A dependency degrades, and every call still waits.

A circuit breaker wraps the calls and fails fast. Closed means calls flow while the breaker counts failures. Cross the threshold and it goes open, and nothing leaves. After the reset timeout it goes half-open and lets one probe through. Succeed and it closes; fail and it opens again.

At the call site it is one wrapper, and when the breaker is open the catch returns the fallback.

Part 10 of 10 in Backend Patterns.

#backend #resilience #microservices
```

**Pinned comment**
```
The usual shape is a timeout with no breaker, so one slow dependency costs every caller its patience. Add retries on top and the storm finishes what the outage started. The breaker needs a fallback, otherwise failing fast just moves the error to the call site.
```

---

# OSI Layers (3 parts, hands off to the article)

`series: osi-layers`. Each part is watchable alone, so no post below refers to another part.

## 1. osi-layers-1-sideways — 63.3s

**Title**
```
The OSI model is seven conversations across the wire
```

**Description**
```
You've seen this stack seven times. Almost everyone reads it the wrong direction.

Top to bottom is how it gets taught, seven handing down to six. But each layer has a partner: same number, other end of the wire. Your layer 4 and their layer 4 agree on ports, sequence numbers, and what counts as lost. A router reads layer 3 and stops, a switch reads layer 2 and stops, so the only layer-4 peer in the whole path is the machine at the far end.

Read it sideways and the stack turns into seven conversations across the wire. All seven pairs, side by side, in the article.

Part 1 of 3.

#networking #OSI #ccna
```

**Pinned comment**
```
All seven pairs, one by one: [BLOG_URL]/posts/osi-layers-read-sideways/
```

## 2. osi-layers-2-the-seam — 54.5s

**Title**
```
Replace one OSI layer and the layer above never notices
```

**Description**
```
A layer is a slot with a job. And a slot can be refilled.

Every layer talks sideways, to the same number on the machine at the other end. For years the web spoke HTTP over TCP. Then HTTP/3 arrived and put itself on QUIC instead, and the server advertised the new endpoint on the old connection with an Alt-Svc header. Same requests, same status codes, new transport.

You have done it yourself. Unplug the cable, stay on the site. Wi-Fi takes over the link, and layer three never blinks.

What got swapped is in the article. Part 2 of 3.

#http3 #quic #networking
```

**Pinned comment**
```
Where QUIC actually sits, layer 4 or not, and what really got swapped: [BLOG_URL]/posts/osi-layers-read-sideways/
```

## 3. osi-layers-3-leaks — 56.1s

**Title**
```
Where the OSI model leaks, and what it still buys you
```

**Description**
```
Layer two is where the sideways picture gets loose.

Every layer talks sideways, to the same number on the other end, except that one. Ethernet is a wire you use when you like. Wi-Fi is a shared radio where you wait your turn. Same number, almost nothing else shared. ARP asks a layer three question inside a layer two frame and fits in neither box.

The model still earns its keep on a bad night. A dead link sits at the bottom. Connections that reset are the transport's problem. A bad certificate is the top. An outage gets a place to point instead of a shrug.

Where it leaks is in the article. Part 3 of 3.

#networking #troubleshooting #ccna
```

**Pinned comment**
```
The pointing method, and the honest list of places the model leaks: [BLOG_URL]/posts/osi-layers-read-sideways/
```

---

# Standalone clips

## sdlc — 74.0s

**Title**
```
Why SDLC projects break at the handoff
```

**Description**
```
You know this diagram. Fifty years old, and still in every job description.

Plan, design, build, test, deploy, operate. Postmortems keep naming the same villain: the handoff. Requirements to design gives "make it fast". Design to build gives a mockup with one state and data with nine. Build to test gives "works on my machine". Dev to ops gives shipped it on a Friday.

Every methodology is a different answer to one question: how late is reality allowed to revise the plan. Then AI collapsed the build phase, and the loop barely moved, because review, approvals and coordination is where the weeks live.

The full teardown is in the article.

#sdlc #agile #devops
```

**Pinned comment**
```
The boxes were never the point. Shrink the loop. Full teardown: [BLOG_URL]/posts/shrink-the-loop/
```

## call-forwarding-scam — 132.2s — عامية مصرية

Target: whoever holds their parents' phone. Destination was WhatsApp forward first, YouTube second.
The article exists in Arabic, so the link is real once the blog deploys.

**Title**
```
تحويل المكالمات: النصب اللي بيخلي تليفون بابك يتكلم من وراك
```

**Description**
```
راجل بيكلّمهم ويقول إنه من الاتصالات أو من البنك. والمضمون واحد: اكتب الكود ده على الشاشة.

الكود ده بيفعّل حاجة اسمها «تحويل المكالمات». من اللحظة دي، أي مكالمة بتيجي على رقمهم مش بترن عندهم، بتروح على رقمه هو. وبعدها بيروح على واتساب أو تطبيق البنك ويدوس «نسيت كلمة السر»، والنظام بيبعت كود التحقق على الرقم المسجل، والرقم المسجل بقى بيوصل له هو.

الموبايل ساكن والخط شكله سليم، والمكالمات الصادرة لسه شغالة عادي، لأن التحويل بيشتغل على الواردة بس.

الفحص بتاعك في دقيقتين، وتلات حاجات، بتعملهم بإيدك على الموبايل قدامك. والكودات اللي على الشاشة في الفيديو أمثلة على الشكل، مش تعليمات، ومتكتبوش لأي حد بيكلمك.

ولو ده حصّل، أول حاجة تقولها له: ده مش غلطتك.

المقال بالعربي كامل: [BLOG_URL]/ar/posts/call-forwarding-scam/

#نصب #تحويل_المكالمات #امان_الموبايل
```

**Pinned comment**
```
ادخل النهارده على موبايل ماما وبابا، وافتح إعدادات «تحويل المكالمات» بإيدك، مش ببعت بوست. لو لقيت رقم مش بتاعكم، إلغيه وكلّم شركة الاتصالات من تليفون تاني.
المقال بالعربي: [BLOG_URL]/ar/posts/call-forwarding-scam/
```

---

# What is uploadable today

| State | Count | Projects |
|---|---|---|
| Rendered, MP4 on disk | 26 | everything above except the next row |
| Assembled, **no MP4** | 11 | `prog-basics-12` through `prog-basics-22` |

The Day 2 tranche (parts 12–22) stopped at `assembled`. Their copy is final and verified, the audio is
generated, and the metadata above is ready, but there is no file to upload until they render. The render
gate is yours: `node studio/tools/studio.mjs render videos/prog-basics-NN-slug --quality draft --yes`,
one project at a time. I did not render anything for this file.

`studio status --sync` reported those 11 as `assembled` with 0 renders; the durations in the headings
come from that same run and are the real timeline lengths.

## Two projects I did not write metadata for

Both are in `videos/` but neither is a video anyone should find on your channel.

- **`edit-test-001`** — 11.5s, `<title>EDIT TEST 001</title>`, authored against the
  `talking-head-recut` skill as a pipeline test. One render exists. No brief, no script, no narration
  beyond a test transcript.
- **`product-intro`** — 10s, `Lumen — Product Intro`, stage `assembled`, 0 renders, `intro.mp4` from an
  earlier experiment. It has no `BRIEF.md` and predates the campaigns in this workspace.

Say the word if either is actually going out and I will write the pair for it. Otherwise the fix is a
`videos/_archive/` move, not a title.

## Two placeholders you have to resolve before posting

1. **`[BLOG_URL]` is not a real origin yet.** `blog/astro.config.mjs` still reads
   `process.env.BLOG_SITE_URL || "https://blog.example.com"`, and `studio doctor` flags it. The three article
   slugs referenced above (`osi-layers-read-sideways`, `shrink-the-loop`, `call-forwarding-scam`) exist
   in `blog/src/content/posts/` in both languages, so they are one deploy away from being real links.
   Until then, either deploy or delete the handoff line; do not ship the placeholder.
2. **No channel or playlist names were given.** Every series line says "Part N of M in Backend Patterns"
   and "Part N of 22 in Programming Basics" using the campaign's own numbering. Rename those three
   phrases once in this file if the channel uses different series titles, and create the playlists so
   "Part N" points at something.

## Numbering inconsistency worth one edit

The Day 1 briefs (`prog-basics-01` to `-11`) still declare `part: N of 11` while the Day 2 briefs declare
`part: N of 22`. The descriptions use **of 22** throughout, which is the truth. Fix the 11 Day 1 frontmatter
lines the next time those projects are touched, rather than the copy.

## Not done here

Nothing is scheduled or uploaded. This is copy waiting for a decision, same as the OSI social set.
Posting cadence from the plan: 1 to 2 Shorts a day, rotate the engagement lever, and never run the same
lever three clips in a row; on the list above that means interleaving prog-basics with backend-patterns
rather than publishing 1–22 in order.
