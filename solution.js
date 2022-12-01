// task 1
let Ocuurrence = "Hello World";
let firstOcuurrence = Ocuurrence.indexOf("World");
console.log(firstOcuurrence);

// task 2
let Ocuurrence1 = "Hello World";
let replaced = Ocuurrence1.replace("World","Universe");
console.log(replaced);

// task 3
const Ocuurrence2 ="Hello World";
const upper = Ocuurrence2.toUpperCase();
console.log(upper);

// task 4
const lower = Ocuurrence2.toLocaleLowerCase();
console.log(lower);

// task 5
const1 ="Hello";
const2 = "World";
constJoined = const1.concat(const2);
console.log(constJoined);
 
// task 6
const cities = "Rome, Berlin, Paris";
const out = cities.slice(6,12);
console.log(out);
const final = cities.slice(6,19) .replace("," ," ");
console.log(final)

// task 7
const a = "John";
const b = "Joe";
const c = "Jack";
console.log(`"Their names were: ${a} , ${b} and ${c} "`);

// task 8
const line = "whatTheOMGnicCAGEtadahheHIDINGinHere";
const position = line.indexOf("nicCAGE");
console.log(position);

// task 9
console.log(`We cannot use negative values width "substring()" !!!`)

// task 10
const planet = "earth";
const Upper = planet .charAt(0) .toUpperCase(0) .concat(planet.slice(1));
console.log(Upper);

// task 11
let testString2 = " I love this stuff ";
console.log(testString2.trim());
