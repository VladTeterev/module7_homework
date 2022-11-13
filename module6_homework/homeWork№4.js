function getInterval(
  firstNum = prompt("Введите первое число!"),
  secondNum = prompt("Введите второе число!")
  // запросить два числа в качестве аргумента
) {
  const intervalId = setInterval(function () {
    // задать колбэк с условием
    console.log(Number(firstNum));
    if (firstNum == secondNum) {
      clearTimeout(intervalId);
      // остановить интервал на этапе второго числа
    } else {
      firstNum++;
    }
  }, 1000);
  // время интервала
}

getInterval();
