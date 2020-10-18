const subway = {
    id:'subway',
    title:'Strange Cave',
    map: {
        marginTop: '120px',
        marginLeft: '90px'
    },
    image:'/subway1.jpg',
    description: `You descend into the dimly lit cave, moving slowly to give your eyes a chance to adjust to the darkness. The walls are lined with slick stones arranged in rectangle patterns. They feel cool against your fingertips. A large crevice in the middle of the cave is dominated by a twisted metal structure that emerges from a tunnel. An ancient home, perhaps? Or was it what the elders called "automobiles"? Whatever its name, it could contain a relic. There is a large pile of rubble to the north where part of the ceiling has collapsed. Near the entrance is a trash receptacle turned on its side. What do you do?`,
    choices: [{
        id: 'rubble',
        description: 'Explore Rubble Pile',
        resultImage: '/dog1.jpg',
        result: `You approach the rubble pile and begin sifting through stones. The stones are heavy and you're so distracted with your work that you don't hear the WILD DOG sneak up behind you. It lunges, sinking its teeth deep into your calf! With a yell, you swing wide with a rock in your hand. It connects with the dog's head, dazing it long enough for you to escape. You return to the merchant empty-handed, but alive. -14 HP`,
        hp: -14,
        gil: 0,
        tapes: 0,
        tapeId: false
    },
    {
        id: 'subwayCar',
        description: 'Examine Metal Structure',
        resultImage: '/recorder1.png',
        result: `You enter the mangled structure, the floor beneath you creaking as you step inside. There are cracked and collapsing seats lining either side of the structure. Tucked neatly under a nearby row, you find a wad of fabric. You unfurl it, revealing a moth-eaten blanket protecting a...recorder? And it looks like it still works! Should you press play?`,
        hp: 0,
        gil: 0,
        tapes: 0,
        tapeId: true
    },
    {
        id: 'trashCan',
        description: 'Explore Trash Can',
        resultImage: '/phone3.jpg',
        result: `The trash can is full of soggy paper, some strange-colored mold, and a gooey substance you don't think you'll ever get out from under your fingernails. You kick the trash can in frustration and, lo! Underneath it is a small relic! You quickly leave, excited to show the merchant your new find! +12 Gil`,
        hp: 0,
        gil: 12,
        tapes: 0,
        tapeId: false
    }],
    // 
    tapeChoices: [{
        id: 'subwayYes',
        description: 'Yes',
        result: `
            "It's been four days since the bombs fell. No, five, definitely five. It's hard to keep track of time. The sky is still so dark all the time. I can't believe this happened. Or, maybe I can, and that makes it worse.
            So. Okay. Hello, future person. My name is Farrah Green. I'm uh, 21 years old. I was living in Atlanta, supposed to graduate college next week. I had a job at this really nice firm all lined up, I had just signed a new lease on the best apartment...this was all really crappy timing, to be honest, ha.
            I was living with my best friend, Moira. Moira Drake. She...she didn't make it. She was witty, and kind, and amazing, and she made just, the best jokes at exactly the right times and...and she didn't make it. I guess I'm making this for her. They say you only truly die the last time someone says your name, right? So if I record her name, maybe then she never really dies. Maybe then I never do, either.
            Anyway, I'm holed up in a subway car right now. It's around sunset, I think. Like I said, the sky is still so dark all the time, it's so hard to tell. I haven't met anyone else yet. No survivors. Things were so hectic right after...But I can't be the only one, right? I'm going to hunker down here for the night and start moving again tomorrow. My parents have a beach house. I'm hoping it's still there. I'm hoping they're still there, too."
                `,
        hp: 0,
        gil: 0,
        tapes: 1
    }, {
        id: 'subwayNo',
        description: 'No',
        result: `Who cares what it says? The merchant will love this!`,
        hp: 0,
        gil: 20,
        tapes: 0
    }]
}; 
   
const mall = {

    id:'mall',
    title:'Vast Structure',
    map: {       
        marginTop: '520px',
        marginLeft: '150px'
    },
    image:'/mall2.jpg',
    sound:'',
    description: `A vast structure of stone and metal rises before you as you make your way through the city ruins. You dimly recall the elders speaking of intricate networks of shops that people in the Beforetimes would congregate a; this must be one of them. The air inside is stale but also vaguely...sweet? Very strange. You wander around for a while, but almost every shop is stripped empty. There are very few options and you have to hurry back to the merchant before night falls. Where to?`,
    choices: [{
        id: 'fabricStore',
        description: 'Explore Clothing Shop',
        resultImage: '/sturdyCloth1.jpg',
        result: `Strangely humanoid figures occupy the space, draped in various colored fabrics. Most of what you find is too disintegrated to be useful, but you find a case in the back full of sturdy fabric! The merchant will be so pleased! +10 Gil`,
        hp: 0,
        gil: 10,
        tapes: 0,
        tapeId: false
    }, {
        id: 'foodCourt',
        description: 'Follow Sweet Smell',
        resultImage: '/rat1.jpg',
        result: `You follow the sweet smell into a cavernous plaza ringed with small shops. There are faded photos of what looks like...food? Nothing that you've ever tasted. The smell is emanating from a shop with a circular logo over the top. You approach the counter and lean over. The ground is littered with what looks like fine, white sand. You're considering jumping over to inspect further when there's a series of loud squeaks nearby. You move quickly, but not quickly enough: soon there's a torrent of fat rats pouring out of every crevice, scrabbling over the counter, and heading straight towards you. You take off running, relics be damned! The merchant will be unhappy but, except for a rough tumble you took on your way out, you've escaped almost unharmed. -3 HP`,
        hp: -3,
        gil: 0,
        tapes: 0,
        tapeId: false
    }, {
        id: 'pharmacy',
        description: 'Explore Medicine Store',
        resultImage: '/recorder1.png',
        result: `The elders told you that the plus symbol meant medicine and medicine could definitely come in handy. Most of the aisles here are empty, so you enter the backroom. This place is also cleaned out except for a wad of rotten cloth in the corner and a lonely metal desk set against the wall. You check the drawers and find a recorder! And it still works! Listen to it?`,
        hp: 0,
        gil: 0,
        tapes: 0,
        tapeId: true
    }], 
    tapeChoices: [{
        id: 'pharmacyYes',
        description: 'Yes',
        result: `
        "Hello future person, it's me, Farrah. We're three weeks into the apocalypse now, give or take. I still haven't seen anyone. Well...no one alive, I guess. It's weird how much I miss the Internet these days. For all its faults, it really did bring people together. And God, do I miss memes. I think the right meme would really help me out through these trying times, you know? It's weird being back in this mall. I used to come here when I was a kid. Me and Jaylen and Tiff and James would spend whole afternoons here. It was failing already, even then. We said that it was actually counter-culture to take back the malls. The crumbling monoliths of capitalist endulgance becoming the playground of bored teenagers. Like that made any difference. I guess they're most likely gone now...So many people are gone...Ahem, uh. I'm in the lock-up of a pharmacy right now. I cut my leg on something while hiking up here and it's not looking too good. I found some antibiotics in here and some clean bandages, so I'm going to wait a few days and make sure it heals. I can still smell the cookie place, even from back here. If I close my eyes and inhale really deep, it's almost like this nightmare never happened."
        `,
        hp: 0,
        gil: 0,
        tapes: 1
    }, {
        id: 'pharmacyNo',
        description: 'No',
        result: `Who cares what it says? The merchant will love this!`,
        hp: 0,
        gil: 20,
        tapes: 0
    }],   
}; 
    
const cabin = {

    id:'cabin',
    title:'Rough Cabin',
    map: {        
        marginTop: '270px',
        marginLeft: '-250px'
    },
    image:'/cabin2.jpg',
    sound:'',
    description: `You've been hiding through the forest for what feels like a week when suddenly you come across a clearing with a broken down cabin standing in the middle. There's a rusted 'automobile' parked next to it! It looks far less impressive than the elders made it sound. The cabin is not quite structurally sound, but you can give it a good look through. There's a main living area downstairs and a loft area upstairs, plus a well behind the structure. What do you do?`,
    choices: [{
        id: 'loft',
        description: 'Explore Loft Area',
        resultImage: '/recorder1.png',
        result: `You ascend the creaking stairs leading to the loft area, feeling each one bow under your weight. You move slowly, methodically, willing it to hold, and breathe a sigh of relief when you make it to the top. You find an array of useless items, more moth-eaten blankets than you'll ever need to see in an entire lifetime, and a recorder! And it still works? Do you listen?`,
        hp: 0,
        gil: 0,
        tapes: 0,
        tapeId: true
    }, {
        id: 'well',
        description: 'Explore Well',
        resultImage: '/well2.jpg',
        result: `You lean over the stone wall of the well, looking down, down, down. The rope is long gone, the metal bucket floating in the water thirty feel below. You're wondering if you should go find a container to bring some water back to the merchant when the stone suddenly shifts beneath your palms and you topple forward! You're falling head-first, trying desperately to right yourself when CRACK. Your head connects with the bucket. YOU DIED.`,
        hp: -50,
        gil: 0,
        tapes: 0,
        tapeId: false
    }, {
        id: 'livingArea',
        description: 'Explore Living Area',
        resultImage: '/cabin1.jpg',
        result: `There is a lot of junk here and the ceiling is mostly fallen though. You happen upon a bag in a corner and, after rifling through it, you find two relics! Behind the bag you find something even more useful: an axe! You hurry back to show the merchant. They're going to be so pleased! +20 Gil`,
        hp: 0,
        gil: 20,
        tapes: 0,
        tapeId: false
    }],
    tapeChoices: [{
        id: 'cabinYes',
        description: 'Yes',
        result: `
        "Day, uh...thirteen? Twelve. Wait, sixteen? Like, two weeks or so since this all started, anyway. This cabin belonged to my Uncle Denver. I was hoping that maybe my family had come here after the big booms, but there's no one around. Denver's old truck is still out front, but that thing hasn't run since I was a kid. I got some water out of the well in the back and it tasted better than anything I've had in weeks. I found a whole stash of plastic water bottles in this trashed restaurant so I've been rationing those, but they always have that plastic-y taste, you know? Maybe you don't know. Maybe you think I'm just not making any sense at all. I think what's become absolutely clear to me through all of this is that we're never going back to how we were before. I mean, obviously how we were before wasn't sustainable, but what I mean is that we're never going back to anything like how we were before. Instant communication, global reach, the mass interconnectivity--it's all gone. Wiped to zero. No more FaceBook, no more Twitter, no more Insta. Gone. Oh...I just realized I don't have a photo of Moira. They were all on my phone, which is dead. There's no power anywhere, so it's not like I can just charge it. All of those texts, too? Ugh, God. We traded permanence for convenience. What absolute fools we were."
        `,
        hp: 0,
        gil: 0,
        tapes: 1
    }, {
        id: 'cabinNo',
        description: 'No',
        result: `Who cares what it says? The merchant will love this!`,
        hp: 0,
        gil: 20,
        tapes: 1
    }]
};
    
const groceryStore = {
    id:'groceryStore',
    title:'Food Store',
    map: {
        marginTop: '550px',
        marginLeft: '-300px'
    },
    image:'/grocery3.png',
    description: `You enter a cavernous shop with twisting aisles that have half-collapsed on top of each other. The merchant told you that this place used to be where people bought food in the Beforetimes, but you can't believe that this place could possibly contain enough food to fill it entirely. There's a large room in the back loaded with boxes and a separate room in an upstairs portion that overlooks the aisles below. Where do you go?`,
    choices: [{
        id: 'aisles',
        description: 'Explore Aisles',
        resultImage: '/twinkie1.jpg',
        result: `Most of the aisles have been cleaned out, but you find a box of some spongey, yellow treat in the very back corner of the shop. You tentatively sniff it, wondering if something could possibly have lasted this long. With a shrug you take a bite and--UGH. GROSS. You throw up everything and are too nauseous to keep searching. You return to the merchant empty-handed and empty-stomached. -8 HP`,
        hp: -8,
        gil: 0,
        tapes: 0,
        tapeId: false
    }, {
        id: 'managerOffice',
        description: 'Explore Upstairs',
        resultImage: '/recorder1.png',
        result: `You creep up the stairs, wondering what kind of overlord sat up here watching the people below. The space is disappointing; there's just a few desks loaded with papers and a depressing figurine with a wobbly head. You search the small trash can beside the desk and find a recorder! And it looks like it works! Do you listen?`,
        hp: 0,
        gil: 0,
        tapes: 0,
        tapeId: true
    }, {
        id: 'backRoom',
        description: 'Explore Back Room',
        resultImage: '/gameCube.png',
        result: `Most of the boxes are full of food that is long-rotten or nothing of use. But in the corner you find a strange cube-shaped relic! You rush back to the merchant. They're going to be so pleased! +12 Gil`,
        hp: 0,
        gil: 12,
        tapes: 0,
        tapeId: false
    }],
    tapeChoices: [{
        id: 'groceryYes',
        description: 'Yes',
        result: `
        "This place stinks but it's raining outside, so here I am. I found some food that hasn't gone bad, so I've got a full belly for the first time in six weeks. I think it's definitely a myth that Twinkies  last forever, but they sure do taste good right now. I'm getting close to the coast now. I still haven't seen anyone but...I have to have hope, right? The last time I saw my mother she gave me a big hug and told me I was going to do great and that I needed to be sure to call her every day. But...I didn't. I was busy, at least I thought I was busy. Was that really the last time I heard my mom's voice? Just like that? I'll be back on the road tomorrow morning. The air is starting to clear now. I can at least tell when it's daylight. It still smells like smoke out there. Maybe the rain will help with that, though."
        `,
        hp: 0,
        gil: 0,
        tapes: 1
    }, {
        id: 'groceryNo',
        description: 'No',
        result: `Who cares what it says? The merchant will love this!`,
        hp: 0,
        gil: 20,
        tapes: 0
    }]
};
    
const coast = {
    id:'coast',
    title:'The Coast',
    map: {
        marginTop: '420px',
        marginLeft: '210px'
    },
    image:'/beach2.jpg',
    description: `You smell salt on the wind a full two miles before you break through a treeline and there it is: the coast. You've never seen water so blue as it laps against the endless sand stretched in either direction. There are ruins of homes nearby and a stretch of tidepools that shimmer in the sunlight. What do you do?`,
    choices: [{
        id: 'sand',
        description: 'Play in the Sand!',
        resultImage: '/sand.jpg',
        result: `You excitedly romp through the sand, dropping onto your back and rolling around in it. Only  aRG. IT GETS E V E R Y W H E R E. -7 HP`,

        hp: -7,
        gil: 0,
        tapes: 0,
        tapeId: false
    }, {
        id: 'shells',
        description: 'Explore the Tidepools',
        resultImage: '/shell2.jpg',
        result: `You go to look at the tide pool. It's teeming with life! You play with a few snails and fish and end up collecting a bunch of beautiful shells! The merchant will love this! +7 Gil`,
        hp: 0,
        gil: 7,
        tapes: 0,
        tapeId: false
    }, {
        id: 'house',
        description: 'Explore House Ruins',
        resultImage: '/recorder1.png',
        result: `You enter the house ruins. Things are mostly decayed, except for a few photos of a happy family lining the walls. In the kitchen, you find a recorder on the countertop. It looks like it works! Do you listen?`,
        hp: 0,
        gil: 0,
        tapes: 0,
        tapeId: true
    }],
    tapeChoices: [{
        id: 'coastYes',
        description: 'Yes',
        result: `
        "Well, I...I made it. I walked for two months to get here and...and there's people here. I haven't seen anyone in so long, I was so worried..."
        "But my parents are...dead. My parents are dead. They didn't make it here before the blast. I've got to let them go. Like I let Moira go. I have to let them go."
        "This group I found, these survivors, they're heading South in the next few days. There's a colony down there and I can put in the work. We have to rebuild, somehow. Make something out of what's left, you know?"
        "This is going to be my last message. If you're listening to this, whoever you are, just know...just know that I was here. I laughed, and I raged, and I cried in this house. I was real. I was here."
        "Goodbye. And good luck."
        `,
        hp: 0,
        gil: 0,
        tapes: 1
    }, {
        id: 'coastNo',
        description: 'No',
        result: `Who cares what it says? The merchant will love this!`,
        hp: 0,
        gil: 20,
        tapes: 0
    }]
};

const quests = [
    subway,
    mall,
    cabin,
    groceryStore,
    coast
];

export default quests;