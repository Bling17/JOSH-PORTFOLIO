// ===========================
// TYPING ANIMATION
// ===========================

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Business Administrator",
    "Human Resource Professional",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);

}

typeEffect();


// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuBtn.innerHTML = '<i class="fas fa-times"></i>';

    }else{

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    }

});

// Close menu when a link is clicked

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuBtn.innerHTML='<i class="fas fa-bars"></i>';

    });

});


// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===========================
// HEADER SHADOW
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.boxShadow = "none";

    }

});


// ===========================
// ACTIVE NAV LINK
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ===========================
// SCROLL REVEAL
// ===========================

const revealElements = document.querySelectorAll(

".service-card, .project-card, .about-card, .skills span"

);

function reveal(){

    revealElements.forEach(element=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element=>{

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ===========================
// BUTTON RIPPLE EFFECT
// ===========================

document.querySelectorAll(".btn, .btn-outline").forEach(button=>{

button.addEventListener("click", function(e){

const circle = document.createElement("span");

const diameter = Math.max(this.clientWidth,this.clientHeight);

const radius = diameter / 2;

circle.style.width = circle.style.height = `${diameter}px`;

circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

circle.classList.add("ripple");

const ripple = this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});


// ===========================
// CONSOLE MESSAGE
// ===========================

console.log("%cWelcome to Rowland Joshua's Portfolio",
"color:#8b5cf6;font-size:18px;font-weight:bold;");

console.log("Designed with HTML, CSS & JavaScript.");