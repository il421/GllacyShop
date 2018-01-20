
var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-feedback-show");
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-feedback-show");
});

form.addEventListener("submit", function(event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    console.log("Нужно ввести имя и почту");
  } else {
    localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
    }
  }
});
