// Define quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Human", "Donkey", "Blue Whale"],
        correctAnswer: "Blue Whale"
    },
    {
        question: " Who wrote the famous play Hamlet?",
        options: ["John Adams", "Barack Obama", "Anne Hatheway", "William Shakespeare"],
        correctAnswer: "William Shakespeare"  
    },
    {
        question: " What is the chemical symbol for water?",
        options: ["O20", "H2O", "HO2", "H1O"],
        correctAnswer: "H2O"  
    },
    {
        question: " What is the capital city of Australia?",
        options: ["Melbourne", "Sydney", "Canberra", "Hargeisa"],
        correctAnswer: "Canberra"  
    },
    {
        question: " Which planet is known as the Morning Star or Evening Star?",
        options: ["Saturn", "Neptune", "Venus", "Pluto"],
        correctAnswer: "Venus"  
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Himilayas", "Golis", "Kilomanjaro", "Mount Everest"],
        correctAnswer: "Mount Everest"  
    },
    {
        question: " Who painted the famous artwork Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo Buonarroti"],
        correctAnswer: "Leonardo da Vinci"  
    },
    {
        question: "What is the currency of Japan?",
        options: ["Dollars", "Riyals", "Dinar", "Yen"],
        correctAnswer: "Yen"  
    },
    
];

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;

// Function to display current question
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => {
            checkAnswer(option);
        });
        optionsContainer.appendChild(optionButton);
    });
}

// Function to check answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        document.getElementById("score-value").textContent = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    alert(`Quiz completed! Your score is ${score}/${quizQuestions.length}`);
    
}

// Event listener for "Next Question" button
document.getElementById("next-question").addEventListener("click", () => {
    displayQuestion();
});

// Display the first question when the page loads
displayQuestion();