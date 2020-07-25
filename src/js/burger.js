document.addEventListener(`DOMContentLoaded`, () => {
  const $burger = document.getElementById("burger");
  const $header = document.getElementById("header");
  const $menuBD = document.getElementById("menu-backdrop");
  const $krestClose = document.getElementById("krest");
  $burger.addEventListener("click", () => {
    $header.classList.toggle("active");
  });
  $menuBD.addEventListener("click", () => {
    $header.classList.remove("active");
  });
  $krestClose.addEventListener("click", () => {
    $header.classList.remove("active");
  });
});
