/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/

//родительская ф-ция бытовая техника, с названием и мощьностью
function Appliances(name, power) {
  this.name = name;
  this.power = power;
}

//записываем в прототип метод включения компьютера
Appliances.prototype.turnOnComputer = function (power) {
  if (power === 180) {
    console.log("Сomputer is on!");
  } else {
    console.log("Low power, start impossible!");
  }
};

//записываем в прототип метод включения лампы
Appliances.prototype.turnOnLamp = function (power) {
  if (power === 60) {
    console.log("Lamp is on!");
  } else {
    console.log("Low power, start impossible!");
  }
};

// cоздаем экземпляр объекта имеющего конструктор
const computer = new Appliances("personal computer", "180 vt");
const lamp = new Appliances("desk lamp", "60 vt");

// выводим результат, каждый экземпляр имеет свои св-ва и метод запуска
console.log(computer);
console.log(lamp);
computer.turnOnComputer(180);
lamp.turnOnLamp(60);
