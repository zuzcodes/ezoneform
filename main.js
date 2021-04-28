import "./sass/style.scss";
import { headers } from "./settings.js";

const formFirstPart = document.querySelector("#form-1");
const formSecondPart = document.querySelector("#form-2");
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
  document.querySelector("#google").classList.remove("hidden");
  document.querySelector("#next").classList.remove("hidden");
  document.querySelector("#x-1").addEventListener("click", closeForm);
  document.querySelector("#x-2").addEventListener("click", closeForm);
  document.querySelector("#x-3").addEventListener("click", closeForm);
  document.getElementById("browse").addEventListener("click", closeForm);
  document.querySelector("#next").addEventListener("click", validateForm);
  document.querySelector("#back").addEventListener("click", backToPrevious);
  document.querySelector("#previous").addEventListener("click", backToPrevious);
}

//auto-fill for google 

document.getElementById("google").addEventListener("click", autoFill);

function autoFill(){
  console.log("button clicked")
  formFirstPart.elements.name.value = "John Doe";
  formFirstPart.elements.email.value = "john@stud.kea.dk";
  formFirstPart.elements.region.value = "Sweden"
}

function validateForm() {
  if (!formFirstPart.elements.name.checkValidity()) {
    document.querySelector("#error-2").classList.add("hidden");
    document.querySelector("#error-1").classList.remove("hidden");
  } else if (!formFirstPart.elements.email.checkValidity()) {
    document.querySelector("#error-1").classList.add("hidden");
    document.querySelector("#error-2").classList.remove("hidden");
  } else {
    document.querySelector("#form-one").classList.add("hidden");
    document.querySelector("#form-two").classList.remove("hidden");
    document.querySelector("#submit").classList.remove("hidden");
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


document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  if (formFirstPart.checkValidity()) {
    const interests = [];
    const interestsEls = document.querySelectorAll("[name=interests]:checked");
    interestsEls.forEach((el) => interests.push(el.value));
    post({
      name: formFirstPart.elements.name.value,
      email: formFirstPart.elements.email.value,
      region: formFirstPart.elements.region.value,
      interests: interests,
      other: formSecondPart.other.value,
    });
  
    document.querySelector("#form-two").classList.add("hidden");
    document.querySelector("#form-three").classList.remove("hidden");
  }
});
formFirstPart.setAttribute("novalidate", true);
formSecondPart.setAttribute("novalidate", true);

