
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

// Tutup menu setelah link diklik
document.querySelectorAll(".nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
    });
});
