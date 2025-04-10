const themeToggle = document.getElementById("themeToggle");

// Check user preference in localStorage
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙 Dark Mode";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Save preference in localStorage
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️ Light Mode";
    }
});