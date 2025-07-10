let arr = ["Boris", "Anton", "Eugene", "Pasha", "Zhenya", "Nikitas", "Viki"];
const [, person1, , person2] = arr;
console.log("Person1", person1);
console.log("Person2", person2);
// console.log('Person3', person3)
const [, dad, son, ...family] = arr;
//...rest - собирает все остальное
console.log("family", family);

const classroom = {
  teacher: {
    name: "Eugene",
    age: 22,
  },
  students: ["Boris", "Anton", "Eugene", "Pasha", "Zhenya", "Nikitas", "Viki"],
  tech: {
    computer: {
      firm: "LOC",
    },
    tv: {
      firm: "Samsung",
    },
  },
};

const {
  tech: { computer: technica },
  students: [borisName],
} = classroom;

console.log("technica", technica);
console.log("borisName", borisName);

const { teacher, students: people, cookbook = 100 } = classroom;

console.log("teacher", teacher);
console.log("people", people);
console.log("cookbook", cookbook);

const [, , eugene] = people;

console.log(eugene);

function add(a, b = 0) {}

add(1);

const result = {
  data: {
    id: 0,
    name: "Bitch",
  },
};

// const person = {
//         id: 0,
//         name: "Bitch"
//     }

const { data: person } = result;
console.log(person);

let a = 10;
let b;

[a, b] = [3, 9, 7];

console.log(a);
console.log(b);

let value1 = 10;
let value2 = 15;

//поменять значения местами (но не использовать числа напрямую)

let c = value2; //15
value2 = value1; //10
value1 = c[(value1, value2)] = //15
  [value2, value1]; //[15, 10]

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false
