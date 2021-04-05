$(document).ready(function () {
    $("#dark-mode-toggle").click(function () {
        let newUrl = "/?mode=";
        let themeMode = "normal";
        const currentMode = $("#theme-mode").attr("href");
        themeMode = (currentMode.indexOf("normal") == -1) ? "normal" : "dark";
        localStorage.setItem("theme", themeMode);
        window.location.href = newUrl + themeMode;
    });
});
