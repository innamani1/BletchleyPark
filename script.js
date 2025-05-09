// script.js
const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: "4" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars" },
    history, [
        { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correct: "George Washington" },
        { question: "What year did World War II end?", options: ["1943", "1945", "1950", "1939"], correct: "1945" }
    ],
    science, [
        { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], correct: "H2O" },
    ],
    geography, [
        { question: "Which continent is the largest?", options: ["Europe", "North America", "Asia", "Africa"], correct: "Asia" },
        { question: "What is the capital city of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correct: "Ottawa" }
    ]

];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startQuiz() {
    loadQuestion();
    timer = setInterval(updateTimer, 1000);
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    questionElement.textContent = quizData[currentQuestionIndex].question;
    answersElement.innerHTML = "";

    quizData[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
    }

    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        resetTimer();
    } else {
        endQuiz();
    }
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft === 0) {
        nextQuestion();
        resetTimer();
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(updateTimer, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-container").innerHTML = `<h2>Quiz Completed!</h2><p>Your final score: ${score}</p>`;
}

window.onload = startQuiz;