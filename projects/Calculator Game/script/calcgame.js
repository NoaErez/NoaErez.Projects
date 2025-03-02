//להתחיל את המשחק בטור 1 וניקוד אפס. יש עד עשרה ניסיונות
//להגריל שני מספרים
//להגריל אופרטור
//לייצר משוואה ביניהם
//לבקש מהשתמש לפתור את המשוואה. אם פתר נכונה הוא קיבל נקודה

let turn = 1;
let score = 0;

startgame = () => {
    turn++;
    randomNumbers();

};

newgame = () => {
    turn = 0;
    score = 0;
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Score: ${score}`;
    const questionElement = document.getElementById("question");
    questionElement.innerText = "";
    const answerButtons = document.getElementById("buttons");
    answerButtons.innerHTML = "";

    endGame.innerText = "";
    startgame(); // התחלת משחק חדש

};

const randomNumbers = () => {
    if (turn > 10) {
        endGame.textContent = "GAME OVER";
        endGame.classList.add("orangeText");
        return;

    };

    let operators = ["+", "-", "*", "/"];
    let rolloperator = Math.floor(Math.random() * operators.length);
    const operator = operators[rolloperator]
    num1 = Math.floor(Math.random() * 31);
    num2 = Math.floor(Math.random() * 31);
    let answer = equation(num1, num2, operator); // חישוב התוצאה לפי המפעיל והמספרים
    let questions = `${num1} ${operator} ${num2}`; // ביטוי לשאלה שנוצרת
    console.log(questions); // הדפסת השאלה
    UserAnswer(questions, answer);// מעביר את השאלה ואת התשובה לפונקציה
    console.log(`Answer: ${answer}`); // הדפסת התשובה הנכונה (לבדיקה)
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Score: ${score}`;

};



UserAnswer = (questions, answer) => {
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("buttons");

    questionElement.innerText = `${questions} = ?`;
    answerButtons.innerHTML = "";   // ניקוי כפתורים קודמים

    const answers = [answer];  // יצירת תשובות (תשובה נכונה ועוד 3 תשובות שגויות)
    while (answers.length < 4) {
        let randomAnswer = Math.floor(Math.random() * 31); // יוצר מספר אקראי שלם בין 0 ל-30
        answers.push(randomAnswer);
    };



    // ערבוב התשובות
    answers.sort(() => Math.random() - 0.5);
    // יצירת כפתורים
    answers.forEach((AnsButton) => {
        const button = document.createElement("button"); //תופס את הדיב
        button.innerText = AnsButton; //קובע את הטקסט של הכפתור להיות אחד מהתשובות במערך
        button.onclick = () => checkAnswer(AnsButton, answer); //checkAnswer משווה בין התשובה שנחברה לנכונה בפונקציה 
        answerButtons.appendChild(button);//הוספת הכפתור כילד של ה-div
    });
};



checkAnswer = (questions, answer) => { //מקבלת את השאלה (questions) והתשובה הנכונה (answer) כפרמטרים

    if (parseFloat(questions) === parseFloat(answer)) { //בודקת אם התשובה של המשתמש נכונה באמצעות השוואת ערכים (parseFloat כדי להשוות מספרים).
        score++;
        console.log("Good Job!");
    } else {
        console.log(`Wrong.. The correct answer is ${answer}`);
    };

    // עדכון הניקוד והמשך לשאלה הבאה
    startgame();
};



equation = (num1, num2, operator) => {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            result = Math.floor(result);
            break;
    }
    return result;

};



