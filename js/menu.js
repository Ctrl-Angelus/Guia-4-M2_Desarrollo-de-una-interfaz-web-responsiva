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