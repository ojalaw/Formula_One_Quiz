// Get elements
const playButton = document.getElementById("play-button");
const introBox = document.querySelector(".intro-box");
const difficultyBox = document.querySelector("#difficulty");

// Play button click handler
playButton.addEventListener("click", () => {

    // Hide intro box
    introBox.classList.add("hidden");

    // Show difficulty box
    difficultyBox.classList.remove("hidden");
});