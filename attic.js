const subway = {
    id:'subway',

    title:'Strange Cave',

    map: {
        marginTop: '120px',
        marginLeft: '90px'
    },

    image:'/subway1.jpg',

    sound:'',

    description: `You descend into the dimly lit cave, moving slowly to give your eyes a change to adjust to the darkness. The walls are lined with slick stones arranged in rectangle patterns. They feel cool against your fingertips. A large crevice in the middle of the cave is dominated by a twisted metal structure that emerges from a tunnel. An ancient home, perhaps? Or was it what the elders called "automobiles"? Whatever its name, it could contain a relic. There is a large pile of rubble to the north where part of the ceiling has collapsed. Near the entrance is a trash receptacle turned on its side. What do you do?`,

    choices: [{

        id: 'rubble',

        description: 'Explore Rubble Pile',

        resultImage: '/dog1.jpg',

        result: `You approach the rubble pile and begin sifting through stones. The stones are heavy and you're so distracted with your work that you don't hear the WILD DOG sneak up behind you. It lunges, sinking its teeth deep into your calf! With a yell, you swing wide with a rock in your hand. It connects with the dog's head, dazing it long enough for you to escape. You return to the merchant empty-handed, but alive.`,
        hp: -14,
        gil: 0
    },
    {
        id: 'subwayCar',

        description: 'Examine Metal Structure',

        resultImage: '/recorder1.png',

        result: `You enter the mangled structure, the floor beneath you creaking as you step inside. There are cracked and collapsing seats lining either side of the structure. Tucked neatly under a nearby row, you find a wad of fabric. You unfurl it, revealing a moth-eaten blanket protecting a...recorder? And it looks like it still works! Should you press play?`,
        // tapeChoice here
        hp: 0,
        gil: 0
    },
    {
        id: 'trashCan',
        description: 'Explore Trash Can',
        resultImage: '/phone3.jpg',
        result: `The trash can is full of soggy paper, some strange-colored mold, and a gooey substance you don't think you'll ever get out from under your fingernails. You kick the trash can in frustration and, lo! Underneath it is a small relic! You quickly leave, excited to show the merchant your new find!`,
        hp: 0,
        gil: 12
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

        result: `Strangely humanoid figures occupy the space, draped in various colored fabrics. Most of what you find is too disintegrated to be useful, but you find a case in the back full of sturdy fabric! The merchant will be so pleased!`,

        hp: 0,
        gil: 10
    }, {
        id: 'foodCourt',

        description: 'Follow Sweet Smell',

        resultImage: '/rat1.jpg',

        result: `You follow the sweet smell into a cavernous plaza ringed with small shops. There are faded photos of what looks like...food? Nothing that you've ever tasted. The smell is emanating from a shop with a circular logo over the top. You approach the counter and lean over. The ground is littered with what looks like fine, white sand. You're considering jumping over to inspect further when there's a series of loud squeaks nearby. You move quickly, but not quickly enough: soon there's a torrent of fat rats pouring out of every crevice, scrabbling over the counter, and heading straight towards you. You take off running, relics be damned! The merchant will be unhappy but, except for a rough tumble you took on your way out, you've escaped relatively unharmed.`,

        hp: -3,
        gil: 0
    }, {
        id: 'pharmacy',

        description: 'Explore Medicine Store',

        resultImage: '/recorder1.png',

        result: `The elders told you that the plus symbol meant medicine and medicine could definitely come in handy. Most of the aisles here are empty, so you enter the backroom. This place is also cleaned out except for a wad of rotten cloth in the corner and a lonely metal desk set against the wall. You check the drawers and find a recorder! And it still works! Listen to it?`,
        //tapeChoice
        hp: 0,
        gil: 0
    }]
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
        //tapeChoice
        hp: 0,
        gil: 0
    }, {
        id: 'well',

        description: 'Explore Well',

        resultImage: '/well2.jpg',

        result: `You lean over the stone wall of the well, looking down, down, down. The rope is long gone, the metal bucket floating in the water thirty feel below. You're wondering if you should go find a container to bring some water back to the merchant when the stone suddenly shifts beneath your palms and you topple forward! You're falling head-first, trying desperately to right yourself when CRACK. Your head connects with the bucket.`,

        hp: -50,
        gil: 0
    }, {
        id: 'livingArea',

        description: 'Explore Living Area',

        resultImage: '/cabin1.jpg',

        result: `There is a lot of junk here and the ceiling is mostly fallen though. You happen upon a bag in a corner and, after rifling through it, you find two relics! Behind the bag you find something even more useful: an axe! You hurry back to show the merchant. They're going to be so pleased!`,

        hp: 0,
        gil: 20
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

    sound:'',

    description: `You enter a cavernous shop with twisting aisles that have half-collapsed on top of each other. The merchant told you that this place used to be where people bought food in the Beforetimes, but you can't believe that this place could possibly contain enough food to fill it entirely. There's a large room in the back loaded with boxes and a separate room in an upstairs portion that overlooks the aisles below. Where do you go?`,

    choices: [{
        id: 'aisles',

        description: 'Explore Aisles',

        resultImage: '/twinkie1.jpg',

        result: `Most of the aisles have been cleaned out, but you find a box of some spongey, yellow treat in the very back corner of the shop. You tentatively sniff it, wondering if something could possibly have lasted this long. With a shrug you take a bite and--UGH. GROSS. You throw up everything and are too nauseous to keep searching. You return to the merchant empty-handed and empty-stomached.`,

        hp: -8,
        gil: 0
    }, {
        id: 'managerOffice',
        description: 'Explore Upstairs',

        resultImage: '/recorder1.png',

        result: `You creep up the stairs, wondering what kind of overlord sat up here watching the people below. The space is disappointing; there's just a few desks loaded with papers and a depressing figurine with a wobbly head. You search the small trash can beside the desk and find a recorder! And it looks like it works! Do you listen?`,
        //tapeChoice
        hp: 0,
        gil: 0
    }, {
        id: 'backRoom',

        description: 'Explore Back Room',

        resultImage: '/gameCube',

        result: `Most of the boxes are full of food that is long-rotten or nothing of use. But in the corner you find a strange cube-shaped relic! You rush back to the merchant. They're going to be so pleased!`,

        hp: 0,
        gil: 12
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

    sound:'',

    description: `You smell salt on the wind a full two miles before you break through a treeline and there it is: the coast. You've never seen water so blue as it laps against the endless sand stretched in either direction. There are ruins of homes nearby and a stretch of tidepools that shimmer in the sunlight. What do you do?`,

    choices: [{
        id: 'sand',

        description: 'Play in the Sand!',

        resultImage: '/sand.jpg',

        result: `You excitedly romp through the sand, dropping onto your back and rolling around in it. Only  aRG. IT GETS E V E R Y W H E R E.`,

        hp: -7,
        gil: 0
    }, {
        id: 'shells',

        description: 'Explore the Tidepools',

        resultImage: '/shell2.jpg',

        result: `You go to look at the tide pool. It's teeming with life! You play with a few snails and fish and end up collecting a bunch of beautiful shells! The merchant will love this!`,

        hp: 0,
        gil: 7
    }, {
        id: 'house',

        description: 'Explore House Ruins',

        resultImage: '/recorder1.png',

        result: `You enter the house ruins. Things are mostly decayed, except for a few photos of a happy family lining the walls. In the kitchen, you find a recorder on the countertop. It looks like it works! Do you listen?`,
        //tapeChoice
        hp: 0,
        gil: 0
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