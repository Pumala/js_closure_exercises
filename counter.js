// Make a counter function that returns a function that returns a successive number each time it is called.

function count1() {
  var counter = 0;
  function count2() {
    return counter += 1;
  }
  return count2;
}

var counter = count1();
var counter2 = count1();

console.log(counter());
console.log(counter2());





// function secret() {
//   var password = 'open sesame';
//   function reveal() {
//     return password;
//   }
//   return reveal;
// }
//  var password = secret();
//  console.log(password());
