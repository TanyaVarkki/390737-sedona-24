var link = document.querySelector(".button-search");

var popup = document.querySelector(".search-hotel-form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-show");
  });
