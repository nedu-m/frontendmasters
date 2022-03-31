//Game exercise

var game = {};

//Character declarations
game.characters = [
  "Oslwad",
  "Michael",
];

//Weapon 
game['weapon'] = [
{type: "Knife", location: 'Pocket'},
  {type: "Shotgun", location: 'Drawer'},
  {type: "Wire", location: 'Table'}
];


//Crime scene
game['rooms'] = ["Parlor", 
  "Boat", 
  "Road"
];

//Pushing to array
game.characters.push("Mr. Nelson");
game.characters

//Suspect & weapon used
const sus = {
  name: 'Rusty',
  location: 'Kitchen',
  weapon: 'candleStick'
};

//Function
function susWeaponLocation({weapon, location}) {
  return weapon + ' in ' + location;
}
//Array declaration
var susp = [
    {
      name: "Michael",
      weapon: "Shotgun"
    }, {
      name: "Oswald",
      weapon: "Wire"
    }
  ]


//Array destructure
var [firstSus, secondSus] = susp
var [{weapon: weapon1}, {weapon: weapon2}] = susp;


//Looping exercise
const game = {
  'suspects': [
    {
      name: "Michael",
      weapon: "Shotgun"
    }, {
      name: "Oswald",
      weapon: "Wire"
    }
  ]
}

var gameLoop = function() {
  for (var i = 0; i < game.suspects.length; i++) {
    console.log(`Outer loop `)
    for (var key in game.suspects[i]) {
      console.log(`inner loop`)
      if (game.suspects[i] [key] === "Michael") {
        console.log(`Found 'em `)
      } else {
        console.log(`Next time`)
      }
    }
  }
}

gameLoop()

//List transformations
function CreateSuspects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log("my name is", name);
    }
  };
};

var suspects = ['Miss Scarlet', 'Col Black', 'Mr White'];

var suspectsList = [];

for(var i = 0; i < suspects.length; i++) {
  suspect = CreateSuspects(suspects[i])
  suspectsList.push(suspect)
}

suspectsList