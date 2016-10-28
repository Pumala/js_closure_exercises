// Allow the caller of counter to initialize the count to the first argument that's passed in.

function count1(times) {
  var counter = times - 1;
  function count2() {
    return counter += 1;
  }
  return count2;
}

var counter = count1(5);
var counter2 = count1(5);

console.log(counter());
console.log(counter2());
