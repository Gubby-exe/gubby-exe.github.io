const gubbyClick = document.getElementById("gubbyClick");
document.addEventListener("click", () => {
    gubbyClick.currentTime = 0;
    gubbyClick.play();
});
