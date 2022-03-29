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

