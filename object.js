//Объекты
//https://learn.javascript.ru/object

let person = {
  //объект
  name: "Eugene",
  age: 22,
  1: 4,
  education: "GrSU",
  "has children": false,
};
console.log(person.age); // получение значения по ключу
console.log(person["age"]); // получение значения по ключу
person.health = 80; // перезаписать значение / добавить свойство
console.log(person);
delete person.health; // удалить пару ключ-значение (свойство)
console.log(person["1"]);

console.log(Object.keys(person)); //получить массив ключей
console.log(Object.values(person)); //получить массив значений
console.log(Object.entries(person)); //получить массив свойств (вложенный в массив массив)

console.log("age" in person);
console.log("pasha" in person);
console.log(person);

// let codes = {
//   "49": "Германия",
//   "41": "Швейцария",
//   "44": "Великобритания",
//   // ..,
//   "1": "США"
// };

// for (let code in codes) {
//   alert(code); // 1, 41, 44, 49
// }

// let codes = {
//   "+49": "Германия",
//   "+41": "Швейцария",
//   "+44": "Великобритания",
//   // ..,
//   "+1": "США"
// };

// for (let code in codes) {
//   alert( +code ); // 49, 41, 44, 1
// }

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// let empty = {};

// function isEmpty (obj) {
//     // return Object.values(obj).length === 0;
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty(user));
// console.log(isEmpty(empty));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum)

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric (obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(menu);

// console.log(menu)

// let user1 = {
//   name: "John",
//   age: 0
// };

// if ("age" in user1) { // проверка на наличие свойства
//     console.log("YESSSS")
// }

// let example = [
//     {
//         hasMoney: true,
//         hasHealth: false,
//         number: 1,
//     },
//     {
//         hasMoney: false,
//         hasHealth: false,
//         number: 3,
//     },
//     {
//         hasMoney: true,
//         hasHealth: true,
//         number: 10,
//     }
// ];

// console.log(example.map(item => item.number *= 10))
// console.log(example.filter(item => item.hasMoney === true))

// let userFind = [
// {
//   name: "John",
//   age: 30,
//   surname: "HJ"
// },
// {
//   name: "Bob",
//   age: 21
// },
// {
//   name: "Anna",
//   age: 19,
//   surname: "HJ",
//   region: 'Europe'
// }
// ]

// let resultFind = userFind.find(item => item.name == "Bob");

// console.log(resultFind);

// userFind = userFind.filter((item) => item.name !== "Anna") //получаем все элементы, не содержащие Anna

// console.log(userFind)

// console.log(userFind.sort((a, b) => {
//     const aRes = Object.keys(a).length;
//     const bRes = Object.keys(b).length;
//     //return aRes-bRes;
//     if (aRes > bRes) {
//         return 1;
//     } else if (aRes < bRes) {
//         return -1;
//     } else return 0;
// }))

// console.log(userFind.sort((a, b) => {
//     const aRes = a.age;
//     const bRes = b.age;
//     //return aRes-bRes;
//     if (aRes > bRes) {
//         return 1;
//     } else if (aRes < bRes) {
//         return -1;
//     } else return 0;
// }))

//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }
//   let countPos = 0;
//   let sumNeg = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       countPos++;
//     } else if (input[i] < 0) {
//       sumNeg += input[i];
//     }
//   }
//   return [countPos, sumNeg];
// }

// function calculate() {

//     let numb_1 = +prompt('Введите первое число: ');
//     let numb_2 = +prompt('Введите второе число: ');
//     let operator = prompt('Введите оператор: +; -; *; /; %; **');
//     let result ='';

//     if (isNaN(numb_1) || isNaN(numb_2)) {
//         result = 'Пожалуйста, введите корректные числа';
//         return result;
//     };

//     switch (operator) {
//         case '+':
//             result = numb_1 + numb_2;
//             break;
//         case '-':
//             result = numb_1 - numb_2;
//             break;
//         case '*':
//             result = numb_1 * numb_2;
//             break;
//         case '/':
//             if (numb_2 === 0) {
//                 return 'Ошибка: деление на ноль!';
//             } else {
//                 result = numb_1 / numb_2;
//             };
//             break;
//         case '%':
//             if (numb_2 === 0) {
//                 return 'Ошибка: деление на ноль при вычислении остатка!';
//             } else {
//                 result = numb_1 % numb_2;
//             };
//             break;
//         case '**':
//             result = numb_1 ** numb_2;
//             break;
//         default:
//             return 'Неизвестный оператор';
//     };

//     result = `Результат: ${numb_1} ${operator} ${numb_2} = ${result}`;
//     return result;
// }

// console.log(calculate());

// let final = +prompt("Ввод числа:");
// start:
// for(let i = 2; i <= final; i++){
//     for(let j = 2; j <= Math.sqrt(i); j++){
//         if (i % j === 0){
//             continue start;
//         }
//     }
//     console.log(i);
// }

function isOpposite(s1, s2) {
  if (s1 === "" && s2 === "") return false;
  if (s1.length !== s2.length) return false;
  //ab
  //Ab
  for (let index = 0; index < s2.length; index++) {
    if (
      s1[index].toLowerCase() === s2[index].toLowerCase() &&
      s1[index] !== s2[index]
    ) {
      continue;
    }
    return false;
    //ab
    //Ab
  }
  return true;
}

console.log(isOpposite("ab", "AB"));
