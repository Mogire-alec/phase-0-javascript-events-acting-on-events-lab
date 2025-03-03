// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const rightBoundary = 400; // Change this to match your game's width
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left < rightBoundary - dodger.offsetWidth) {
        dodger.style.left = `${left + 10}px`;
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});