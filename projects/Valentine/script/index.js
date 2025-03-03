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
    const randomNotes = Math.floor(Math.random() * notes.length);
    p.textContent = notes[randomNotes];
}


wrongAnswer.addEventListener("mouseover", () => {
    wrongAnswer.style.left = Math.random() * 50 + "vw";
    wrongAnswer.style.top = Math.random() * 50 + "vh";
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
        element.style.display = "none"; // מסתיר אלמנטים מסוימים
    });

    h1.textContent = "I ❤️ U TOO!";
    h1.classList.add("container2");
    h1.style.fontSize = "7rem" 
    
    
    yes.innerHTML = `
    <h2 class="container2" style="color: rgb(174, 17, 74); font-size: 1rem;">I knew it hehe</h2> 
    <img src="./images/peach-goma-love.gif" alt="Exciting GIF!" width="300" class="container2">
`;

});





