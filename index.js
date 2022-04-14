//Used underscore.js to implement the underscore methods
var _ = require('underscore');

//Setting console.log function
const log = (args) => console.log(args)

//_.MAP EXERCISE
_.map = function(list, callback) {
  var storage = [];

  for (var i = 0; i < list.length; i++ ) {
    storage.push(callback(list[i], i, list));
  }

// _.each(list, function(v, i, list) {
//  storage.push(callback(v, i, list));
//});

  return storage;
}

var mapper = _.map([1,2,3], function(val) {
  return val + 1;
})

//mapper;

_.filter = function(arr, callback) {
  //create a new storage
  const suspects = [];
  //loop through arr
  for (let i = 0; i < arr.length; i++) {
    //check if callback returns true
    if (callback(arr[i], i, arr) === true) {
    //push into the arr
      suspects.push(arr[i])
    }
  }
  //return arr
  return suspects
}

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

var listSuspects = _.filter(videoData, function(suspectObject) {
    return suspectObject.present
})

//listSuspects;

const theSuspects = _.map(listSuspects, sus => {
  return sus.name;
})

//theSuspects;

//Tuple - two arrays that contains two values
const createTuple = (a, b, c, ...d) => {
  return [[a,c], [b,d]];
}

//createTuple('it', 'be', 'could', 'anyone', 'no one');

//createTuple;

//Array-like Objects
const constructArr = function() {
  const arr = Array.from(arguments);
  arr.push('the billards room');
  return arr.join(' ');
};
//constructArr('was', 'it', 'in')

//constructArr;

//High-order functions
inc = n => n + 1

sq = n => n * n

//solve = (n, func) => { return func(n) }


const ifElse = (condition, isTrue, isFalse, ...args) => {
  return condition ? isTrue(...args) : isFalse(...args);
}
//ifElse(true, console.log, console.log, 'it', 'be', 'could', 'anyone', 'no one');

//Reduce implementation
const reduce = function (list, cb, initial = list[0]) {
  let accumulator = initial;
  for (let i = 0; i < list.length; i++) {
    accumulator = cb(list[i], accumulator);
  }
  return accumulator;
}

//reduce([1,2,3,4], (acc, val) => acc + val);

//Closure
const myAlert = () => {
  const x = 'Found the clue!';
  let count = 0;
  const alerter = () => {
    console.log(`${x} ${++count}`);
  };

  return alerter;
  //setTimeout(alerter, 1000);
  //console.log('I found the clue!');
};

//myAlert();
const funcalert = myAlert();
//const funcalert2 = myAlert();
//funcalert(); // I found the clue! 1

const newClue = (suspect) => {
  const length = suspect.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

const suspectUsed1 = newClue('Rusty');
//suspectUsed1('Knife');

function countClues() {
  let n = 0;
  return {
    count: () => n++,
    reset: () => n = 0
  };
};

counter = countClues();
counter1 = countClues();
//log(counter.count());
//log(counter1.count());


const findSomeone = () => {
  const speak = () => {
    log(who);
  };
  let who = 'Mrs. White';

  speak();
};

const someoneSpeaks = findSomeone;
//log(someoneSpeaks());

const makeTimer = () => {
  let timeElapsed = 0;
  
  const stopWatch = () => { return timeElapsed };

  const increased = () => timeElapsed++;

  setInterval(increased, 1000);

  return stopWatch;
};

let timer = makeTimer();
//timer()

//Currying
const curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return (arg3) => {
        return fn(arg, arg2, arg3);
      } 
    }
  }
}

var abc = function (a, b, c) {
  return [a, b, c];
};

var curried = curry(abc)

//log(curried(1)(2)(3))

//Compose
const compose = (fn, fn2) => {
  return (arg) => {
    const result = fn2(arg);
    return fn(result);
  };
};

const consider = (name) => {
  return `${name} is a suspect`;
};

const exclaim = (statement) => {
  return `${statement.toUpperCase()}!`;
};

const blame = compose(consider, exclaim);

// blame('Rusty');



