let arr = [0, 1, 2];
arr.length; //длина массива
arr.length - 1; //последний индекс
arr[arr.length - 1]; //последний элемент в массиве
arr.at(-1); //последний элемент в массиве

arr.pop(); //убираем значение с конца
arr.push(2); //добавляем значение в конец

arr.shift(); //убираем значение c начала
arr.unshift(0); //добавляем значение в конец

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let str of arr) { //нет доступа к индексу - не можем изменить значение в массиве
//     console.log(str)
// }

console.log(arr);

//splice - начиная с .. удаляет .. элементов [и добавляет элементы]

arr.splice(1, 1); //удаление 1 элемента на 1 индексе
console.log(arr); //удаление 1 элемента на 1 индексе и добавление 3, 4
arr.splice(1, 1, 3, 4);
console.log(arr);
arr.splice(1, 0, 2); //передаем 0 в качестве длины для того, чтобы засунуть значение/я на определенный индекс
console.log(arr);
arr[2] = 4;
console.log(arr);

//Он возвращает новый массив (не преобразовывает исходный), в который копирует все элементы с индекса start до end (не включая end)
let arrSlice = ["t", "e", "s", "t"];

console.log(arrSlice.slice(1, 3)); // e,s (копирует с 1 до 3)
let newArray = arrSlice.slice(1);

console.log("arrSlice", arrSlice);
console.log("newArray", newArray);

console.log(arrSlice.slice(-2)); // s,t (копирует с -2 до конца)

//Метод для прохода по массиву .forEach позволяет запускать функцию для каждого элемента массива

arr.forEach((item, index) => {
  console.log(`${index} индекс - ${item}`);
});

//Метод .concat создаёт новый массив (не преобразовывает текущий), в который копирует данные из других массивов и дополнительные значения.

console.log(arr);
console.log(arr.concat([3, 4]));
console.log(arr);
