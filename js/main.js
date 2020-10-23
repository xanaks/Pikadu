let menuToggle = document.querySelector("#menu-toggle");
let menu =document.querySelector(".sidebar");

menuToggle.addEventListener("click", function(event){
  event.preventDefault();//отмена обычного клика (открутка на верх)
menu.classList.toggle("visible");
})