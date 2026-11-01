# .media · 8 assets

id         type   dur    dims   path                 description
voice_001  voice  11.6s  —      assets/voice/01.wav  Some things a program should only ever have one of. A connection pool, the app config. Singleton is a class enforcing that about itself.
voice_002  voice  11.4s  —      assets/voice/02.wav  One instance, alive for the whole process. Nobody else gets to make a second. That is a lifetime decision wearing a pattern's clothes.
voice_003  voice  8.5s   —      assets/voice/03.wav  Every caller reaches the same door: a static holder inside the class, and the one instance behind it.
voice_004  voice  9.7s   —      assets/voice/04.wav  Private constructor, so nobody outside can call new. One static field holds the instance the class hands out.
voice_005  voice  7.1s   —      assets/voice/05.wav  Ask twice and you get the same object back. Two references pointing at one lifetime.
voice_006  voice  9.7s   —      assets/voice/06.wav  Any file can call the class directly, so the dependency never shows in a signature. A global, with a good name.
voice_007  voice  7.2s   —      assets/voice/07.wav  It outlives the test run too. State left by one case is sitting there in the next one.
voice_008  voice  9.2s   —      assets/voice/08.wav  Keep the one instance, drop the static. Let the container own the lifetime and the caller declare the dependency.
