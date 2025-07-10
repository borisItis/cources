let group = ["Boris", "Viki"];
group.unshift("P", "A"); //добавляет в начало
//group.shift() //убирает из начала
console.log(group);
group.push("N", "V", "N"); //добавить в конец
// group.pop() //убирает из конца массива
console.log(group);
// ['P', 'A', 'Boris', 'N', 'V', 'N']

group[0] = "N"; //перезапись
group[5] = "P";

//Получение последнего элемента
group[group.length - 1];
group.at(-1);
// P

//Ссылочный тип
let a = [1];
let b = [1];
a == b;
//false - разное место в памяти
let c = a;
c === a;
//true - ссылается на одно и то же место в памяти

let names = ["A", "j", "qfi", "avj"];
for (let i = 0; i < names.length; i++) {
  //проход по массиву
  names[i] = "Nikita"; //перезапись
}

for (let i = 0; i < 10; i++) {
  //проход по массиву
  console.log(names[i]);
}

let fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям
for (let fruit of fruits) {
  console.log(fruit);
}

fruits[99] = "Peach";
//["Яблоко","Апельсин","Слива",undefined x 96,"Peach"]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

alert(matrix[1][1]); // 5, центральный элемент

//Напишите функцию sumInput(), которая:
//Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
function sumInput() {
  let arr = [];
  while (true) {
    let string = prompt("Vvedite znacheniye");
    if (string === "" || isNaN(+string) || string === null) {
      break;
    }
    arr.push(+string);
  }
  console.log(arr);
}

//сумма всех чисел в массиве
function sumArray(arr) {
  let summa = 0;
  for (let num of arr) {
    summa += num;
  }
  return summa;
}

console.log(sumArray([1, 4, 6, 7])); //18

//произведение всех чисел в массиве
function multiplyArray(arr) {
  let result = 1;
  for (let num of arr) {
    result *= num;
  }
  return result;
}
console.log(multiplyArray([1, 4, 6, 7])); //18
