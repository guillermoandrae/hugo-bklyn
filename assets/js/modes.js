$(document).ready(function () {
    const currentMode = $("#theme-mode").attr("href");
    const isDarkModeOn = (currentMode.indexOf("normal") == -1);
    let $darkModeToggle = $("#dark-mode-toggle");
    let $darkModeToggleIcon = $darkModeToggle.find("i");

    if (isDarkModeOn) {
        $darkModeToggleIcon.removeClass("fa-toggle-off");
        $darkModeToggleIcon.addClass("fa-toggle-on");
    } else {
        $darkModeToggleIcon.removeClass("fa-toggle-on");
        $darkModeToggleIcon.addClass("fa-toggle-off");
    }

    $darkModeToggle.click(function () {
        let newUrl = window.location.pathname + "?mode=";
        let themeMode = "normal";
        themeMode = (isDarkModeOn) ? "normal" : "dark";
        localStorage.setItem("theme", themeMode);
        window.location.href = newUrl + themeMode;
    });
});
