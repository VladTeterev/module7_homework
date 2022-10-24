const arr = [1, 1, 1, 1, 7];
let ifEqual = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) {
    ifEqual = false;
  }
}
console.log(ifEqual);
