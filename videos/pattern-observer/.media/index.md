# .media · 7 assets

id         type   dur    dims   path                 description
voice_001  voice  9s     —      assets/voice/01.wav  An order shipped, and three listeners want to know. Calling them directly means each new listener edits the sender.
voice_002  voice  9.8s   —      assets/voice/02.wav  Observer moves the knowing into a list. The subject holds the listeners and calls each one when its state changes.
voice_003  voice  9.4s   —      assets/voice/03.wav  A listener is one method behind an interface. The subject notifies its list without naming who is on it.
voice_004  voice  10.9s  —      assets/voice/04.wav  Two methods carry it. Subscribe pushes a handler and returns the way to undo it. Notify walks the list and calls each one.
voice_007  voice  9.1s   —      assets/voice/07.wav  The tell is the missing half. Subscribe hands back a detach, and the scope that subscribed runs it on teardown.
voice_008  voice  9.7s   —      assets/voice/05.wav  The tradeoff is paid in tracing. A stack full of handlers says nothing about who fired, or how many are still attached.
voice_009  voice  19.4s  —      assets/voice/06.wav  The second cost leaks. A listener added on mount and never removed keeps its subject alive after its view is gone. Each mount registers again, and the earlier entry stays. The list grows, and its entries point at nothing.
