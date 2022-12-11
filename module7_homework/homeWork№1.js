/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/
const userInfo = {
  name: "Vasya",
  surname: "Pupkin",
  age: 34,
  "position developer": true,
};
//   создал объект, и заполнил свойствами

const showOwnProperty = function (obj) {
  // объявил ф-цию которая выводит только собственные св-ва объекта
  for (let key in obj) {
    if (userInfo.hasOwnProperty(key)) {
      // условие для вывода собственных св-в
      console.log(key + ": " + userInfo[key]);
    }
  }
};
showOwnProperty(userInfo);
//   вызов ф-ции и предача объекта в качестве аргумента
