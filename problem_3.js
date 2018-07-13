let number = 600851475143;
let sqrtNb = Math.sqrt(number);
let primeNumbers = [];

for (let i = 3; i < sqrtNb; i += 2) {
  if (!primeNumbers.some(pn => i % pn === 0) && number % i === 0) {
    primeNumbers.push(i);
    console.log(i);
  }
}

console.log(primeNumbers.reduce((res, val) => res*val, 1));
