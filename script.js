// Navbar Background Change

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(0,0,0,0.7)";
    }
});


// Book Appointment Button
function bookAppointment(){

alert("Appointment Booked Successfully!");

}
const btn = document.querySelector(".btn");

if(btn){
btn.addEventListener("click", function () {
    alert("✨ Welcome to Luxe Beauty Salon!\n\nYour booking request has been received.");
});
}


// Service Card Animation

const cards = document.querySelectorAll(".box");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px) scale(1)";

});

});


// Gallery Zoom Effect

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

img.addEventListener("click", () => {

img.classList.toggle("active");

});

});


// Scroll Reveal Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(50px)";
sec.style.transition="1s";

observer.observe(sec);

});

function sendMessage(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let message =
document.getElementById("message").value;

if(name=="" || email=="" || message==""){

alert("Please fill all fields");

}

else{

alert("Thank You " + name +
"! Message Sent Successfully.");

}

}
// Contact Form

const form=document.querySelector(".contact");

if(form){

const button=form.querySelector("button");

button.addEventListener("click",()=>{

const name=form.querySelector("input").value;

if(name==""){

alert("Please enter your details!");

}

else{

alert("💖 Thank you "+name+"!\nOur team will contact you soon.");

}

});

}
