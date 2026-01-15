const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("successPopup");

function openMenu(){
sideMenu.classList.add("open");
overlay.classList.add("show");
}
function closeMenu(){
sideMenu.classList.remove("open");
overlay.classList.remove("show");
}

document.getElementById("bookingForm").addEventListener("submit",e=>{
e.preventDefault();
popup.style.display="flex";
});

function closePopup(){
popup.style.display="none";
}

const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active")
}})
});

