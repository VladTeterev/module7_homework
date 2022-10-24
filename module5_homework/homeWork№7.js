let x = [1, 5, 3, 88, 3, 11, 3, 2];
let even = 0;
let odd = 0;
for (let i = 0; i < x.length; i++) {
  if (typeof x[i] === "number") {
    if (x[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
}
console.log(even, odd);
