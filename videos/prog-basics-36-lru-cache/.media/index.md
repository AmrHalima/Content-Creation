# .media · 5 assets

id         type   dur   dims   path                 description
voice_001  voice  2.3s  —      assets/voice/01.wav  How does a cache decide what to throw away?
voice_002  voice  6.3s  —      assets/voice/02.wav  An LRU cache has a fixed size. When it fills, it throws out the item used least recently.
voice_003  voice  5.2s  —      assets/voice/03.wav  Every read moves that item to the front. So the back of the line is always the oldest.
voice_004  voice  7.5s  —      assets/voice/04.wav  A hash map finds the item, and a linked list reorders it. That keeps every read and write in constant time on average.
voice_005  voice  3.9s  —      assets/voice/05.wav  Capacity 2: put A, put B, get A, put C. What gets evicted?
