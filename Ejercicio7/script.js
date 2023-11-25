document.addEventListener("DOMContentLoaded", function () {
  var elementosConSubmenu = document.querySelectorAll(".submenu");

  elementosConSubmenu.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      this.querySelector("ul").classList.toggle("mostrar");
    });
  });
});
