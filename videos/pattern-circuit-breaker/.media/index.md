# .media · 7 assets

id         type   dur    dims   path                 description
voice_001  voice  4.3s   —      assets/voice/01.wav  A dependency degrades, and every call still waits.
voice_002  voice  3.9s   —      assets/voice/02.wav  A circuit breaker wraps the calls and fails fast.
voice_003  voice  20.7s  —      assets/voice/03.wav  Closed means calls flow while the breaker counts failures. Cross the configured threshold and it goes open: nothing leaves. After the reset timeout it goes half-open and lets one probe through. Succeed and it closes, fail and it opens again.
voice_004  voice  11.3s  —      assets/voice/04.wav  Threshold and reset timeout are configuration. Every dependency sets its own; a number copied from another service is a guess.
voice_005  voice  10.5s  —      assets/voice/05.wav  An open breaker still has to answer, so the guarded call takes a fallback: the last cached value, or an honest unavailable.
voice_006  voice  11.2s  —      assets/voice/06.wav  At the call site it is one wrapper. When the breaker is open the guarded call throws before its timeout, and the catch returns the fallback.
voice_007  voice  14.3s  —      assets/voice/07.wav  The usual shape is a timeout with no breaker, so one slow dependency costs every caller its patience. Add retries, and the storm finishes what the outage started.
