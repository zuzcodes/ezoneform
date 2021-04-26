import "./sass/style.scss";

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("#cta-join").addEventListener("click", openFirstFormList);
}

function openFirstFormList() {
  document.querySelector("#sign-up-form").classList.remove("hidden");
  document.querySelector("#cta-join").classList.add("hidden");
  document.querySelector("#landing-page").classList.add("blurred");
}
