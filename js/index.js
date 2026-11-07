const userPrefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

const darkModeButton = document.getElementById("dark-mode-toggle");
const darkToggle = darkModeButton.querySelector("#dark-toggle");
const lightToggle = darkModeButton.querySelector("#light-toggle");

const setTheme = (isDark) => {
    document.body.classList.toggle("dark", isDark);
    darkToggle.classList.toggle("hidden", isDark);
    lightToggle.classList.toggle("hidden", !isDark);
};

setTheme(userPrefersDarkTheme.matches);

darkModeButton.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    setTheme(!isDark);
});