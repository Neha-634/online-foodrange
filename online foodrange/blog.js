document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Search Function
    // ==========================
    const searchInput = document.querySelector(".search1 input");
    const searchBtn = document.querySelector(".btncst");

    searchBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const keyword = searchInput.value.trim();

        if (keyword === "") {
            alert("Please enter something to search.");
        } else {
            alert("Searching for: " + keyword);
            // window.location.href = "index2.html?search=" + keyword;
        }
    });

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            searchBtn.click();
        }
    });

    // ==========================
    // Login
    // ==========================
    const login = document.querySelector(".login");

    login.addEventListener("click", () => {
        alert("Redirecting to Login / Sign Up...");
        // window.location.href = "login.html";
    });

    // ==========================
    // Wishlist
    // ==========================
    let wishlistCount = 0;
    const wishlist = document.querySelector(".wish");

    wishlist.addEventListener("click", () => {
        wishlistCount++;
        document.querySelector(".wish1 p").textContent =
            wishlistCount + " items";

        alert("Added to Wishlist");
    });

    // ==========================
    // Cart
    // ==========================
    let cartCount = 0;
    const cart = document.querySelector(".cart");

    cart.addEventListener("click", () => {
        cartCount++;
        document.querySelector(".cartname p").textContent =
            cartCount + " items";

        alert("Added to Cart");
    });

    // ==========================
    // Discover Cards Hover Effect
    // ==========================
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.transition = "0.3s";
            card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });

    });

    // ==========================
    // Blog Categories Click
    // ==========================
    const categories = document.querySelectorAll(".category-grid .item");

    categories.forEach(item => {

        item.addEventListener("click", () => {

            const category = item.innerText.trim();

            alert("Opening " + category + " category");

        });

    });

    // ==========================
    // CTA Button
    // ==========================
    const exploreBtn = document.querySelector(".btn");

    exploreBtn.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Welcome to the FoodRange Blog!");

    });

    // ==========================
    // Social Media Links
    // ==========================
    const socialLinks = document.querySelectorAll(".social a");

    socialLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            alert("Social media page coming soon!");

        });

    });
     // ==========================
    // Login
    // ==========================
    document.querySelector(".login").addEventListener("click", () => {
        alert("Login / Sign Up page coming soon.");
    });



    // ==========================
    // Smooth Scroll
    // ==========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // ==========================
    // Active Navigation
    // ==========================
    const navLinks = document.querySelectorAll(".list a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(nav => nav.classList.remove("active"));

            this.classList.add("active");

        });

    });

    // ==========================
    // Footer Year
    // ==========================
    const footer = document.querySelector(".footer-bottom p");

    footer.innerHTML =
        `© ${new Date().getFullYear()} FoodRange. All Rights Reserved.`;

    // ==========================
    // Welcome Message
    // ==========================
    setTimeout(() => {

        console.log("Welcome to FoodRange Blog!");

    }, 1000);
     setTimeout(() => {
        alert("🍔 Welcome to FOODRANGE Blogs!");
    }, 500);

});



let Menuid =  document.getElementById('hiddenmenu');

function showMenu(){
    Menuid.classList.toggle('showmenu');
}
function classMenu(){
    Menuid.classList.remove('showmenu');
}