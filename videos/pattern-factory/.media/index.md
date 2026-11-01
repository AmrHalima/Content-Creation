# .media · 8 assets

id         type   dur    dims   path                 description
voice_001  voice  9.4s   —      assets/voice/01.wav  A caller that builds an object answers one question first: which concrete type. The factory owns that answer.
voice_002  voice  11.1s  —      assets/voice/02.wav  Today the caller does it itself. Read a config value, branch, call the constructor. Now the caller knows every gateway it can build.
voice_003  voice  8.1s   —      assets/voice/03.wav  A factory takes that question away. The caller asks for a gateway. The factory decides which one.
voice_004  voice  10.1s  —      assets/voice/04.wav  The dependency points down through the seam. The caller holds the interface. The factory below holds the concrete classes.
voice_005  voice  8.8s   —      assets/voice/05.wav  The seam is a signature. It takes a discriminator and returns the interface. That is all the caller sees.
voice_006  voice  6.8s   —      assets/voice/06.wav  So the call site is one line. The config value goes in, a gateway comes back.
voice_007  voice  9.9s   —      assets/voice/07.wav  When a new gateway lands, the change is inside the factory. Callers never heard of it, so coupling stays out of the domain.
voice_008  voice  11.3s  —      assets/voice/08.wav  Here is the tell. A factory that forwards one argument list to one constructor has nothing to choose. Keep it and you have ceremony.
