const subwayTape = {
    id: 'subwayTape',
    choices: [{
        id: 'subwayYes',
        description: 'Yes',
        result: `
            "It's been four days since the bombs fell. No, five, definitely five. It's hard to keep track of time. The sky is still so dark all the time. I can't believe this happened. Or, maybe I can, and that makes it worse."
            "So. Okay. Hello, future person. My name is Farrah Green. I'm uh, 21 years old. I was living in Atlanta, supposed to graduate college next week. I had a job at this really nice firm all lined up, I had just signed a new lease on the best apartment...this was all really crappy timing, to be honest, ha."
            "I was living with my best friend, Moira. Moira Drake. She...she didn't make it. She was witty, and kind, and amazing, and she made just, the best jokes at exactly the right times and...and she didn't make it. I guess I'm making this for her. They say you only truly die the last time someone says your name, right? So if I record her name, maybe then she never really dies. Maybe then I never do, either."
            "Anyway, I'm holed up in a subway car right now. It's around sunset, I think. Like I said, the sky is still so dark all the time, it's so hard to tell. I haven't met anyone else yet. No survivors. Things were so hectic right after...But I can't be the only one, right? I'm going to hunker down here for the night and start moving again tomorrow. My parents have a beach house. I'm hoping it's still there. I'm hoping they're still there, too."
                `,
        tapes: 1
    }, {
        id: 'subwayNo',
        description: 'No',
        result: `Who cares what it says? The merchant will love this!`,
        gil: 20
    }]
};

const mallTape = {
    id: 'mallTape',
    choices: [
        {
            id: 'pharmacyYes',

            description: 'Yes',

            result: `
            "Hello future person, it's me, Farrah. We're three weeks into the apocalypse now, give or take. I still haven't seen anyone. Well...no one alive, I guess. It's weird how much I miss the Internet these days. For all its faults, it really did bring people together. And God, do I miss memes. I think the right meme would really help me out through these trying times, you know?"
            "It's weird being back in this mall. I used to come here when I was a kid. Me and Jaylen and Tiff and James would spend whole afternoons here. It was failing already, even then. We said that it was actually counter-culture to take back the malls. The crumbling monoliths of capitalist endulgance becoming the playground of bored teenagers. Like that made any difference. I guess they're most likely gone now...So many people are gone..."
            "Ahem, uh. I'm in the lock-up of a pharmacy right now. I cut my leg on something while hiking up here and it's not looking too good. I found some antibiotics in here and some clean bandages, so I'm going to wait a few days and make sure it heals. I can still smell the cookie place, even from back here. If I close my eyes and inhale really deep, it's almost like this nightmare never happened."
            `,
            tapes: 1
        }, {
            id: 'pharmacyNo',

            description: 'No',

            result: `Who cares what it says? The merchant will love this!`,

            gil: 20
        }]
};

const cabinTape = {
    id: 'cabinTape',
    choices: [
        {
            id: 'cabinYes',

            description: 'Yes',

            result: `
            "Day, uh...thirteen? Twelve. Wait, sixteen? Like, two weeks or so since this all started, anyway. This cabin belonged to my Uncle Denver. I was hoping that maybe my family had come here after the big booms, but there's no one around. Denver's old truck is still out front, but that thing hasn't run since I was a kid."
            "I got some water out of the well in the back and it tasted better than anything I've had in weeks. I found a whole stash of plastic water bottles in this trashed restaurant so I've been rationing those, but they always have that plastic-y taste, you know? Maybe you don't know. Maybe you think I'm just not making any sense at all."
            "I think what's become absolutely clear to me through all of this is that we're never going back to how we were before. I mean, obviously how we were before wasn't sustainable, but what I mean is that we're never going back to anything like how we were before. Instant communication, global reach, the mass interconnectivity--it's all gone. Wiped to zero. No more FaceBook, no more Twitter, no more Insta. Gone."
            "Oh...I just realized I don't have a photo of Moira. They were all on my phone, which is dead. There's no power anywhere, so it's not like I can just charge it. All of those texts, too? Ugh, God. We traded permanence for convenience. What absolute fools we were."
            `,

            tapes: 1
        }, {
            id: 'cabinNo',

            description: 'No',

            result: `Who cares what it says? The merchant will love this!`,

            gil: 20
        }]
};

const groceryTape = {
    id: 'groceryTape',
    choices: [
        {
            id: 'groceryYes',

            description: 'Yes',

            result: `
            "This place stinks but it's raining outside, so here I am. I found some food that hasn't gone bad, so I've got a full belly for the first time in six weeks. I think it's definitely a myth that Twinkies  last forever, but they sure do taste good right now."
            "I'm getting close to the coast now. I still haven't seen anyone but...I have to have hope, right? The last time I saw my mother she gave me a big hug and told me I was going to do great and that I needed to be sure to call her every day. But...I didn't. I was busy, at least I thought I was busy. Was that really the last time I heard my mom's voice? Just like that?"
            "I'll be back on the road tomorrow morning. The air is starting to clear now. I can at least tell when it's daylight. It still smells like smoke out there. Maybe the rain will help with that, though."
            `,

            tapes: 1
        }, {
            id: 'groceryNo',

            description: 'No',

            result: `Who cares what it says? The merchant will love this!`,

            gil: 20
        }]
};

const coastTape = {
    id: 'coastTape',
    choices: [
        {
            id: 'coastYes',

            description: 'Yes',

            result: `
            "Well, I...I made it. I walked for two months to get here and...and there's people here. I haven't seen anyone in so long, I was so worried..."
            "But my parents are...dead. My parents are dead. They didn't make it here before the blast. I've got to let them go. Like I let Moira go. I have to let them go."
            "This group I found, these survivors, they're heading South in the next few days. There's a colony down there and I can put in the work. We have to rebuild, somehow. Make something out of what's left, you know?"
            "This is going to be my last message. If you're listening to this, whoever you are, just know...just know that I was here. I laughed, and I raged, and I cried in this house. I was real. I was here."
            "Goodbye. And good luck."
            `,

            tapes: 1
        }, {
            id: 'coastNo',

            description: 'No',

            result: `Who cares what it says? The merchant will love this!`,

            gil: 20
        }]
};

const tapes = [
    subwayTape,
    mallTape,
    cabinTape,
    groceryTape,
    coastTape
];

export default tapes;