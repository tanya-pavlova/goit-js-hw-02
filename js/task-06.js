let input;
let total = 0;
const numbers = [];

while (input !== null) {
    input = prompt('Введите число:');

    isNaN(input) 
    ?  alert('Было введено не число, попробуйте еще раз')
    : numbers.push(Number(input));
}

for (const number of numbers) {
    total += number;
}

  alert(`Общая сумма чисел равна ${total}`);

