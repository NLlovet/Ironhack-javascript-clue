// ITERATION 1
// ENVELOPE FOR END GAME
let envelope = {
    susName: null,
    susWeapon: null,
    susRoom: null
}
// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Nurse',
        lastName: 'White',
        occupation: 'servant',
        age: 40,
        description: 'Works for victim',
        image: undefined,
        color: 'red'
    } ,
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 26,
        description: null,
        image: 'blank',
        color: 'green'
    } , 
    {
        firstName: 'Colonel',
        lastName: 'Mustard',
        occupation: 'Army general',
        age: 31,
        description: null,
        image: undefined,
        color: 'yellow'
    },
    {
        firstName: 'Professor',
        lastName: 'Plum',
        occupation: 'Professor',
        age: 64,
        description: null,
        image: undefined,
        color: 'purple'
    },
    {
        firstName: 'Mrs.',
        lastName: 'Peacock',
        occupation: 'Baker',
        age: 42,
        description: null,
        image: undefined,
        color: 'blue'
    },
    {
        firstName: 'Mr.',
        lastName: 'White',
        occupation: 'Investor',
        age: 65,
        description: null,
        image: undefined,
        color: 'white'
    }
];

// Rooms Collection
const roomsArray = [
    {room1: 'Kitchen'},
    {room2: 'Ballroom'},
    {room3: 'Conservatory'},
    {room4: 'Dining Room'},
   { room5: 'Cellar'},
    {room6: 'Billard Room'},
    {room7:'Library'},
    {room8:'Lounge'},
    {room9:'Hall'},
    {room10:'Study'},
    {room11:'Bedroom'},
    {room12:'Living room'},
    {room13:'Bathroom'},
    {room14:'Stairs'},
    {room15:'Attic'},
];

// Weapons Collection
const weaponsArray = [
    {
        name: 'Crowbar',
        weight: 5
    },
    {
        name: 'Axe',
        weight: 7
    },
    {
        name: 'Knife',
        weight: 1
    },
    {
        name: 'poker',
        weight: 3
    },
    {
        name: 'gun',
        weight: 4
    },
    {
        name: 'screwdriver',
        weight: .5
    },
    {
        name: 'poison',
        weight: 0
    },
    {
        name: 'piano',
        weight: 120
    },
    {
        name: 'sledgehammer',
        weight: 10
    },
    {
        name: 'wire',
        weight: 2
    }

];

// ITERATION 2
    //picks random thing
    function selectRandom (array) {
    return array[Math.floor(Math.random() * 15)];
    }

    //makes random cards
    function pickMystery () {
    envelope.susName = selectRandom(suspectsArray);
    envelope.susWeapon = selectRandom(weaponsArray);
    envelope.susRoom = selectRandom(roomsArray);
    }

// ITERATION 3
