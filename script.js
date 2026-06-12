// Welcome Message
window.onload = function () {
    console.log("Welcome to LUMÉ Beauty");
};

// Explore Collection Button
const exploreBtn = document.querySelector(".hero button");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        alert("Welcome to our luxury beauty collection! ✨");
    });
}

// Category Cards
const items = document.querySelectorAll(".item");

items.forEach(function(item){
    item.addEventListener("click", function(){
        alert("Explore our " + item.innerText + " collection!");
    });
});

// Smooth Hover Effect
items.forEach(function(item){
    item.addEventListener("mouseover", function(){
        item.style.transform = "scale(1.05)";
    });

    item.addEventListener("mouseout", function(){
        item.style.transform = "scale(1)";
    });
});
