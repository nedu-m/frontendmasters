var _ = require('underscore');

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

var s = _.map([1,2,3], function(val) {
  return val + 1;
})

s;

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

listSuspects;

const theSuspects = _.map(listSuspects, sus => {
  return sus.name;
})

theSuspects;

//Tuple - two arrays that contains two values
const createTuple = (a, b, c, ...d) => {
  return [[a,c], [b,d]];
}

createTuple('it', 'be', 'could', 'anyone', 'no one');

createTuple;

//Array-like Objects
const constructArr = function() {
  debugger
  const arr = Array.from(arguments);
  arr.push('the billards room');
  return arr.join(' ');
};
constructArr('was', 'it', 'in')

constructArr;

//High-order functions
inc = n => n + 1

sq = n => n * n

solve = (n, func) => {return func(n)}
