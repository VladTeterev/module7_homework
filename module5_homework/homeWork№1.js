let value = prompt("Введите значение");
let result = +value;
if (typeof result == "number" && !isNaN(result)) {
  if (result % 2 == 0) {
    console.log("Четное");
  } else {
    console.log("Нечетное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}
