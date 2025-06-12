// console.log(1);

// const button = document.querySelector('.hero__content-button');
// console.log(button);

// button.addEventListener("click", () => {
//     console.log('click');
//     button.style.display = "none";
// });

const button = document.querySelector(".hero__content-button");

button.addEventListener("click", () => {
  button.classList.toggle("hero__content-button--secondary");
  addListItem(prompt("Введи текст"));
});

// const element = document.createElement('p');
// element.textContent = "Hiiiiiiiii";
// element.className = "header-3";
// console.log(element);

// document.body.appendChild(element);

// const list = document.querySelector('.abilities__list');
// list.appendChild(element);
const list = document.querySelector(".abilities__list");

function addListItem(text) {
  const element = document.createElement("p");
  element.textContent = text;
  element.className = "header-3";
  list.appendChild(element);
}

const numbers = document.querySelectorAll(".abilities__list-item-number");
console.log(numbers);

numbers.forEach((number, index) => {
  number.addEventListener("click", () => {
    number.classList.toggle("abilities__list-item-number--secondary");
    console.log(+number.textContent.trim() + 1);
    number.textContent = +number.textContent.trim() + 1;
  });
});

function createListItem(number, title, description) {
  //создаем див listItem
  const listItem = document.createElement("div");
  listItem.className = "abilities__list-item";

  //создаем див listItemNumber
  const listItemNumber = document.createElement("div");
  listItemNumber.className = "abilities__list-item-number";
  listItemNumber.textContent = number;
  listItem.appendChild(listItemNumber);

  //создаем див listItemInfo
  const listItemInfo = document.createElement("div");
  listItemInfo.className = "abilities__list-item-info";

  //создаем заголовок listItemHeader
  const listItemHeader = document.createElement("h3");
  listItemHeader.className = "header-3 abilities__list-item-header";
  listItemHeader.textContent = title;
  listItemInfo.appendChild(listItemHeader);

  //создаем параграф listItemParagraph
  const listItemParagraph = document.createElement("p");
  listItemParagraph.className = "abilities__list-item-description";
  listItemParagraph.textContent = description;
  listItemInfo.appendChild(listItemParagraph);

  //добавляем listItemInfo внутрь listItem
  listItem.appendChild(listItemInfo);

  return listItem;
}

// console.log(createListItem('1', "Title", "Description"));

const listItem1 = {
  number: 1,
  title: "Title",
  description: "Description",
};

const listItems = [
  {
    number: 1,
    title: "Track your sports",
    description:
      "Sportbit can track all of your sports activities through the day",
  },
  {
    number: 2,
    title: "Keep up your health",
    description:
      "With sportbit you never miss important updates on your health",
  },
];

const abilitiesList = document.querySelector(".abilities__list");
abilitiesList.innerHTML = "";

listItems.forEach((item) => {
  //вызываем функцию, которая возвращает блок
  const element = createListItem(item.number, item.title, item.description);
  //добавляем в список созданный ListItem
  abilitiesList.appendChild(element);
});
