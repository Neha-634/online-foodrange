document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // CART COUNTER
    // ===========================

    let cartCount = 0;
    const cartCounter = document.querySelector(".cartname p");

    document.querySelectorAll(".offer-card button").forEach(button => {

        button.addEventListener("click", function () {

            cartCount++;
            cartCounter.textContent = cartCount + " items";

            this.innerHTML = "✓ Added";

            this.style.background = "#28a745";

            setTimeout(() => {

                this.innerHTML = "🛒 SHOP NOW";
                this.style.background = "";

            }, 1200);

        });

    });

    // ===========================
    // OFFER CARD HOVER EFFECT
    // ===========================

    document.querySelectorAll(".offer-card").forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-8px)";
            this.style.transition = "0.3s";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });

    // ===========================
    // OFFER BADGE ANIMATION
    // ===========================

    document.querySelectorAll(".badge").forEach(badge => {

        setInterval(() => {

            badge.style.transform = "scale(1.1)";

            setTimeout(() => {

                badge.style.transform = "scale(1)";

            }, 300);

        }, 2000);

    });

    // ===========================
    // SHOP NOW BUTTON
    // ===========================

    document.querySelectorAll(".offer-card button").forEach(button => {

        button.addEventListener("mouseover", function () {

            this.style.transform = "scale(1.05)";

        });

        button.addEventListener("mouseout", function () {

            this.style.transform = "scale(1)";

        });

    });

    // ===========================
    // WISHLIST COUNTER
    // ===========================

    let wishCount = 0;
    const wishCounter = document.querySelector(".wish1 p");

    document.querySelectorAll(".offer-card img").forEach(img => {

        img.addEventListener("dblclick", function () {

            wishCount++;

            wishCounter.textContent = wishCount + " items";

            alert("Added to Wishlist");

        });

    });

    // ===========================
    // SEARCH
    // ===========================

    const searchInput = document.querySelector(".search1 input");

    const cards = document.querySelectorAll(".offer-card");

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        cards.forEach(card => {

            let name = card.querySelector("h3").textContent.toLowerCase();

            if (name.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

    // ===========================
    // COUNTDOWN TIMER
    // ===========================

    document.querySelectorAll(".expiry").forEach(expiry => {

        expiry.style.color = "red";

    });

    // ===========================
    // SOCIAL ICONS
    // ===========================

    document.querySelectorAll(".social a").forEach(icon => {

        icon.addEventListener("mouseenter", function () {

            this.style.transform = "rotate(360deg)";
            this.style.transition = ".5s";

        });

        icon.addEventListener("mouseleave", function () {

            this.style.transform = "rotate(0deg)";

        });

    });

    // ===========================
    // SMOOTH SCROLL
    // ===========================

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    });
    setTimeout(() => {
        alert("Here different-different offers are available.");
    }, 500);
     // ==========================
    // Login
    // ==========================
    document.querySelector(".login").addEventListener("click", () => {
        alert("Login / Sign Up page coming soon.");
    });

   


});



let Menuid =  document.getElementById('hiddenmenu');

function showMenu(){
    Menuid.classList.toggle('showmenu');
}
function classMenu(){
    Menuid.classList.remove('showmenu');
}