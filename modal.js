const openButton = document.querySelector(".hero__content-button");
const modal = document.querySelector(".modal");

openButton.addEventListener("click", (event) => {
  modal.classList.remove("modal--hidden");
  document.body.classList.add("no-scroll");
});

const closeButton = document.querySelector(".modal__close");

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  clearModal();
});

modal.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    clearModal();
  }
});

const modalButton = document.querySelector(".modal__area-button");
const modalInput = document.querySelector(".modal__area-input");
const modalTextarea = document.querySelector(".modal__area-textarea");

const heroTitle = document.querySelector(".hero__content-title");
const heroText = document.querySelector(".hero__text");

modalButton.addEventListener("click", (e) => modalSubmit(e));

function modalSubmit(e) {
  e.preventDefault();
  if (modalInput.value !== "" && modalTextarea.value !== "") {
    heroTitle.textContent = modalInput.value;
    heroText.textContent = modalTextarea.value;
    clearModal();
  } else {
    alert("Заполните поля");
  }
}

function clearModal() {
  modal.classList.add("modal--hidden");
  document.body.classList.remove("no-scroll");
  modalInput.value = "";
  modalTextarea.value = "";
}
