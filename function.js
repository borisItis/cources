console.log(a); //undefined
// console.log(b); //ReferenceError: Cannot access 'b' before initialization
// console.log(c); //ReferenceError: Cannot access 'c' before initialization

var a = 1; //видна глобально во всей зоне видимости
let b = 2;
const c = 3;

console.log(a); //1
console.log(b); //2
console.log(c); //3

// one();
// two(); //ReferenceError: Cannot access 'two' before initialization
function one() {
  //можем обратиться в любой момент
  console.log(1);
}

let two = function () {
  //Function Expession - не можем обратиться до инициализации
  console.log(2);
};

console.log(one);
console.log(two);
one();
two();

function ask(question, yes, no) {
  if (confirm(question))
    yes(); //происходит вызов функции yes, которую передали как значение
  else no(); //происходит вызов функции no, которую передали как значение
}

function showOk() {
  alert("Вы согласны.");
}

function showCancel() {
  alert("Вы отменили выполнение.");
}

//   использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel); //передаем значения функции (не вызываем непосредственно здесь)

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );
ask(
  "Вы согласны?",
  () => {
    alert("Вы согласились.");
  },
  () => {
    alert("Вы отменили выполнение.");
  }
);

// Функция (Function Expression), в которую мы передаем номер текущего месяца и говорит, лето или нет сейчас

let isSummer = function (month) {
  // if (month !== +month) { //проверка на тип через приведение типов
  if (typeof month !== "number") {
    //проверка на тип через определение типа с помощью typeof
    console.log("Not a num");
    return;
  }
  //проверка на верность номера
  if (month > 12 || month < 1) {
    console.log("No such num for a month");
    return;
  }
  //6, 7, 8 - лето
  if (month === 6 || month === 7 || month === 8) {
    console.log("Summer!");
  } else {
    console.log("No summer");
  }
};

isSummer(45);

let sum = (a, b) => {
  return a + b; //return значение
}; //тут внутри фигурных скобок в одну строку, поэтому можем воспользоваться сокращенной формой записи
// let sum = (a, b) => a + b; // сокращенная стрелочная, когда все в одну строку
let sum1 = (a, b) => {
  //тело функции не в одну строку, поэтому воспользоваться сокращенной формой записи не можем
  let c = a + b;
  return c; //return значение
};

console.log(sum);
console.log(sum(1, 4));

// function sum (a, b) {
//     return a+b;
// }

// let sum = function (a, b) {
//     return a+b;
// }

// 1) Cтрелочная функция, которая (a+b*c)

let op1 = (a, b, c) => a + b * c; //return ..

// 2) Cтрелочная функция, которая принимает 2 параметра (a и b) и запрашивает значение для c
//возвращается (a+b) * c

let op2 = (a, b) => {
  let c = +prompt("Enter number");
  return (a + b) * c;
};

console.log(op2(5, 6));
