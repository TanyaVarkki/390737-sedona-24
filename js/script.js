var link = document.querySelector(".button-search");
var popup = document.querySelector(".search-hotel-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=number-of-adult]");
var children = popup.querySelector("[name=number-of-children]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
});

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList. remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("form-show")) {
      popup.classList.remove("form-show");
      popup.classList.remove("form-error");
    }
  }
});
