let randomNum = prompt("Введите любое число (но не более 1000)!");
// запрос рандомного числа
let value = Boolean(value);
// преобразование переменной в булевый тип
function getResult() {
  if (randomNum <= 1000 && !isNaN(randomNum) && randomNum != 0) {
    // условие: значение <= 100, является числом и не равно нулю
    for (let i = 2; i <= randomNum || randomNum >= 1; i++) {
      // цикл с определением простого либо составного числа
      if (randomNum % i == 0) {
        value = true;
      } else {
        value = false;
      }
      if (value == true) {
        return (value = `Число ${randomNum} простое!`);
      } else if (value == false) {
        return (value = `Число ${randomNum} составное!`);
      }
    }
  } else if (randomNum == 0) {
    // в случае не выполнения условий ввода значения
    return (value = `Число ${randomNum} не является составным либо простым!`);
  } else {
    return (value = `Данные ${randomNum} не верны!`);
  }
}
console.log(getResult());
// вызов функции в консоль
