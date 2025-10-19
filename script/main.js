// ================ Effet de scroll sur la navbar ================

document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
        navbar.style.background = "rgba(255, 255, 255, 0.9)";
    } else {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.05)";
        navbar.style.background = "rgba(255, 255, 255, 0.7)";
    }
});


// ================ Génération des formes décoratives en arrière-plan ================
const shapesContainer = document.createElement("div");
shapesContainer.style.position = "fixed";
shapesContainer.style.top = "0";
shapesContainer.style.left = "0";
shapesContainer.style.width = "100vw";
shapesContainer.style.height = "100vh";
shapesContainer.style.pointerEvents = "none";
shapesContainer.style.zIndex = "-1";
document.body.appendChild(shapesContainer);

function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}

const colors = [
    "rgba(54, 113, 149, 0.06)",
    "rgba(40, 80, 110, 0.05)",
    "rgba(30, 60, 90, 0.04)",
    "rgba(20, 40, 60, 0.035)",
    "rgba(10, 20, 30, 0.03)"
];

function createShape() {
    const shape = document.createElement("div");
    const size = randomBetween(60, 120);
    shape.style.position = "absolute";
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.borderRadius = `${randomBetween(30, 50)}% ${randomBetween(30, 50)}% ${randomBetween(30, 50)}% ${randomBetween(30, 50)}% / ${randomBetween(30, 50)}% ${randomBetween(30, 50)}% ${randomBetween(30, 50)}% ${randomBetween(30, 50)}%`;
    shape.style.background = colors[Math.floor(Math.random() * colors.length)];
    shape.style.left = `${randomBetween(0, 100)}vw`;
    shape.style.top = `${randomBetween(0, 100)}vh`;
    shape.style.filter = "blur(1.5px)";
    shape.style.transition = "transform 10s linear";
    shapesContainer.appendChild(shape);

    setTimeout(() => {
        shape.style.transform = `translate(${randomBetween(-100, 100)}px, ${randomBetween(-100, 100)}px) scale(${randomBetween(0.8, 1.2)}) rotate(${randomBetween(-30, 30)}deg)`;
    }, 100);

    setInterval(() => {
        shape.style.transform = `translate(${randomBetween(-100, 100)}px, ${randomBetween(-100, 100)}px) scale(${randomBetween(0.8, 1.2)}) rotate(${randomBetween(-30, 30)}deg)`;
    }, 10000);
}

for (let i = 0; i < 6; i++) {
    createShape();
}

// ================ Menu burger pour navigation mobile ================
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
    navList.classList.toggle("open");
});

