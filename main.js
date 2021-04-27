import "./sass/style.scss";
import { headers } from "./settings.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("#cta-join").addEventListener("click", openFirstFormList);
}

function openFirstFormList() {
  document.querySelector("#sign-up-form").classList.remove("hidden");
  document.querySelector("#cta-join").classList.add("hidden");
  document.querySelector("#landing-page").classList.add("blurred");
}


function post(data) {
  const postData = JSON.stringify(data);
  fetch("https://zuzdata-0da8.restdb.io/rest/ezonesignup", {
    method: "post",
    headers: headers,
    body: postData,
  })
    .then((res) => res.json())
    .then(data => console.log(data));
}

//click next 

document.getElementById("next").addEventListener("click", goToPageTwo);

function goToPageTwo(){
  document.getElementById("form-one").classList.add("hidden");
  document.getElementById("form-two").classList.remove("hidden");

}