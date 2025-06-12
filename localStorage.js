localStorage.setItem("Number1", "Great task");
localStorage.removeItem("cat");
const cet = localStorage.getItem("cet");

const paragraph = document.createElement("p");
paragraph.textContent = cet;

// родитель.appendChild(ребенок)
document.body.appendChild(paragraph);

//при клике на кнопку в localStorage добавляется значение
const addButton = document.querySelector(".addToLocalStorage");
addButton.addEventListener("click", () => {
  localStorage.setItem("key", "qwerty");
});

//при клике на кнопку из localStorage убирается значение
const removeButton = document.querySelector(".deleteFromLocalStorage");
removeButton.addEventListener("click", () => {
  localStorage.removeItem("key");
});

const addToArrayButton = document.querySelector(".addToArrayLocalStorage");
addToArrayButton.addEventListener("click", () => {
  //JSON.stringify - преобразовать данные в строку (застрочить)
  localStorage.setItem("array", JSON.stringify([1, 4]));
  console.log(JSON.stringify([1, 3]));
  //JSON.parse - преобразовать данные из строки (обратная операция)
  const res = JSON.parse(localStorage.getItem("array"));
  console.log(res, typeof res);
});
