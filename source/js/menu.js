const burgerClosed  = document.querySelector(".main-nav--closed");
const burgerOpened = document.querySelector(".main-nav--opened");
const burgerButton = document.querySelector(".main-nav__toggle");
const menuBurger = document.querySelector(".main-nav");

burgerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Кнопка нажата");
  if (menuBurger.classList.contains("main-nav--closed")) {
    menuBurger.classList.remove("main-nav--closed");
    menuBurger.classList.add("main-nav--opened");
  }
    else if (menuBurger.classList.contains("main-nav--opened")) {
    menuBurger.classList.remove("main-nav--opened");
    menuBurger.classList.add("main-nav--closed");
    console.log("закрыть");
    };
  });
