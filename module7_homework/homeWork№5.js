/*Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.*/

// создаем родительский класс с методами и параметрами приборов
class Appliances {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  computerStart(power) {
    if (power === 180) {
      console.log("Сomputer is on!");
    } else {
      console.log("Low power, start impossible!");
    }
  }

  lampStart(power) {
    if (power === 60) {
      console.log("Lamp is on!");
    } else {
      console.log("Low power, start impossible!");
    }
  }
}

//  Устанавливаем делегирующую связь между протатипами функций, используем ключевые слова extends и super
class Computer extends Appliances {
  constructor() {
    super("personal computer", "180 vt");
  }
  turnOnComputer(power) {
    return super.computerStart(power);
  }
}

class Lamp extends Appliances {
  constructor() {
    super("desk lamp", "60 vt");
  }
  turnOnLamp(power) {
    return super.lampStart(power);
  }
}

const computer = new Computer();
const lamp = new Lamp();

// выводим результат
console.log(computer);
console.log(lamp);
computer.turnOnComputer(180);
lamp.turnOnLamp(60);
