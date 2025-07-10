//при клике на кнопку выводить в консоль значения в полях ввода

const button = document.querySelector(".form__button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputText = document.querySelector(".input-text");
  const text = inputText.value; //получаем значение
  const inputNumber = document.querySelector(".input-number");
  let number = parseInt(inputNumber.value); //получаем значение типа number: NaN (не годится) или число
  console.log(number, typeof number);
  if (!!text && !isNaN(number)) {
    // делаем проверку, чтобы number был не NaN
    document.querySelector(".form").reset(); //ресесит, очищает форму

    //Текст ..., Число ... - в документ добавляем
    const paragraph = document.createElement("p");
    paragraph.textContent = `Текст ${text}, Число ${number}`;

    const card = document.createElement("div");

    const cardImage = document.createElement("img");
    cardImage.src =
      "https://img.freepik.com/psd-gratuit/marque-croix-isolee_23-2151478803.jpg?semt=ais_hybrid&w=740";
    cardImage.width = 20;
    //Вешаем событие по удалению карточки при клике на картинку
    cardImage.addEventListener("click", (e) => card.remove());
    card.appendChild(cardImage);

    const cardParagraph = document.createElement("p");
    cardParagraph.textContent = `Текст ${text}, Число ${number}`;
    card.appendChild(cardParagraph);

    // document.body.appendChild(paragraph);
    document.body.appendChild(card);
  }
});
