let myMap = new Map();
myMap.set("1", 123);
myMap.set("str", "8910");
myMap.set(true, 456);
myMap.set(8, 1235654);

for (let item of myMap) {
  console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}
