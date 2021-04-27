import "./sass/style.scss";
import { headers } from "./settings.js";

const form = document.querySelector("form");

window.addEventListener("DOMContentLoaded", init);

function post(data) {
  const postData = JSON.stringify(data);
  fetch("https://zuzdata-0da8.restdb.io/rest/ezonesignup", {
    method: "post",
    headers: headers,
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function init() {
  document.querySelector("#cta-join").addEventListener("click", showForm);
}

function showForm() {
  document.querySelector("#sign-up-form").classList.remove("hidden");
  document.querySelector("#cta-join").classList.add("hidden");
  document.querySelector("#landing-page").classList.add("blurred");
  document.querySelector("#x-1").addEventListener("click", closeForm);
  document.querySelector("#x-2").addEventListener("click", closeForm);
  document.querySelector("#next").addEventListener("click", validateForm);
  document.querySelector("#back").addEventListener("click", backToPrevious);
}

function validateForm() {
  if (!form.elements.name.checkValidity()) {
    document.querySelector("#error-2").classList.add("hidden");
    document.querySelector("#error-1").classList.remove("hidden");
  } else if (!form.elements.email.checkValidity()) {
    document.querySelector("#error-1").classList.add("hidden");
    document.querySelector("#error-2").classList.remove("hidden");
  } else {
    document.querySelector("#form-one").classList.add("hidden");
    document.querySelector("#form-two").classList.remove("hidden");
  }
}

function closeForm() {
  document.querySelector("#sign-up-form").classList.add("hidden");
  document.querySelector("#cta-join").classList.remove("hidden");
  document.querySelector("#landing-page").classList.remove("blurred");
  location.reload();
}

function backToPrevious() {
  document.querySelector("#form-one").classList.remove("hidden");
  document.querySelector("#form-two").classList.add("hidden");
}


/*form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    const interests = [];
    const interestsEls = document.querySelectorAll("[name=interests]:checked");
    interestsEls.forEach((el) => platforms.push(el.value));

    console.log(interests);
    post({
      name: form.elements.name.value,
      email: form.elements.email.value,
      region: form.elements.region.value,
      interest: interests,
      other: form.elements.other.value,
    });
  
    document.querySelector("#form-two").classList.add("hidden");
    document.querySelector("#form-three").classList.remove("hidden");
  }
});
document.querySelector("form").setAttribute("novalidate", true);*/