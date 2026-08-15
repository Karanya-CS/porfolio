//HERO TEXT FADE IN

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";

        setTimeout(() => {
            hero.style.transition = "all 1s ease";
            hero.style.opacity = "10";
            hero.style.transform = "translateY(0)";
        }, 1000);

    }

});
