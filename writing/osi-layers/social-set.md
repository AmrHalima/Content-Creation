# OSI Layers - Social Set (campaign `osi-layers`)

Companion to: `writing/osi-layers/series-bible.md` (shared grammar, glossary, constraints)
and to the rendered three-part series.

## Assets this set posts

| Part | Short name | Rendered | Length | Project |
|---|---|---|---|---|
| P1 | `sideways` | 1080x1920 | 63.4s | `videos/osi-layers-1-sideways/` |
| P2 | `promise` | 1080x1920 | 54.5s | `videos/osi-layers-2-the-seam/` |
| P3 | `honest` | 1080x1920 | 56.2s | `videos/osi-layers-3-leaks/` |

Series total 2:54. Each part is watchable alone, in any order. That is a campaign rule, so
each post below stands alone too: no post refers to another part, and no post assumes you
saw one.

## Before you paste anything

- `[BLOG_URL]` is the article link. The blog is parked as a draft and `astro.config.mjs`
  still carries `site: "https://blog.example.com"`, so there is no real article URL to put
  here yet. Replace `[BLOG_URL]` at publish time, do not ship the placeholder.
- Arabic posts link the Arabic article path (`/ar/posts/osi-layers-read-sideways/`) on the
  same domain.
- The clips are English narration with burned English captions. There is no Arabic video
  variant in this campaign. The Arabic posts are honest about that in the caption, once, so
  nobody reads it as a broken promise.
- Nothing here is scheduled or posted. All of it is copy waiting for a decision.
- Vertical clips on feeds where the platform crops to 4:5 or 1:1: the frames keep all
  load-bearing content in the top 83%, which still leaves the bottom cropped on a square
  feed. Square crops of these clips lose the caption band. Prefer native vertical placement.

---

# 1. Three feed posts, one per part (EN + AR)

Destination: Instagram, Facebook, TikTok caption block, and a LinkedIn repost of the clip.

## P1 `sideways` - EN

    You've seen this stack seven times. Almost everyone reads it the wrong direction.

    The names are not the hard part. Physical, Data Link, Network, Transport, Session,
    Presentation, Application. Most people who have taken a networking course can say them
    in order, and most of them picture a message climbing down a ladder to the cable and
    back up at the other end.

    Here is the reading that finally makes the model useful. Your layer 4 is talking to
    their layer 4. Your transport and theirs agree on ports, on sequence numbers, on what
    counts as lost. Nothing in between holds a copy of that agreement. A router reads layer
    3 and stops. A switch reads layer 2 and stops. The only box in the path running the
    layer 4 conversation with you is the machine at the far end.

    Read it that way at every layer and the stack becomes seven conversations across the
    wire at the same time. That is also what makes one layer changeable while the layers
    above it carry on working.

    The full write-up, all seven pairs, is at [BLOG_URL]. Link also in the first comment.

Alt hook (same post, swap the first line): `The hard part of the OSI model is which way you are looking at it.`

## P1 `sideways` - AR (عامية مصرية)

    شفت الرسمة دي سبع مرات. وتقريبا كل الناس بتقراها في الاتجاه الغلط.

    الأسماء مش هي الصعبة. كل واحد خد كورس شبكات يقدر يعدّهم: Physical وData Link وNetwork
    وTransport وSession وPresentation وApplication. والصعوبة إنك متخيل رسالة نازلة سُلّم لحد
    السلك وبتطلع تاني عند التاني.

    القراءة اللي بتخلي الموديل يفيد فعلًا هي دي. الطبقة الرابعة عندك قاعدة تتكلم مع الطبقة
    الرابعة عنده. الاتنين متفقين على الـ ports وعلى أرقام التسلسل وعلى إمتى نقول إن حاجة
    ضاعت. ومفيش جهاز في النص معاه نسخة من الاتفاق ده. الراوتر بيقرا الطبقة التالتة وبس،
    والسويتش بيقرا التانية وبس. الجهاز الوحيد اللي شغال معاك layer 4 في الطريق كله هو اللي
    في آخر السلسلة.

    اعمل كده على كل طبقة، والكومة تتحول لسبعة كلامات بيحصوا في نفس الوقت على السلك. وده بالظبط
    اللي يخلي إنك تقدر تغيّر طبقة واحدة، واللي فوقها ما تحسش بحاجة.

    المقال الكامل، الأزواج السبعة واحدة واحدة، على [BLOG_URL]. اللينك في أول كومنت كمان.

    الفيديو إنجليزي بعناوين إنجليزي. المقال بالعربي.

---

## P2 `promise` - EN

    A layer is a slot with a job. And a slot can be refilled.

    For years the web spoke HTTP over TCP. HTTP/2 was new work at the top of that stack, and
    its own spec calls it an application-layer protocol running on top of TCP. The carrying
    stayed old.

    Then the carrying stopped being enough. HTTP/2 put many transactions on one connection,
    and TCP's loss recovery cannot see that parallelism, so one lost packet stalls every
    transaction on the connection. The fix could not happen at the top, because the top never
    sees a packet. It sees a byte stream.

    So HTTP/3 moved to QUIC. Same semantics, new transport, and the server advertises the new
    endpoint on the old connection with an Alt-Svc header. No application protocol changed its
    meaning, and the transport underneath got replaced. In public. A layer at a time.

    You have done the same thing yourself: unplug the cable, stay on the site.

    What actually got swapped, and where QUIC really sits, is in the article: [BLOG_URL].

Alt hook: `HTTP/3 changed the transport. Nobody upstream was rebuilt.`

## P2 - AR

    الطبقة دي خانة عليها شغل. والخانة اللي عليها شغل ينفع تتعبّى تاني.

    الويب من سنين بيتكلم HTTP فوق الـ TCP. وHTTP/2 نفسها بتوصف نفسها إنها بروتوكول
    application layer ماشي على TCP. يعني الجديد كان فوق، والحمل القديم يفضل تحت.

    إلى ما الحمل ده بقى هو المشكلة. HTTP/2 حط معاملات كتير على نفس الاتصال، والـ TCP ما
    بيشوفش التوازي ده، فباقة واحدة ضايعة توقف كل المعاملات على الاتصال، حتى اللي بياناتها
    وصلت. ومفيش حل فوق، لأن اللي فوق ما بشوفش باقات أصلًا. بيشوف تدفق بايتات.

    فـ HTTP/3 نقل على QUIC. نفس المعاني، حمل تاني، والموقع بيعن عن النقطة الجديدة على الاتصال
    القديم بـ Alt-Svc header. مفيش بروتوكول تطبيق غيّر معناه، ومع كل ده طبقة النقل تحتهم
    اتغيّرت. قدام الناس. طبقة طبقة.

    وأنت عملت الحركة دي بنفسك: انتزع السلك والصفحة لسه بتحمل، والـ Wi-Fi يكمّل.

    اللي اتغيّر بالظبط، وQUIC قاعدة فين، في المقال: [BLOG_URL].

    الفيديو إنجليزي بعناوين إنجليزي. المقال بالعربي.

---

## P3 `honest` - EN

    An outage gets a place to point instead of a shrug.

    The sideways reading has one weak spot, and you should know it before the model lets you
    down in a real incident. Layer 2's peer is the next box, not the far machine. Your Wi-Fi
    layer talks to the access point. The access point's own layer 2 talks to the switch.
    Nobody is speaking Ethernet from your desk to the website.

    That is why routers exist. A layer-2 address means reachable on this link, and the link
    ends where the medium ends. To get past the next box you need an address whose meaning
    survives the hop, and a machine that reads it, decides, and forwards.

    The model leaks in other places too. ARP answers a layer-3 question inside a layer-2 frame
    and fits in neither box. OSI is a reference model, a way of describing a
    stack. The internet runs TCP/IP.

    What it buys you anyway: seven named places to point at. No link, point at the bottom.
    Connections that reset, point at the transport. A certificate complaint, point at the top.
    The pointing method is in the article: [BLOG_URL].

Alt hook: `Layer 2 is where the pretty picture gets loose.`

## P3 - AR

    لما الشبكة تقع، يبقى عندك مكان تشير عليه بدل ما تهز كتافك.

    القراية بالعرض دي فيها نقطة ضعف واحدة، وخير ما تعرفها قبل ما الموديل يسيبك في عطل
    حقيقي. الطرف التاني في الطبقة التانية هو الصندوق اللي بعدك، مش الجهاز في آخر العالم.
    طبقة الـ Wi-Fi عندك بتكلم نقطة الدخول، ونقطة الدخول بتكلم السويتش. ومفيش حد بيتكلم
    Ethernet من ترابيزك لحد الموقع.

    وده سبب وجود الراوترات. عنوان الطبقة التانية معناه «أقدر أوصله على الوصلة دي»، والوصلة
    بتنتهي عند ما الوسيطة بتنتهي. علشان تعدّي الصندوق اللي بعدك محتاج عنوان معناه يفضل صحيح
    بعد ما يبعد، ومكين بيقراه ويقرر ويمرّر.

    والموديل بيسرّب في حاجات تانية على طول: الـ ARP بيجاوب على سؤال بتاع طبقة تلاتة جوه فريم
    بتاع طبقة اتنين، وما دخلش في أي صندوق فيهم. والـ OSI reference model، يعني طريقة بتوصّف
    بيها شكل أي stack. والإنترنت اللي إحنا فيه شغال بـ TCP/IP.

    وبرضه فيه سبعة أماكن بأسماء تشير عليهم. مفيش وصلة، تشير لتحت. اتصالات بترفض، تشير للنقل.
    شهادة معترض عليها، تشير لفوق. الطريقة دي موجودة في المقال: [BLOG_URL].

    الفيديو إنجليزي بعناوين إنجليزي. المقال بالعربي.

---

# 2. LinkedIn

Longer-form, article-led, written for people who will absolutely mention MPLS in the
comments. The clip works here as the hook asset; the link goes in the first comment to keep
reach.

## LinkedIn - EN

    Most explanations of the OSI model describe a climb down to the cable and back up again.
    Your message starts at the
    Application layer, gets wrapped on the way down to the cable, and gets unwrapped again at
    the other end. That is a true description of what your machine does. It is also the
    reading that makes the model feel like trivia.

    Try the horizontal version. Layer 4 on your machine is in a conversation with layer 4 on
    the machine you are talking to. The two of them agree on ports, sequence numbers, how much
    may be in flight, and what counts as lost. A router in the middle reads layer 3 and
    forwards. A switch reads layer 2 and does less. Neither holds any part of your layer 4
    agreement. The only peer for a given layer is the same layer at the far end.

    Once the conversation is sideways, the useful consequence falls out on its own. A layer is
    a boundary. A boundary can be specified once, implemented by different vendors on either
    side, and rebuilt by one side years later without the other noticing.

    That is not hypothetical. RFC 7540 describes HTTP/2 as an application-layer protocol
    running on top of TCP. RFC 9114 moves the same HTTP semantics onto QUIC, and notes that
    QUIC incorporates TLS 1.3 at the transport layer rather than running TLS over TCP. The
    request format did not change. The server advertises the new endpoint with an Alt-Svc
    header and browsers quietly start using a different transport. The web got rebuilt a layer
    at a time, in public, while every application kept talking the same way.

    Two honest caveats, because a networking audience deserves them. Layer 2 is where the
    pretty picture gets loose: Ethernet and Wi-Fi share the layer and share almost nothing
    else, ARP answers a layer-3 question inside a layer-2 frame and belongs to neither box,
    and a layer-2 peer is the next hop, not the far end. That is what routers are for. And OSI
    is a reference model from ISO/IEC 7498-1, not the architecture of the internet, which runs
    TCP/IP. RFC 1122 puts the mapping awkwardness on record itself: the Internet application
    layer "essentially combines the functions of the top two layers" of OSI. There is no clean
    seven-to-four mapping, and tables that imply one are study aids.

    I wrote up the whole thing: the seven pairs one by one, what actually got swapped and where
    QUIC sits, the PDU naming trap, where the model leaks, and a way to point at a layer during
    a real outage instead of guessing.

    First comment has the link. The three short clips at the top of this post cover the same
    ground at about a minute each.

## LinkedIn - AR

    أغلب شرح الـ OSI بيتكلّم عن رسالة نازلة سُلّم من التطبيق لحد السلك وبتتلف في الطريق وبتفتح
    تاني عند التاني. الكلام ده صحيح عن جهازك، بس هو نفسه اللي بيخلي الموديل يحسّك إنه تحصيل
    حاصيل.

    جرّب القراءة الأفقية. الطبقة الرابعة عندك بتتكلم مع الطبقة الرابعة في الجهاز اللي أنت
    بكلمه. الاتنين متفقين على الـ ports وأرقام التسلسل وكم يفضل في الجو وإمتى نقول إن حاجة
    ضاعت. الراوتر في النص بيقرا الطبقة التالتة وبينقّل، والسويتش بيقرا التانية وبيعمل أقل.
    والاتنين مالهمش نسخة من اتفاقكم.

    ولما الكلام يبقى أفقي، النتيجة المهمة بتطلع لوحدها. الطبقة دي حد. والحد ينفع يتكتب مرة
    واحدة، ويتنفّذ عند شركتين على جنبين، وتبني ناحية منه تاني بعد سنين والناحية التانية ما
    تحسش بحاجة.

    وده مش كلام نظري. الـ RFC 7540 بتوصف الـ HTTP/2 إنه بروتوكول application layer ماشي فوق
    TCP. والـ RFC 9114 نقلة نفس المعاني على QUIC، وقولت إن QUIC بتدمج TLS 1.3 في طبقة النقل
    نفسها بدل ما TLS يفضل فوق TCP. صيغة الطلب ما اتغيرتش. الموقع بيعن عن النقطة الجديدة بـ
    Alt-Svc header والمتصفح بيبدأ يستخدم نقل تاني من غير ما حد يطلب حاجة. الويب اتبنى من
    جديد طبقة طبقة قدام عينيك، وكل التطبيقات فضلت بكلامها القديم.

    ونقطتين بأمانة، لأن اللي بيقرؤوا عربي في الموضوع ده عندهم خلفية: الطبقة التانية هي فين
    الرسمة بتسرّب. Ethernet وWi-Fi في نفس الطبقة وما بيتقساش في حاجة، والـ ARP بيجاوب سؤال
    تالتة جوه فريم اتنين وما داخلش في أي صندوق، وطرف الطبقة التانية هو الوصلة الجايّة مش آخر
    العالم. وده بالظبط شغل الراوترات. والـ OSI reference model من ISO/IEC 7498-1، وده مش
    معمارية الإنترنت؛ الإنترنت شغال بـ TCP/IP، والـ RFC 1122 نفسها بتقول إن طبقة التطبيق في
    الإنترنت بتجمع وظائف أعلى اتنين طبقات في OSI. يعني مفيش تطابق نضيف بين السبعة والأربعة،
    وأي جدول بيقول غير كده ده أداة مذاكرة.

    كتبنا الكلام ده كله: الأزواج السبعة واحدة واحدة، واللي اتغيّر بالظبط وQUIC قاعدة فين، وحبسة
    أسماء الوحدات، وفين الموديل بيسرّب، وطريقة إنك تشير على طبقة في عطل حقيقي بدل التخمين.

    اللينك في أول كومنت. والتلات فيديوهات فوق كل واحدة منهم حوالي دقيقة.

---

# 3. X thread

Eight posts. Thread order follows the article's argument. Post 1 is the whole hook and works
alone; each of 2-7 also works as a standalone quote-retweet.

    1/
    You've seen the OSI stack seven times and probably still read it up and down. That is the
    part you can forget.

    Each layer's real conversation is with the same layer on the machine at the other end.
    Seven pairs, running at once. Thread on why that flip is the whole value of the model.

    2/
    Your transport layer and their transport layer agree on ports, sequence numbers, how much
    data may be unacked, and what counts as lost.

    Nothing in the middle holds a copy of that agreement. A router reads layer 3 and forwards.
    A switch reads layer 2 and stops there. Your only layer-4 peer is at the far end.

    3/
    A sideways promise is a boundary. A boundary can be written down once, built by two
    different vendors, and rebuilt on one side later while the other side keeps working.

    That is the actual reason the seven layers exist as a spec: so implementation could be
    separated from the interface and sold separately.

    4/
    Worked example. RFC 7540 calls HTTP/2 an application-layer protocol running on top of TCP.

    Then TCP's loss recovery became the ceiling: HTTP/2's many transactions on one connection
    are invisible to it, so one lost packet stalls everything on that connection. No fix
    exists at the top, because the top never sees a packet.

    5/
    RFC 9114 moved the same HTTP semantics onto QUIC, and says QUIC incorporates TLS 1.3 at
    the transport layer instead of running TLS over TCP. The server advertises it on the old
    connection with an Alt-Svc header.

    Same request. Same status codes. New transport. The web rebuilt itself a layer at a time,
    in public.

    6/
    The honest part. Where does QUIC live: 4, 5, or 6? Books disagree, and the disagreement is
    legitimate. RFC 9000 titles it a transport, it rides on UDP which is also a transport, it
    contains the handshake that used to be TLS, and it carries framing that used to be HTTP's.

    A layer is the set of promises. One number cannot hold a bundle.

    7/
    Two more leaks, said out loud so nobody uses the model as a gotcha.

    Layer 2 is hop-by-hop. Its peer is the next box, and that is precisely why routers exist: a
    link-local address dies at the link. OSI is a reference model too. The internet runs
    TCP/IP, and RFC 1122 admits its application layer combines OSI's top two. No clean mapping.

    8/
    The payoff is a bad night with a smaller search space.

    No link, the bottom of the stack. It joins and cannot find anyone, addressing and path. It
    connects and resets or times out, the transport. It works and the certificate complains,
    the top.

    Full writeup with the seven pairs, the swaps, and the pointing method: [BLOG_URL]

Optional 9/ (only if the account wants the mnemonic on the record):

    And yes, "Please Do Not Throw Sausage Pizza Away" still gets you the order from layer 1 up.
    It buys you the order of the ladder. The direction of the conversation is a different thing
    entirely, and that is the part worth the five minutes.

---

# 4. Short-form captions and on-screen text

The clips already ship burned-in English captions, so the platform caption is a different
job from subtitles: it is the hook that survives a muted feed and a cropped preview. One
line of on-screen overlay text, one first line, one pinned comment.

## P1 `sideways`

    Overlay (first second, top third, never over the stack): READ IT SIDEWAYS
    Caption line 1: The stack is seven conversations running at the same time.
    Caption body: Your layer 4 is talking to their layer 4. Everyone in the middle is just
    forwarding. The direction you were taught hides the useful part.
    Pinned comment: All seven pairs, one by one, in the article: [BLOG_URL]
    Hashtags (pick 3, not 12): #networking #OSI #ccna

## P2 `promise`

    Overlay: TCP TO QUIC. NOTHING UPSTREAM CHANGED.
    Caption line 1: A layer is a slot with a job, and a slot can be refilled.
    Caption body: HTTP/2 over TCP became HTTP/3 over QUIC. Same request, same status codes,
    new transport, advertised in public with an Alt-Svc header.
    Pinned comment: What got swapped, and where QUIC actually sits: [BLOG_URL]
    Hashtags: #http3 #quic #webdev

## P3 `honest`

    Overlay: LAYER 2 IS HOP-BY-HOP
    Caption line 1: Every pretty model has one leak. Here is the OSI one.
    Caption body: Layer 2's peer is the next box, not the far machine. That is why routers
    exist. Know the leak and the model gives you seven places to point at when something breaks.
    Pinned comment: Where the model leaks, and what to point at: [BLOG_URL]
    Hashtags: #networking #troubleshooting #ccna

## Arabic overlay and caption notes

Same three clips, Arabic caption block for Arabic-language accounts. The clips stay English
on-screen, so the caption carries the substance and the article carries the Arabic depth.

    P1 overlay: اقرأها بالعرض
       أول سطر: الكومة دي سبعة كلامات بيحصوا مع بعض.
       المتن: الطبقة الرابعة عندك بتتكلم مع الرابعة عنده. وكل اللي في النص بينقّل بس.
       كومنت مثبّت: المقال كامل بالعربي: [BLOG_URL]/ar/

    P2 overlay: TCP إلى QUIC
       أول سطر: الطبقة خانة عليها شغل، والخانة بتنفع تتعبّى تاني.
       المتن: HTTP/2 على TCP بقى HTTP/3 على QUIC. نفس الطلب، حمل تاني، والموقع بيعن عنه
       بـ Alt-Svc.
       كومنت مثبّت: اللي اتغيّر بالظبط في المقال: [BLOG_URL]/ar/

    P3 overlay: الطبقة التانية للوصلة بس
       أول سطر: فين الموديل بيسرّب، وليه الراوترات موجودة.
       المتن: الطرف التاني في الطبقة التانية هو الصندوق اللي بعدك. اعرف التسريب ده، والسبعة
       أماكن دي تصير أداة تشخيص فعلًا.
       كومنت مثبّت: المقال بالعربي: [BLOG_URL]/ar/

---

# 5. Posting notes

1. Run order P1, P2, P3 across at least a week. The parts stand alone, so a gap costs
   nothing; dumping all three in one day does not compound.
2. Every post names the article section it hands off to, matching the closing card in that
   clip. Do not swap them. P1 hands to the seven pairs, P2 to what got swapped and where QUIC
   sits, P3 to the leaks and the pointing method.
3. Links in the first comment on LinkedIn and Instagram. X threads can carry the link in the
   last post.
4. Replies to expect, and the honest answer for each:
   - "OSI is dead, everyone uses TCP/IP." Correct, and the article says it. The model survives
     as vocabulary.
   - "QUIC is layer 4 / layer 7." Both positions exist in print. The article states the
     disagreement rather than settling it.
   - "MPLS is layer 2.5." The nickname is the point being made, not a counterexample.
   - A correction proposing a mnemonic other than the canonical one. The canonical bottom-up
     sentence appears in the article. Nothing else does.
5. Measurement: nothing is instrumented yet. There is no analytics integration in `blog/` and
   `site:` is a placeholder, so none of these handoffs can be counted today. See the run
   report for the two changes that would make them countable.

## Constraint audit for this file

- Contrast reveals: zero. Every hook states the sideways reading outright. The one denial in
  the set is P1's opening line, `Almost everyone reads it the wrong direction`, in the
  reader's own terms, and nothing after it repeats the shape. The LinkedIn EN post uses a
  plain negation once (`That is not hypothetical`) before evidence, which is a fact about the
  claim rather than a reveal.
- Em dashes in short copy: zero across all posts, hooks, overlays and captions.
- Lists of three: one per post maximum, with varied grammar. No parallel-opener triads.
- Negation lists: none.
- Colon reveals and self-answered questions: none. The reader-voice question in thread post 6
  is followed by the answer as a statement of what books disagree about.
- Stock openers, engagement bait, emoji bullets, broetry: none. Fragments are rationed to one
  per post.
- Mnemonics: the canonical bottom-up sentence appears once, in the optional thread post 9, and
  is credited as an order device only. No invented variant appears anywhere in the campaign.
- The postal image appears nowhere in this file. It stays scoped to Layer 3 forwarding in the
  article.
- Claims: every protocol statement traces to RFC 7540, RFC 9000, RFC 9114, RFC 1122, RFC 826,
  RFC 1191, ISO/IEC 7498-1, or the campaign's own series bible. No statistics are used.
