// Footer href
function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

function activateTitleOnScroll() {
    const titles = document.querySelectorAll(".title-name");

    titles.forEach((title) => {
        const rect = title.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= 0 && rect.top <= windowHeight / 2) {
            title.classList.add("active-title");
        } else {
            title.classList.remove("active-title");
        }
    });
}

window.addEventListener("scroll", activateTitleOnScroll);
window.addEventListener("load", activateTitleOnScroll);
