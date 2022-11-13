function getSum(numOne = 3) {
  // ф-ция принимает число как аргумент
  return getNumTwo();
  // возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.
  function getNumTwo(numTwo = 5) {
    const sum = numOne + numTwo;
    console.log(sum);
    // вывести результат в консоль
  }
}
getSum();
