/* ==========================
   MOBILE NAVIGATION
========================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* CLOSE MENU WHEN LINK IS CLICKED */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll("nav a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);


/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const header = document.querySelector("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

window.addEventListener("load", updateHeader);


/* ==========================
   BACK TO TOP
========================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

            topBtn.style.justifyContent = "center";

            topBtn.style.alignItems = "center";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================
   TYPING ANIMATION
========================== */

const typingElement = document.getElementById("typing");

if (typingElement) {

    const words = [

        "Full Stack Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "AI Video Creator",
        "Digital Solutions Developer"

    ];

    let wordIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentWord = words[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, characterIndex + 1);

            characterIndex++;


            if (characterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, characterIndex - 1);

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }


        const speed = deleting ? 50 : 100;

        setTimeout(typeEffect, speed);

    }


    typeEffect();

}


/* ==========================
   CONTACT FORM
========================== */

const contactForm = document.getElementById("contactForm");
const contactSubmit = document.getElementById("contactSubmit");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const formData = new FormData(contactForm);

        contactSubmit.disabled = true;

        contactSubmit.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            <span>Sending...</span>
        `;

        formStatus.textContent = "";

        formStatus.className = "form-status";


        try {

            const response = await fetch(
                "https://formspree.io/f/xqpzbgnd",
                {
                    method: "POST",

                    body: formData,

                    headers: {
                        "Accept": "application/json"
                    }

                }
            );


            if (response.ok) {

                formStatus.textContent =
                    "✓ Message sent successfully! I'll get back to you soon.";

                formStatus.classList.add("success");

                contactForm.reset();


                contactSubmit.innerHTML = `
                    <i class="fas fa-check"></i>
                    <span>Message Sent</span>
                `;


                setTimeout(() => {

                    contactSubmit.innerHTML = `
                        <i class="fas fa-paper-plane"></i>
                        <span>Send Message</span>
                    `;

                    contactSubmit.disabled = false;

                }, 4000);


            } else {

                throw new Error("Form submission failed.");

            }


        } catch (error) {

            formStatus.textContent =
                "Something went wrong. Please try again or email me directly.";

            formStatus.classList.add("error");


            contactSubmit.innerHTML = `
                <i class="fas fa-paper-plane"></i>
                <span>Send Message</span>
            `;

            contactSubmit.disabled = false;

        }

    });

}