document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // HERO SLIDER
    // ==========================

    
    const slides = [
        {
            title: "Good Food, Good Mood",
            subtitle: "Delivered Fresh!",
            text: "Order from a wide range of delicious food items and get it delivered at your doorstep."
        },
        {
            title: "Healthy Food",
            subtitle: "Every Single Day!",
            text: "Fresh vegetables, fruits and groceries delivered in minutes."
        },
        {
            title: "Best Deals",
            subtitle: "Up To 50% OFF!",
            text: "Enjoy amazing discounts on your favourite products."
        }
    ];


    

    const heroTitle = document.querySelector(".hero-content h1");
    const heroText = document.querySelector(".hero-content p");
    const dots = document.querySelectorAll(".dots span");

    let current = 0;

    function showSlide(index) {
        heroTitle.innerHTML =
            `${slides[index].title}<br><span>${slides[index].subtitle}</span>`;

        heroText.innerHTML = slides[index].text;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    document.querySelector(".arrow.left").onclick = () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    };

    document.querySelector(".arrow.right").onclick = () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    };

    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 5000);

    // ==========================
    // ACTIVE MENU
    // ==========================
    document.querySelectorAll(".list a").forEach(link => {

        link.addEventListener("click", function () {

            document.querySelectorAll(".list a")
                .forEach(l => l.classList.remove("active"));

            this.classList.add("active");

        });

    });

    // ==========================
    // WISHLIST
    // ==========================
    let wishlistCount = 0;

    const wishlistText = document.querySelector(".wish1 p");

    document.querySelectorAll(".wishlist i").forEach(icon => {

        icon.addEventListener("click", () => {

            if (icon.classList.contains("fa-regular")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

                wishlistCount++;

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

                wishlistCount--;

            }

            wishlistText.textContent = wishlistCount + " items";

        });

    });
     // ==========================
    // Login
    // ==========================
    document.querySelector(".login").addEventListener("click", () => {
        alert("Login / Sign Up page coming soon.");
    });

    

    // ==========================
    // ADD TO CART
    // ==========================
    let cartCount = 0;

    const cartText = document.querySelector(".cartname p");

    document.querySelectorAll(".product-card button").forEach(btn => {

        btn.addEventListener("click", () => {

            cartCount++;

            cartText.textContent = cartCount + " items";

            btn.innerHTML = "✔ Added";

            btn.disabled = true;

            setTimeout(() => {

                btn.innerHTML =
                    `<i class="fa-solid fa-cart-shopping"></i> Add to Cart`;

                btn.disabled = false;

            }, 1500);

        });

    });

    // ==========================
    // SEARCH
    // ==========================
    const searchInput = document.querySelector(".search input");

    const products = document.querySelectorAll(".product-card");

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        products.forEach(product => {

            let title = product.querySelector("h4")
                .innerText.toLowerCase();

            product.style.display =
                title.includes(value) ? "block" : "none";

        });

    });

    // ==========================
    // NEWSLETTER
    // ==========================
    const newsletterForm =
        document.querySelector(".newsletter form");

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            this.querySelector("input").value.trim();

        if (!email) {

            alert("Please enter your email.");

            return;

        }

        alert("Thanks for subscribing!");

        this.reset();

    });

    // ==========================
    // SMOOTH SCROLL
    // ==========================
    document.querySelectorAll("a[href^='#']").forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });
    setTimeout(() => {
        alert("🍔 Welcome to FOODRANGE!\nFresh Food Delivered.");
    }, 500);

document.querySelectorAll(".combo-info a, .offer-content a, .btn")
        .forEach(button => {

            button.addEventListener("click", (e) => {
                e.preventDefault();
                alert("shop your favourite food items.");
            });

        });
});





let Menuid =  document.getElementById('hiddenmenu');

function showMenu(){
    Menuid.classList.toggle('showmenu');
}
function classMenu(){
    Menuid.classList.remove('showmenu');
}





