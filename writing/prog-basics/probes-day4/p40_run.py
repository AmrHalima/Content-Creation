"""Part 40 - exact interpreter text for the two error claims, captured verbatim.

Each chamber is a separate FILE run through a fresh interpreter, because a
traceback raised inside this runner's own try/except would show the runner's
source line, not the lesson's. What prints below is what the interpreter wrote
to stderr on this machine.

Run: python p40_run.py
"""
import os
import subprocess
import sys

PY = sys.executable
HERE = os.path.dirname(os.path.abspath(__file__))

CHAMBERS = [
    ("p40_tuple_assign.py", "point = (3, 4) / point[0] = 9"),
    ("p40_list_as_key.py", "d = {} / d[[1, 2]] = 3"),
    ("p40_tuple_key_ok.py", "location[(3, 4)] = ...  (the success case)"),
    ("p40_list_mutable.py", "the mutable list / fixed tuple claim"),
]

for fname, desc in CHAMBERS:
    path = os.path.join(HERE, fname)
    r = subprocess.run([PY, path], capture_output=True, text=True)
    print("=" * 74)
    print(f"CHAMBER {fname}   ::   {desc}")
    print(f"exit code: {r.returncode}")
    print("--- stdout (verbatim) ---")
    print(r.stdout.rstrip("\n") or "(none)")
    print("--- stderr (verbatim, file path trimmed to the basename) ---")
    err = r.stderr.replace(path, fname).replace(HERE + os.sep, "")
    print(err.rstrip("\n") or "(none)")
    print()

print("=" * 74)
print("WHAT A BUILDER PUTS ON SCREEN")
print("The traceback's first line is an absolute path on THIS machine and is not portable.")
print("Portable form below is GENERATED from the captured stderr, never typed from memory:")
for fname, _ in CHAMBERS:
    path = os.path.join(HERE, fname)
    r = subprocess.run([PY, path], capture_output=True, text=True)
    if r.returncode == 0:
        continue
    lines = r.stderr.replace(path, "main.py").replace(HERE + os.sep, "").rstrip("\n").splitlines()
    print("  " + "-" * 60)
    for ln in lines:
        print("  " + ln)
print()
print("Two things a builder must not silently 'fix' here:")
print("  1. the LINE NUMBER in the File \"main.py\" line is the real one from the chamber file")
print("     (line 4 for the tuple, line 3 for the dict key, because of the leading comment). If")
print("     the frame's chamber shows a different line count, the traceback must be regenerated,")
print("     not hand-adjusted;")
print("  2. the caret row (~~~~~^^^) is PEP 657 fine-grained locations, real in Python 3.11+.")
print("     Copy it from above - the tilde/caret counts differ between the two chambers.")
print()
print("Cross-check the two message strings against a bare eval, so a typo in the frame text")
print("is detectable without a subprocess:")
for label, code in (("tuple item assignment", "point[0] = 9"),
                    ("list as dict key", "d = {}\nd[[1, 2]] = 3")):
    ns = {"point": (3, 4)}
    try:
        exec(compile(code, "<string>", "exec"), ns)
    except TypeError as exc:
        print(f"  {label}: TypeError: {exc}")
