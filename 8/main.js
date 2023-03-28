let base = prompt("Введіть число:");
let exponent = prompt("Введіть степінь:");

let result = 1;

if(exponent > 0) {
  for(let i = 0; i < exponent; i++) {
    result *= base;
  }
} else if(exponent < 0) {
  for(let i = 0; i < -exponent; i++) {
    result /= base;
  }
} else {
  result = 1;
}

console.log(result);