let n = parseInt(prompt("Введіть натуральне число: "));
let factorial = 1;

// перевірка, що n - ціле натуральне число
if (n < 0 || isNaN(n) || n % 1 != 0) {
  console.log("Введіть ціле невід'ємне число!");
} else {
  // обчислення факторіала числа n
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(`Факторіал числа ${n} дорівнює ${factorial}`);
}