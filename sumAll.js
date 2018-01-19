// FCC - intermediate algorithm challenge 1
// sum all numbers in a range
// will add a test later
function sumAll(arr) {
  var a,b,sum = 0;

  a = arr.reduce((a,b) => Math.min(a,b));
  b = arr.reduce((a,b) => Math.max(a,b));

  for (var i = a; i <= b; i++){
    sum += i;
  }

  return sum;
}
