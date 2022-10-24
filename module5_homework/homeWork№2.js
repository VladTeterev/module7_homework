let x = true;
let typeOfX = typeof x;
if (typeOfX === "number") {
  console.log("Число");
} else if (typeOfX === "string") {
  console.log("Строка");
} else if (typeOfX === "boolean") {
  console.log("Логический тип данных");
} else {
  console.log("Тип x не определён");
}
