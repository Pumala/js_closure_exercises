// The following code implements a battleship board. The fire function takes a row and col and returns 'Hit!' or 'miss' depending on if it hit a part of the ship. The problem is we don't want the enemy to see our board! So we need to hide the board variable within a closure, but still expose the fire function to the outside. Use the module pattern to do this.

function fire() {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];
  function openFire(row, col) {
    if (board[row][col] === 'o') {
      board[row][col] = 'x'
      return 'Hit!'
    } else {
      return 'Miss'
    }
  }
  return openFire;
};


var game1 = fire();

console.log(game1(0, 1));
console.log(game1(0, 3));

// to play another game, call fire again
var game2 = fire();

console.log(game2(0, 1));
console.log(game2(0, 3));




// var battleship = function fire(row, col) {
//   var board = [
//     ['o', ' ', 'o', 'o', ' '],
//     ['o', ' ', ' ', ' ', ' '],
//     ['o', ' ', 'o', 'o', 'o'],
//     ['o', ' ', ' ', ' ', ' '],
//     [' ', ' ', 'o', ' ', 'o'],
//     [' ', ' ', 'o', ' ', 'o']
//   ];
//   function openFire() {
//     if (board[row][col] === 'o') {
//       board[row][col] = 'x'
//       return 'Hit!'
//     } else {
//       return 'Miss'
//     }
//   }
//   return openFire;
// }();
//
// console.log(battleship(0, 1));








// console.log(fire(0, 1))


// function fire(row, col) {
//   if (board[row][col] === 'o') {
//     board[row][col] = 'x'
//     return 'Hit!'
//   } else {
//     return 'Miss'
//   }
// }
//
// console.log(fire(0, 1))
