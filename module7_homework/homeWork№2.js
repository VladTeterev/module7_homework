/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.*/
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
//   создал объект, и заполнил свойствами
function getVerify(name, obj) {
  // объявил ф-цию которая проверит есть ли у переданного объекта свойство с данным именем
  if (name in obj) {
    // условие проверки
    return console.log(true);
  } else {
    return console.log(false);
  }
}
getVerify("year", myCar);
// вызов ф-ции и предача необходимых аргументов
