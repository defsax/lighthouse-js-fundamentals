function isOdd(num){
  if(num % 2 === 0){
    return false;
  }
  else
    return true;
}

console.log("3 is odd: " + isOdd(3));
console.log("6 is odd: " + isOdd(6));
console.log("5 is odd: " + isOdd(5));
console.log("88 is odd: " + isOdd(88));
