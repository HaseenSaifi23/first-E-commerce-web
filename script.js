function showmodal() {
  document.querySelector(".overlay").classList.add("showoverlay");

  document.querySelector(".login-form").classList.add("showform");
}
function closemodal() {
  document.querySelector(".overlay").classList.remove("showoverlay");

  document.querySelector(".login-form").classList.remove("showform");
}
let btnlogin = document.querySelector(".btn-login");
btnlogin.addEventListener("click", showmodal);

let c = document.querySelector(".spn");
c.addEventListener("click", closemodal);
