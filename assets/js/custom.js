var trigger = document.querySelector(".manutrigger");
var manu = document.querySelector(".header-manu");

trigger.addEventListener("click", function(){
    manu.classList.toggle("active");
    this.classList.toggle("active");
});