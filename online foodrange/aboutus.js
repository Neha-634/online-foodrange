// ==========================
// FOODRANGE ABOUT US PAGE
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------
    // Search Function
    // --------------------------
    const searchInput = document.querySelector(".search1 input");
    const searchBtn = document.querySelector(".btncst");

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const value = searchInput.value.trim();

        if (value === "") {
            alert("Please enter a product name.");
        } else {
            alert("Searching for: " + value);
            // window.location.href = "index2.html?search=" + value;
        }
    });


    // --------------------------
    // Login Button
    // --------------------------
    const login = document.querySelector(".login");

    login.addEventListener("click", () => {
        alert("Login / Sign Up page coming soon!");
        // window.location.href = "login.html";
    });


    // --------------------------
    // Wishlist
    // --------------------------
    const wishlist = document.querySelector(".wish");
    let wishlistCount = 0;

    wishlist.addEventListener("click", () => {

        wishlistCount++;

        document.querySelector(".wish1 p").textContent =
            wishlistCount + " items";

        alert("Added to Wishlist!");
    });


    // --------------------------
    // Cart
    // --------------------------
    const cart = document.querySelector(".cart");
    let cartCount = 0;

    cart.addEventListener("click", () => {

        cartCount++;

        document.querySelector(".cartname p").textContent =
            cartCount + " items";

        alert("Added to Cart!");
    });
     // ==========================
    // Login
    // ==========================
    document.querySelector(".login").addEventListener("click", () => {
        alert("Login / Sign Up page coming soon.");
    });

    // ==========================
    // Wishlist Counter
    // ==========================
    let wishlist = 0;

    document.querySelector(".wish").addEventListener("click", () => {
        wishlist++;
        document.querySelector(".wish1 p").textContent = wishlist + " items";
        alert("Added to Wishlist!");
    });

    // ==========================
    // Cart Counter
    // ==========================
    let cart = 0;

    document.querySelector(".cart").addEventListener("click", () => {
        cart++;
        document.querySelector(".cartname p").textContent = cart + " items";
        alert("Added to Cart!");
    });



    // --------------------------
    // Smooth Scroll
    // --------------------------
    document.querySelectorAll("a[href^='#']").forEach(anchor => {

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


    // --------------------------
    // Active Navigation
    // --------------------------
    const navLinks = document.querySelectorAll(".list a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => item.classList.remove("active"));

            this.classList.add("active");

        });

    });


    // --------------------------
    // Footer Copyright Year
    // --------------------------
    const footer = document.querySelector(".footer-bottom p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} FoodRange. All Rights Reserved.`;

    }


    // --------------------------
    // Welcome Message
    // --------------------------
    setTimeout(() => {
        alert("🍔 Welcome to FOODRANGE!\nFresh Food Delivered.");
    }, 500);

});




let Menuid =  document.getElementById('hiddenmenu');

function showMenu(){
    Menuid.classList.toggle('showmenu');
}
function classMenu(){
    Menuid.classList.remove('showmenu');
}