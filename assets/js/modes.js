$(document).ready(function () {
    $("#dark-mode-toggle").click(function () {
        var newUrl = "";
        const currentMode = $("#theme-mode").attr("href");
        if (currentMode.indexOf("normal") == -1) {
            newUrl = "/?mode=normal";
        } else {
            newUrl = "/?mode=dark";
        }
        window.location.href = newUrl;
    });
});
