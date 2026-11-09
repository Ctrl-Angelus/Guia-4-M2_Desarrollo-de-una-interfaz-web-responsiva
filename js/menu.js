const toggle = document.querySelector(".menu-toggle")
const navBar = document.getElementById("navigation")

function setMenu(open) {
    navBar.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}

toggle.addEventListener("click", () => {
    setMenu(!navBar.classList.contains("open"));
});

navBar.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) setMenu(false);
});

window.matchMedia("(min-width: 769px)").addEventListener("change", () => setMenu(false));

let resizeTimer;
window.addEventListener("resize", () => {
    document.documentElement.classList.add("no-transition");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.documentElement.classList.remove("no-transition");
    }, 150);
});