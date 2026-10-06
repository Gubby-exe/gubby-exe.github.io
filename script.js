const gubbyClick = document.getElementById("gubbyClick");

if (gubbyClick) {
    gubbyClick.volume = 1;

    document.addEventListener("click", () => {
        gubbyClick.pause();
        gubbyClick.currentTime = 0;

        gubbyClick.play().catch(error => {
            console.log("Звук заблокирован браузером:", error);
        });
    });
}
