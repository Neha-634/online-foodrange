document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Search (Header)
    // ==========================
    const searchInput = document.querySelector(".search1 input");
    const searchBtn = document.querySelector(".btncst");

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const text = searchInput.value.trim();

        if (text === "") {
            alert("Please enter a product name.");
        } else {
            alert("Searching for: " + text);
        }
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

    // ==========================
    // Add To Cart Buttons
    // ==========================
    const addButtons = document.querySelectorAll(".content a");

    addButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            cart++;
            document.querySelector(".cartname p").textContent = cart + " items";

            const combo =
                btn.parentElement.querySelector("h3").textContent;

            alert(combo + " added to cart.");
        });
    });

    // ==========================
    // Order Now Buttons
    // ==========================
    document.querySelectorAll(".combo-info a, .offer-content a, .btn1")
        .forEach(button => {

            button.addEventListener("click", (e) => {
                e.preventDefault();
                alert("Thank you! Your order request has been received.");
            });

        });

    // ==========================
    // Category Click
    // ==========================
    document.querySelectorAll(".categories .item").forEach(item => {

        item.addEventListener("click", () => {

            document
                .querySelectorAll(".categories .item")
                .forEach(i => i.classList.remove("active"));

            item.classList.add("active");

            alert("Category: " + item.innerText);

        });

    });

    // ==========================
    // Featured Card Hover
    // ==========================
    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.transition = "0.3s";
            card.style.boxShadow = "0 12px 25px rgba(0,0,0,.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });

    });

    // ==========================
    // Newsletter
    // ==========================
    const emailInput = document.querySelector(".newsletter-right input");
    const subscribeBtn = document.querySelector(".newsletter-right button");

    subscribeBtn.addEventListener("click", () => {

        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (!pattern.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        alert("Thank you for subscribing!");

        emailInput.value = "";

    });

    // ==========================
    // Filter Button
    // ==========================
    const filterBtn = document.querySelector(".search-area button");

    filterBtn.addEventListener("click", () => {
        alert("Filters applied.");
    });

    // ==========================
    // Navigation Active
    // ==========================
    document.querySelectorAll(".list a").forEach(link => {

        link.addEventListener("click", function () {

            document
                .querySelectorAll(".list a")
                .forEach(nav => nav.classList.remove("active"));

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
    // Social Media
    // ==========================
    document.querySelectorAll(".social a").forEach(link => {

        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Social media page coming soon.");
        });

    });

    // ==========================
    // Welcome Message
    // ==========================
    console.log("Welcome to FOODRANGE Combo Packs!");
    setTimeout(() => {
        alert("🍔 Welcome to FOODRANGE Combo Packs!");
    }, 500);


});




let Menuid =  document.getElementById('hiddenmenu');

function showMenu(){
    Menuid.classList.toggle('showmenu');
}
function classMenu(){
    Menuid.classList.remove('showmenu');
}