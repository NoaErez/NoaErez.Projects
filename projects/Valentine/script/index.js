const wrongAnswer = document.getElementById("wrongAnswer");
const p = document.getElementById("p");
const correctAnswer = document.getElementById("correctAnswer");



function tryMe() {
    const notes = [
        "So..?",
        "Haven't decided yet?",
        "Are you even trying?",
        "Is asking *me* gonna make you feel better?",
        "JUST ANSWER ALREADY"
    ];
    const randomNotes = Math.floor(Math.random() * 4);
    p.textContent = notes[randomNotes];
}


wrongAnswer.addEventListener("mouseover", () => {
    wrongAnswer.style.left = Math.random() * 90 + "vw";
    wrongAnswer.style.top = Math.random() * 90 + "vh";
    tryMe();

});

wrongAnswer.addEventListener("click", () => {
    wrongAnswer.style.left = Math.random() * 90 + "vw";
    wrongAnswer.style.top = Math.random() * 90 + "vh";
    tryMe();
});


const elementsToHide = document.querySelectorAll(".choices, p");
const yes = document.getElementById("yes");


correctAnswer.addEventListener("click", function () {
    elementsToHide.forEach(element => {
        element.style.display = "none";
        h1.textContent = "I ❤️ U TOO!"
    });

    yes.innerHTML =
        `<img src="./images/valentines-day-love-you.gif" alt="Exciting GIF!" width="200">`;

});




