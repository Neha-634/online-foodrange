// Select the form
const form = document.querySelector("form");

// Listen for form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const phone = document.querySelectorAll('input[type="text"]')[1].value.trim();
    const subject = document.querySelector("select").value;
    const message = document.querySelector("textarea").value.trim();

    // Validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (subject === "Select Subject") {
        alert("Please select a subject.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    // Success message
    alert("Your message has been sent successfully!");

    // Reset form
    form.reset();
     

     // ==========================
    // Login
    // ==========================
    document.querySelector(".login").addEventListener("click", () => {
        alert("Login / Sign Up page coming soon.");
    });

   



    setTimeout(() => {
        alert("🍔 Welcome to FOODRANGE Contactus!");
    }, 500);
});


let Menuid =  document.getElementById('hiddenmenu');

function showMenu(){
    Menuid.classList.toggle('showmenu');
}
function classMenu(){
    Menuid.classList.remove('showmenu');
}