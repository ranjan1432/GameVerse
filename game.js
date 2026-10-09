window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    },2500);
});
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
            current = section.getAttribute("id")
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});
const counters = document.querySelectorAll(".counter");
function startCounter() {
    counters.forEach(counter => {
        const target = Number(counter.dataset.target);
        let count = 0;
        const speed = target / 100;
        const update = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                if (target >= 1000000) {
                    counter.innerText = "5M+";
                } else {
                    counter.innerText = target + "+";
                }
            }
        };
        update();
    });
}
const stats = document.querySelector(".stats");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});
observer.observe(stats);
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
window.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorOutline.style.left = e.clientX + "px";
    cursorOutline.style.top = e.clientY + "px";
});
const hoverItems = document.querySelectorAll("a, button");
hoverItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        cursorOutline.style.width = "60px"
        cursorOutline.style.height = "60px"
        cursorOutline.style.borderColor = "#00e5ff"
    });
    item.addEventListener("mouseleave", () => {
        cursorOutline.style.width = "35px"
        cursorOutline.style.height = "35px"
        cursorOutline.style.borderColor = "#7c3aed"
    });
});
const cards = document.querySelectorAll(".game-card");
cards .forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 18;
        const rotateY = (x - centerX) / 18;

        card.style.transform =  `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
});
const heroTitle = document.getElementById("hero-title");
const text = "PLAY BEYOND";
const highlight = "LIMITS";

let i = 0;
function typeTitle(){
    if(i < text.length){
        heroTitle.innerHTML +=  text.charAt(i);
        i++;
        setTimeout(typeTitle, 80)
    }else{
        heroTitle.innerHTML += `<span>${highlight}</span>`;
    }
}
window.addEventListener("load", () => {
    heroTitle.innerHTML = "";
    typeTitle();
});
const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
        hero.style.backgroundPosition = `center ${window.scrollY * 0.4}px`;
    });
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const navItems = document.querySelectorAll(".nav-menu a");
navItems.forEach(item=>{
    item.addEventListener("click",()=>{
        navMenu.classList.remove("active");
    });
});
const buttons = document.querySelectorAll(".hero-btn, .register-btn");
buttons.forEach(button => {
    button.addEventListener("click", function(e){
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = (e.clientX - rect.left - size/2) + "px";
        ripple.style.top = (e.clientY - rect.top - size/2) + "px";

        this.appendChild(ripple);
        setTimeout(()=>{
            ripple.remove();
        },600);
    });
});
let lastScroll = 0;
window.addEventListener("scroll",()=>{
    const current = window.scrollY;
    if(current > lastScroll && current > 150){
        navbar.style.transform = "translateY(-100%)";
    }else{
        navbar.style.transform = "translateY(0)";
    }
    lastScroll = current;
});