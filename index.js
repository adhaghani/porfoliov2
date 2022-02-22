var educatebtn = document.querySelector(".educate");
var workbtn = document.querySelector(".work");
var edu = document.getElementById("education");
var work = document.getElementById("work");

educatebtn.addEventListener("click", function(){
    educatebtn.classList.add("active");
    workbtn.classList.remove("active");
    edu.style.display = "block";
    work.style.display = "none";
})
workbtn.addEventListener("click", function(){
    workbtn.classList.add("active");
    educatebtn.classList.remove("active");
    work.style.display = "block";
    edu.style.display = "none";
})