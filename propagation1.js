const itemContent = document.querySelector(".hero__content-list-item-content");

itemContent.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation()
    console.log("div 111");
  },
  { capture: true }
);

itemContent.addEventListener("click", (e) => {
  // e.stopPropagation()
  console.log("div 222");
});

const itemParagraph = document.querySelector(
  ".hero__content-list-item-content p"
);
console.log(itemParagraph);
itemParagraph.addEventListener("click", (e) => {
  // e.stopPropagation()
  console.log("p");
});

const itemSpan = document.querySelector(
  ".hero__content-list-item-content p span"
);
console.log(itemSpan);

itemSpan.addEventListener("click", (e) => {
  // e.stopPropagation()
  console.log("span");
});
itemSpan.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("bitch");
  },
  { capture: true }
);
