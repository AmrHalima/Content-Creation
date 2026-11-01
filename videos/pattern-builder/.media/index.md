# .media · 8 assets

id         type   dur    dims   path                 description
voice_001  voice  10.6s  —      assets/voice/01.wav  A builder exists because constructors stop scaling. Five fields, three optional, and an overload for every combination.
voice_002  voice  11.6s  —      assets/voice/02.wav  Drop the overloads and callers assign fields afterwards, in an order only the caller remembers. The object is live before it is valid.
voice_003  voice  7.8s   —      assets/voice/03.wav  So construction moves to a builder. Each call takes one piece and hands back the same builder.
voice_004  voice  7.7s   —      assets/voice/04.wav  Nothing is an order yet. Each call adds one piece to private state the caller cannot touch.
voice_005  voice  9.2s   —      assets/voice/05.wav  Then build() checks the invariants once. Missing pieces, bad totals, it throws before an order exists.
voice_006  voice  13.5s  —      assets/voice/06.wav  Three chambers, one dependency. The caller chains, the builder holds parts, the product appears only at the end. A factory picks which type; this picks none.
voice_007  voice  10.3s  —      assets/voice/07.wav  Hand a mutable builder onward and the next holder adds a line, then builds a different order. Pass the finished product instead.
voice_008  voice  8.7s   —      assets/voice/08.wav  And three mandatory fields need no builder at all. Call the constructor once, hand over a finished order.
