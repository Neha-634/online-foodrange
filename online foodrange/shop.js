document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // CART
    // ===========================

    let cartCount = 0;
    const cartText = document.querySelector(".cartname p");

    document.querySelectorAll(".product-card button").forEach(btn => {

        btn.addEventListener("click", function () {

            cartCount++;
            cartText.textContent = cartCount + " items";

            this.innerHTML = '<i class="fa-solid fa-check"></i> Added';

            this.style.background = "#28a745";

            setTimeout(() => {

                this.innerHTML =
                    '<i class="fa-solid fa-cart-shopping"></i> Add to Cart';

                this.style.background = "";

            }, 1000);

        });

    });


    // ===========================
    // WISHLIST
    // ===========================

    let wishCount = 0;
    const wishText = document.querySelector(".wish1 p");

    document.querySelectorAll(".wishlist i").forEach(icon => {

        icon.addEventListener("click", function () {

            if (this.classList.contains("fa-regular")) {

                this.classList.remove("fa-regular");
                this.classList.add("fa-solid");

                this.style.color = "red";

                wishCount++;

            } else {

                this.classList.remove("fa-solid");
                this.classList.add("fa-regular");

                this.style.color = "";

                wishCount--;

            }

            wishText.textContent = wishCount + " items";

        });

    });


    // ===========================
    // SEARCH PRODUCTS
    // ===========================

    const searchInput =
        document.querySelector(".search-box input");

    const products =
        document.querySelectorAll(".product-card");

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        products.forEach(product => {

            const title =
                product.querySelector("h4").textContent.toLowerCase();

            if (title.includes(value)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });


    // ===========================
    // PRICE FILTER
    // ===========================

    const priceRange =
        document.querySelector('input[type="range"]');

    priceRange.addEventListener("input", function () {

        const maxPrice = Number(this.value);

        products.forEach(product => {

            const price = parseFloat(
                product.querySelector(".new").textContent.replace("$", "")
            );

            if (price <= maxPrice) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });


    // ===========================
    // SORT PRODUCTS
    // ===========================

    const sort =
        document.querySelector(".right-side select");

    const grid =
        document.querySelector(".product-grid");

    sort.addEventListener("change", function () {

        const cards = [...document.querySelectorAll(".product-card")];

        if (this.value === "Price Low To High") {

            cards.sort((a, b) => {

                return parseFloat(
                    a.querySelector(".new").textContent.replace("$", "")
                ) -
                    parseFloat(
                        b.querySelector(".new").textContent.replace("$", "")
                    );

            });

        }

        if (this.value === "Price High To Low") {

            cards.sort((a, b) => {

                return parseFloat(
                    b.querySelector(".new").textContent.replace("$", "")
                ) -
                    parseFloat(
                        a.querySelector(".new").textContent.replace("$", "")
                    );

            });

        }

        cards.forEach(card => grid.appendChild(card));

    });


    // ===========================
    // GRID / LIST VIEW
    // ===========================

    const gridBtn =
        document.querySelector(".grid");

    const listBtn =
        document.querySelector(".list");

    gridBtn.addEventListener("click", () => {

        grid.style.display = "grid";

        grid.style.gridTemplateColumns =
            "repeat(auto-fill,minmax(250px,1fr))";

    });

    listBtn.addEventListener("click", () => {

        grid.style.display = "block";

        document.querySelectorAll(".product-card").forEach(card => {

            card.style.display = "flex";
            card.style.alignItems = "center";
            card.style.gap = "20px";
            card.style.marginBottom = "20px";

        });

    });


    // ===========================
    // APPLY FILTER BUTTON
    // ===========================

    document.querySelector(".filter-btn")
        .addEventListener("click", () => {

            alert("Filter Applied Successfully");

        });


    // ===========================
    // SHOP NOW BUTTON
    // ===========================

    const shopNow =
        document.querySelector(".banner-content a");

    shopNow.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(".products-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    });
setTimeout(() => {
        alert("🍔 Welcome to FOODRANGE!\n you can check different variety of food.!");
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