---
title: "Read the OSI model sideways: what each layer promises its peer"
description: "Each OSI layer talks to the same layer at the other end. The seven peer promises, the honest TCP/IP mapping, where Layer 2 leaks, and how to point at a fault."
pubDate: 2026-10-22
tags: [osi, networking, fundamentals]
draft: true
---

## The direction you were taught

You already own the seven names. Physical, Data Link, Network, Transport, Session, Presentation, Application. You probably own the sentence that keeps them in order too. The picture in your head is a ladder: a message starts at the top with your app, gets wrapped on the way down to the cable, crosses, and gets unwrapped on the way back up at the other end. The climb is the lesson.

That reading has the direction wrong.

Try the other one. Your transport layer is in a conversation with the transport layer of the machine you are talking to. Those two agree on port numbers, on what a sequence number means, on how much data may be in flight before an answer is owed, and on what counts as lost. Nothing in between holds any part of that agreement. A router in the middle reads the layer-3 address, decides which way to push, and never touches your sequence numbers. A switch below it reads a layer-2 address and does less. The only machine in the entire path running layer 4 with you is the one at the far end.

Do this at every layer and the diagram turns into seven conversations running across the wire at the same time, matched by number: your layer N with their layer N. The vertical stack is real in one sense. It is the order your own machine does its work in, and the order most network code is organised in.

The sideways reading is worth the swap because a promise that runs sideways is a boundary. A boundary can be written down once, built by two different vendors on either side of it, and rebuilt by one of them years later without the other noticing. That is the useful thing about the OSI model, and the ladder reading hides it.

## Where the seven layers come from

OSI is a reference model, and that phrase does the work. The document is ISO/IEC 7498-1, with a twin at the ITU-T numbered X.200. Work on it ran through the late 1970s and early 1980s, the first edition was published as ISO 7498 in October 1984, and the edition most people mean when they cite the standard is ISO/IEC 7498-1:1994. Its own section 1.1 gives the purpose: to provide a common basis for the coordination of standards development for the purpose of systems interconnection. A ruler, in other words. Not a stack you can run, and there is no such thing as a single "OSI protocol".

The other belief worth clearing out while it is cheap: the internet does not use OSI. It runs TCP/IP, and it was running TCP/IP before the OSI model was published. On 1 January 1983, the day the community called flag day, TCP/IP became the standard protocol of the ARPANET, replacing NCP. The first OSI edition appeared twenty-one months later.

OSI still won, just not where anyone was selling anything. It became the vocabulary. Every networking course, every vendor datasheet, every argument about whose fault an outage is gets conducted on the seven-layer grid because it names the places. A model that describes the shape of a problem can outlive the protocols built behind it.

## The seven pairs, side by side

Here is the layer-by-layer pass, done in the direction that pays. Each layer gets one question. What does it promise the same layer on the machine at the other end? Everything else about a layer is how a particular vendor keeps that promise.

| Layer | Its promise to the peer at the other end | Real names you meet it under |
|---|---|---|
| 7 Application | the exchange itself, in agreed words | HTTP, SMTP, DNS |
| 6 Presentation | a format both sides can parse, private if asked for | TLS, by textbook habit |
| 5 Session | staying in one conversation and resuming it | mostly folded into applications |
| 4 Transport | order and loss between two programs | TCP, UDP |
| 3 Network | the address and the route | IP, routing protocols |
| 2 Data link | this frame crosses this one link, and damage gets caught | Ethernet, Wi-Fi |
| 1 Physical | symbols on the medium, or a plain report that there is no medium | cable, radio, light |

### Layer 1: the wire, the radio, the light

Layer 1 promises its peer one thing. Put symbols on this medium and I will make them show up at the other end of it, and if there is nothing to put them on I will say so instead of inventing them. Voltages, wavelengths, timing, connector pinouts, the radio channel and its signalling all live here. Its peer is the physical layer of whatever device is on the other end of that medium. Failure here is the loudest kind available: no link, no carrier, the light is off.

### Layer 2: the link next to you

The promise is narrower than people expect. This frame crosses this one link to this one receiver, and if it arrives damaged I notice before anything above me touches it. Two pieces of machinery carry that promise: a MAC address, which means reachable-on-this-link and nothing more, and a trailer at the end of the frame holding a checksum, which Ethernet calls the FCS. That trailer is worth noticing, because it is the model telling you it is not a set of tidy boxes. A check value over the whole payload can only be computed once the whole payload exists, so this layer does its bookkeeping at the back.

Ethernet and Wi-Fi share this layer and share almost nothing else. Switched Ethernet is a wired, full-duplex medium where you transmit when you have something to say. Wi-Fi is a shared, half-duplex radio where you wait your turn, back off when the turn goes wrong, and treat loss as normal rather than as an accident. Same number, opposite assumptions about the world. The layer splits again underneath: IEEE 802.2 defines LLC as the upper sublayer of the data link layer, sitting above the MAC sublayer.

One catch shows up in full further down this page. At layer 2, the peer is the next box, not the far machine.

### Layer 3: the address and the route

The promise: get this to that address, across whatever links happen to be in the way, and make no delivery guarantee while doing it. IP is the name, and RFC 1122 states the contract flatly. IP is a connectionless, datagram internetwork service providing no end-to-end delivery guarantees, so a datagram may arrive damaged, duplicated, out of order, or not at all, and the layers above IP are responsible for reliability when reliability is wanted.

The post office belongs here and only here. The address is on the outside of the envelope, every stop reads it and sorts, and only the far end opens the letter. Everything underneath is envelope and stamp, and the sorting office is the next router.

### Layer 4: the conversation between two programs

The promise: whatever the transport at the other end agrees with me about. TCP, the reliable one, agrees on sequence numbers, on resending what went missing, on how much may be unacked at once, and on a shared story about how fast to send into a congested path. UDP agrees on almost nothing beyond these bytes to that port, and people pick it for that. The conversation runs the length of the path. Every box in between forwards and forgets.

This is also where the interesting construction happened, and the swap section below is about it.

### Layer 5: staying in the conversation

The promise: keep track of which conversation this is and where it stopped, so a resumed transfer picks up at the checkpoint instead of at the beginning. Real stacks ship very little as a separate box here. The application does the job, or the job does not get done. When the IETF describes HTTP/1.1 as having been used over a variety of transport and session layers, that is the closest an official document comes to admitting the box moves around.

### Layer 6: the format both sides can parse

The promise: encode this so the peer's parser agrees about what it is looking at, and keep it readable only to them if that was part of the deal. Character sets, serialisation, compression, and encryption as a function all belong to this description. Textbooks park TLS on this layer, and the honest version of why is in the next section.

### Layer 7: what your app actually says

The promise: the exchange itself. The method, the headers, the status code, the mail command, the DNS question and its answer. HTTP, SMTP and DNS are having this conversation with their counterparts on the far end, and the contents of it are what your program cares about. This layer sits closest to the person using the machine. The person is not part of the model.

## What got swapped, and where QUIC actually lives

A layer is a slot with a job attached, and a slot with a job can be refilled while both ends keep the appointment. The web has been rebuilt this way in public, more than once, and the most instructive case is the one your browser is running today.

**The old arrangement.** RFC 7540, the HTTP/2 specification from 2015, describes itself in its own words: an HTTP/2 connection is an application-layer protocol running on top of a TCP connection. So HTTP/2 was new work at the top, and the carrying was still TCP with TLS above it. RFC 9114 gives the reason that stopped being enough. HTTP/2 put many independent transactions on one connection, and that parallelism is invisible to TCP's loss recovery, so one lost or reordered packet stalls every active transaction on that connection, including the ones whose bytes arrived fine. No fix exists at the application layer for that, because the application never sees a packet. It sees a byte stream, and the byte stream is exactly where the stall happens.

**The swap.** RFC 9114, June 2022, says it in three sentences: HTTP/1.1 has been used over a variety of transport and session layers, HTTP/2 has been used primarily with TLS over TCP, and HTTP/3 supports the same semantics over a new transport protocol, QUIC. Same semantics. Different carrying. QUIC gives HTTP reliability and congestion control per stream rather than per connection, and it incorporates TLS 1.3 at the transport layer instead of running TLS over TCP. RFC 9114 hands the whole list over: HTTP/3 relies on QUIC for confidentiality and integrity, for peer authentication, and for reliable, in-order, per-stream delivery.

**Nobody upstream had to be rebuilt.** The handover is visible from outside. RFC 9114 lets an origin advertise an equivalent HTTP/3 endpoint on the existing connection, through the Alt-Svc response header or the HTTP/2 ALTSVC frame, using the h3 token. A browser that sees that advertisement starts using QUIC on later visits. No page author shipped a new request format, no application protocol changed its meaning, and the transport under it was replaced.

**Where QUIC actually lives.** RFC 9000 is titled "QUIC: A UDP-Based Multiplexed and Secure Transport". The IETF calls it a transport, and it runs on top of UDP, which is itself a transport. Inside it sits the handshake that used to be a separate layer of TLS. On top of it sits framing that used to be part of HTTP. Books disagree about which number to give it, and the disagreement is legitimate. Some count it at layer 4. Some put it in the gap above the transport. Some refuse the question.

The disagreement is not a defect in your understanding. It is the diagram's clean line doing what a clean line does. The layer is the set of promises, and QUIC keeps a bundle of promises that a 1984 drawing had split across three boxes, so one number cannot hold it and stay honest. Point at the promises and the argument stops mattering: something at the far end is agreeing with you about order, loss, and secrecy, and that agreement is the thing you can reason about.

**The other swap, the one you have already done.** Unplug the Ethernet cable with a page still loading and the machine joins the Wi-Fi and carries on. Two different layer-2 technologies with opposite assumptions about collisions just swapped under the same layer-3 address, and nothing above had to be rewritten for the change.

Now the part that keeps this honest on a real laptop. Long-lived TCP connections often do break across that handover, because your IP address changes and TCP keys a connection to an address. The layer still holds its promise. The promise was never "your connection survives your commute". The designers noticed, and the fix arrived at a layer you would not expect: RFC 9000 lists network path migration among the services QUIC gives applications, so a client can change its address and keep the conversation. The web moved the identity of a connection off the address and into the transport, because phones do not stop moving.

## Seven layers against four

Any comparison table you find will line the two up like this: OSI's top three layers become the TCP/IP application layer, layer 4 becomes the transport layer, layer 3 becomes the internet layer, and layers 2 and 1 become the link or network-access layer. The table is a study aid. There is no clean mapping between the two models, and the reason is documented rather than implied.

RFC 1122, the 1989 requirements document for Internet hosts, is the closest thing the Internet side has to an official statement, and it names four layers: application, transport, internet, link. About the top it says this, verbatim: "The application layer of the Internet suite essentially combines the functions of the top two layers -- Presentation and Application -- of the OSI reference model." Session gets no layer of its own at all. That is one missing box, and the bottom of the stack has the opposite problem. RFC 1122 calls its own bottom layer a "link layer or media-access layer protocol" and then adds that there is a wide variety of link layer protocols, corresponding to the many different types of networks. One box, containing everything from Ethernet to Wi-Fi to satellite.

The same document shows the two worlds agreeing on jobs rather than on numbers. An Internet host corresponds to the OSI concept of an End-System. The forwarding boxes are gateways or IP routers to the Internet community, and Intermediate Systems to the OSI world. Same machine, three names.

One more fact, because it makes the relationship less hostile than the usual telling. RFC 1122 notes that Internet IP was the model for the OSI Connectionless Network Protocol. The two suites borrowed from each other while they were being drawn, and the seven-layer picture was never a rival architecture you were meant to install.

## The PDU ladder is a classroom habit

One more piece of teaching that is a convention and not a standard. Each layer supposedly produces a named unit: data at the top, a segment at layer 4, a packet at layer 3, a frame at layer 2, bits at layer 1. It is presented as though the specifications agreed on this ladder. They did not agree on it, and the words do not mean what the ladder says they mean.

TCP's own specification, RFC 793, does call the units it hands to IP segments, so that rung holds. IP calls its unit a datagram, and RFC 1122 uses that word in the sentence about damaged, duplicated, and missing delivery. Ethernet calls its unit a frame. HTTP/2 also calls its unit a frame, and RFC 7540 defines a frame header with a Length, a Type and Flags, nine octets of header before the payload. HTTP/3 rides in QUIC packets that contain frames of yet another kind. So frame is a layer-2 word and a layer-7 word and a QUIC word, and packet is a word people use for anything with a header on it at a party.

Two habits come out of this. The ladder is fine as a shorthand for a lecture and misleading as a description of a wire, because it teaches you that the interesting thing about a layer is what it wraps rather than what it agrees to. And the rule that every layer adds a header has at least one visible exception in the stack you use every day: layer 2 appends a trailer, and any claim about encapsulation that forgets the trailer will not survive an Ethernet frame capture.

## Where the model leaks

The sideways rule from the top of this page needs one asterisk, and the honest part of learning the model is knowing where the asterisk goes.

**Layer 2's peer is the next box, not the far machine.** Your laptop's Wi-Fi layer is in a conversation with the access point. That access point has its own layer 2 on its wired side, holding a separate conversation with the switch. The switch has one with the next hop. Nobody, anywhere, is speaking Ethernet end to end across the internet. Layers 3 and up genuinely do run all the way to the far end. Layer 2 and layer 1 restart at every hop.

**That is exactly why routers exist.** A layer-2 address means reachable directly on this link, and a link ends where the medium ends. To get past the next box you need an address whose meaning survives the hop and a machine that reads that address, decides, and forwards. That is the layer-3 job, and the machine is a router. Every hop has its own layer 2 with its own medium and its own address space, and a layer-3 conversation is what stitches those hops into one path without any of them having to agree about cable.

**ARP sits on the seam.** RFC 826, November 1982, is titled "An Ethernet Address Resolution Protocol". Its job is to turn a network-protocol address into a 48-bit Ethernet address so a host can actually put a frame on the cable. It answers a layer-3 question, and it does it by broadcasting inside a layer-2 frame. It is not comfortable in either box, the model has no shelf for it, and real stacks are full of glue like this.

**The boxes are not atomic.** The data link layer splits into sublayers, with LLC above the MAC sublayer. The transport layer now contains a security handshake that used to live a layer up and a framing language that used to live two layers up. MPLS gets nicknamed layer 2.5 because people keep running into the same wall from the other side.

None of this retires the model. It was drawn as a specification of relationships between functions, and never claimed to catalogue devices. Had it tried, it would have been out of date within a decade. The part that survives is smaller and more useful: seven named places to point at, in a fixed order, that other engineers already understand when you name them.

## What to point at when it breaks

This is what the vocabulary is for. The idea is that a symptom has a position, and the ladder gives you a way to say it out loud without a ticket war.

| What you see | Point at | What it rules out |
|---|---|---|
| No link at all, Wi-Fi will not join, an address that appeared out of nowhere | Layer 1 and layer 2 | Nothing above the link can be judged yet |
| It joins but cannot find the far machine, or small requests work and large ones vanish | Layer 3 | The cable and the radio are already innocent |
| It connects but drops, times out, or gets refused | Layer 4 | Addressing and forwarding are working |
| It works and then the app complains, or the certificate is objected to | Layers 6 and 7 | Everything below is carrying traffic fine |

The usable version is a procedure, and it runs bottom-up because the bottom is cheap and everything above it is built on it.

1. **Is there a link?** If not, you are at layer 1 or 2 and every theory about the server is a distraction. Fix the medium, the radio, or the address the link handed out.
2. **Do you have an address of the kind the far machine could reply to?** No usable address is a layer-2 and layer-3 handover problem, not an application problem.
3. **Can you reach the far address at all?** If yes, stop looking at cables. A fault above a successful reach is not a medium fault, and that single test moves your suspicion up the ladder in one step.
4. **Does the port answer?** Distinguish the two failures here. A refusal means something on the far host answered and said no, which is a layer-4 fact about a live peer. Silence means nothing answered, which is usually a layer-3 path or a middlebox, and looks identical to the user.
5. **Does the exchange itself complete?** Status codes, redirects, authentication and certificate complaints are the top of the stack. They are also where a middlebox pretending to be a peer shows up, which is one reason the top is not the safest place to start.
6. **Works, but large payloads disappear.** That is a layer-3 problem wearing a layer-4 symptom. Each link has a maximum frame size, the limit changes from hop to hop, and a router cannot always report it. Path MTU discovery exists for exactly this hole, and it is RFC 1191 from November 1990.

One correction to any list you have read, because it causes real confusion in outages. A firewall is not a layer. A packet filter matches addresses and ports, so it reads layer 3 and layer 4. A stateful firewall tracks the transport conversation and remembers where it got to. A proxy or a web application firewall parses the application exchange itself. Vendors sell "layer 3" and "layer 7" products, and those labels are a taxonomy of inspection depth, not a claim that a device lives in one box.

The skill the ladder buys you is the pointing, and it is worth practising on purpose. When something breaks, decide which side of a boundary you can prove works, and say the layer. That is a place to look, not a verdict, and it is a much better sentence than the one most outages start with.

## The mnemonic, in one line

"Please Do Not Throw Sausage Pizza Away" gets you the seven names in the right order, counting up from layer 1. It buys you the order of the ladder, and nothing at all about who is talking to whom, which turns out to be the part that makes the model worth learning.

Three clips cover this same ground at roughly a minute each, if a diagram does more work for you than paragraphs: the flip, the swaps, and the leaks. Each one stands on its own.
