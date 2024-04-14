const buttons = document.querySelector(".buttons");
const btns = document.querySelectorAll("button");
const paragrafs = document.querySelectorAll(".paragraf");
buttons.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.closest("button")) return;
  btns.forEach((btn) => btn.classList.remove("active"));
  paragrafs.forEach((paragraf) =>
    paragraf.classList.remove("active--paragraf")
  );
  clicked.classList.add("active");
  document
    .querySelector(`.paragraf--${clicked.dataset.numbuttom}`)
    .classList.add("active--paragraf");
});
