const gubbySound = new Audio("meme/gubby.mp3");

gubbySound.volume = 1;

document.addEventListener("click", () => {
    gubbySound.currentTime = 0;

    gubbySound.play().catch(error => {
        console.log("Не удалось включить звук:", error);
    });
});
