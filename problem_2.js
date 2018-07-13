let i = 1;
let j = 2;
let result = 0;
let swap;

while (j < 4000000) {
  if (j % 2 === 0) {
    result += j;
  }
  swap = j;
  j = j + i;
  i = swap;
}

console.log(result);
