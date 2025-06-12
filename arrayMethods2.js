// let arr = [0, 1, "true", 1, true, 1];

// console.log(arr.includes("false"));

// let arrFind = [1, 4, 5, 6, 8, 12];

// let number = arrFind.find((item, index) => item % 4 === 0);
// console.log(number);

// let arrMap = [1, 4, 7, 5];
// let arrMapNew = arrMap.map(item => item * 2);
// console.log("arrMapNew", arrMapNew);
// console.log('arrMap', arrMap);

// let arrUnsorted = [1, 3, 10, 2];
// let arrStrUnsorted = ['', "D", "SSADSUAUAFFUA", 'AA']
// arrUnsorted.sort((a, b) => a-b);
// arrStrUnsorted.sort((a, b) => a.length - b.length);
// console.log(arrStrUnsorted);

// let strUnsplitted = 'Мама';
// let arrSplitted = strUnsplitted.split("");
// console.log(arrSplitted);
// console.log(arrSplitted.join("+"));

//перевернуть строку
// let str = "лаваш";
// console.log(str.split('').reverse().join(''))

// let arrToSort = [5, 2, 1, -10, 8];
// arrToSort.sort((a, b) => b-a);
// console.log( arrToSort );

//Input: [1, 5.2, 4, 0, -1]
//Output: 9.2

//Input: []
//Output: 0

// function sum (numbers) {
//     if (!numbers.length) return 0;

//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// console.log(sum([1, 5.2, 4, 0, -1]))

// let sortedArray = arr.filter(item => item.name === input)

let array = [1, 6, 5, 7, 8];
console.log(array[array.length - 1]);
console.log(array.at(-1));
array[1] = 4;
console.log(array);
array.splice(1, 1); // изменяет массив
console.log(array);
array.splice(1, 2, 2, 3);
console.log(array);
array.splice(2, 0, 4, 5);
console.log(array);

//slice - копирует

let arrayCopy = array.slice(2, 4);

//join - соединить все элементы массива  в строку
console.log(array.join("  "));
let arrayFromString = "1233 821481 816486142 1489416".split(" ");
console.log(arrayFromString);

// arrayFromString.forEach((item, index) => {

// })

// for (item of arrayFromString) {

// }

// console.log(arrayFromString.filter((item, index) => {
//     if (item.length > 5) {
//         return item;
//     }
// }))

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/solutions/javascript
// function removeEveryOther(arr){
//     return arr.filter((item, index) => index % 2 === 0) //true - оставляем, false - убираем
//   }

//Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
function monkeyCount(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

console.log(monkeyCount(5));

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//https://www.codewars.com/kata/57cc975ed542d3148f00015b

function check(a, x) {
  // return a.indexOf(x) !== -1;
  // 0 - ... - если нашел
  // -1 - нет совпадений

  //0 !== -1 - 0 не равно -1? = true

  return a.includes(x); //либо True, либо False
}

// our task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// https://www.codewars.com/kata/559d2284b5bb6799e9000047

function addLength(str) {
  let array = str.split(" "); //["apple", "ban"]
  let result = array.map((item) => `${item} ${item.length}`); //apple - 5, ban - 3
  return result;
}

console.log(addLength("apple ban"));
