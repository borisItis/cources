// console.log(a)
// a = 1;

// func() //- вопрос: что за i в данный момент???

var i;
// func() //- вопрос: что за i в данный момент???
var b = 2;
for (i = 1; i < 6; i++) {
  // console.log(b)
  var b = 3;
} // тут i стало 6
// console.log(i)

// func() //- вопрос: что за i в данный момент???

function func() {
  console.log(i);
}

// func()

let c = 2;
for (i = 1; i < 6; i++) {
  // console.log(c)
  const c = 3;
}

// let result = 1;

function calculate(a, b) {
  const result = a + b;
  return result;
}

result = calculate(1, 4);

// form.onclick = function(event) {
//   event.target.style.backgroundColor = 'yellow';

//   // браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
//   setTimeout(() => {
//     console.log("target = " + event.target.tagName + ", this=" + this.tagName);
//   }, 0);
// };

// const form = document.querySelector('form');

// form.addEventListener("click", (event) => {
//     // event.stopPropagation()
//     console.log("тег форм")
//     // console.log("снаружиии target = " + event.target.tagName + ", this=" + event.currentTarget.tagName)
// })
// const div = document.querySelector('.div');

// div.addEventListener("click", (event) => {
//     // event.stopPropagation()
//     console.log("тег див")
//     // console.log( "внутрииии target = " + event.target.tagName + ", this=" + event.currentTarget.tagName)
// }, {capture: true})
// const p = document.querySelector('p');

// p.addEventListener("click", (event) => {
//     // event.stopPropagation()
//     console.log("тег п")
//     // console.log( "внутрииии target = " + event.target.tagName + ", this=" + event.currentTarget.tagName)
// })

const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener(
  "click",
  (event) => {
    event.stopPropagation(); //предотвратить всплытие/погружение (распространение)
    console.log("тег форм");
    console.log(
      "снаружиии target = " +
        event.target.tagName +
        ", this=" +
        event.currentTarget.tagName
    );
    p.remove();
  },
  true
); //отлавливать событие при погружении

p.addEventListener("click", (event) => {
  console.log("тег п");
  console.log(
    "внутрииии target = " +
      event.target.tagName +
      ", this=" +
      event.currentTarget.tagName
  );
});

// const buttons = document.querySelectorAll(".button")
// console.log(buttons)

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         button.style.background = 'red'
//         console.log(index)
//     })
// })

const buttonsParent = document.querySelector(".buttons");

// buttonsParent.addEventListener("click", (event) => {
//     console.log("клик")
//     let target = event.target;

//     if (target.className != 'button') return;
//     console.log(target.textContent)
// })

//делегирование с вложенностью
buttonsParent.addEventListener("click", (event) => {
  console.log("клик");
  let divButton = event.target.closest(".button");
  if (!divButton) return;
  if (!buttonsParent.contains(divButton)) return;

  console.log(divButton.textContent);
});
