// Define the quiz questions and answers
const quizQuestions = [
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        options: ["10", "55", "'55'", "TypeError"],
        correctAnswer: "'55'"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
            "To refer to the current function",
            "To refer to the parent object",
            "To create a new object",
            "To access the global object"
        ],
        correctAnswer: "To refer to the parent object"
    },
    {
        question: "What is the purpose of the '=== operator in JavaScript?",
        options: [
            "To perform a strict equality comparison",
            "To perform a loose equality comparison",
            "To assign a value to a variable",
            "To concatenate strings"
        ],
        correctAnswer: "To perform a strict equality comparison"
    },
    {
        question: "What is the output of the following code?\n\nconsole.log(typeof 42);",
        options: ["number", "string", "undefined", "NaN"],
        correctAnswer: "number"
    },
    {
        question: "What is the purpose of the 'async/await' syntax in JavaScript?",
        options: [
            "To define an asynchronous function",
            "To handle errors in asynchronous code",
            "To pause the execution of a function until a Promise is resolved",
            "To handle events in the DOM"
        ],
        correctAnswer: "To pause the execution of a function until a Promise is resolved"
    },
    {
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        options: [
            "To declare a block-scoped variable",
            "To declare a global variable",
            "To declare a constant variable",
            "To declare a function"
        ],
        correctAnswer: "To declare a block-scoped variable"
    },
    {
        question: "What does the 'JSON' acronym stand for in JavaScript?",
        options: [
            "JavaScript Object Notation",
            "Java Source Object Notation",
            "JavaScript Oriented Notation",
            "Java Serialized Object Notation"
        ],
        correctAnswer: "JavaScript Object Notation"
    },
    {
        question: "What is the result of the following expression?\n\ntrue && false",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: "false"
    },
    {
        question: "What does the 'NaN' value represent in JavaScript?",
        options: [
            "'NaN' represents a negative number",
            "'NaN' represents a positive number",
            "'NaN' represents a non-numeric value",
            "'NaN' represents an infinite value"
        ],
        correctAnswer: "'NaN' represents a non-numeric value"
    },
    {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        options: [
            "To add an event handler function to an element",
            "To modify the style of an element",
            "To create a new element",
            "To remove an element from the DOM"
        ],
        correctAnswer: "To add an event handler function to an element"
    }
];


const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionContainer = document.getElementById('option-container');
const leaderboardContainer = document.getElementById('leaderboard-container');

// Initialize variables
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Display the current question and options
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Clear any existing options
    optionContainer.innerHTML = '';

    // Create and append the options
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', handleOptionClick);
        optionContainer.appendChild(optionElement);
    });
}

// Handle the user's option selection
function handleOptionClick(event) {

    const selectedOption = event.target;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Compare the selected option with the correct answer
    if (selectedOption.textContent === currentQuestion.correctAnswer) {
        showPopupSuccess('Correct!');
        correctAnswers++;
    } else {
        showPopupFailed('Wrong!');
        incorrectAnswers++;
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        setTimeout(() => {
            displayQuestion();
        }, 1500)
    } else {
        setTimeout(() => {
            displayLeaderboard();
        }, 1500)
    }
}

// Display a popup with the given message
function showPopupSuccess(message) {
    const popup = document.createElement('div');
    popup.classList.add('popupSuccess');
    popup.textContent = message;

    questionContainer.appendChild(popup);

    // Remove the popup after 1.5 seconds
    setTimeout(() => {
        questionContainer.removeChild(popup);
    }, 1500);
}
// Display a popup with the given message
function showPopupFailed(message) {
    const popup = document.createElement('div');
    popup.classList.add('popupFailed');
    popup.textContent = message;

    questionContainer.appendChild(popup);

    // Remove the popup after 1.5 seconds
    setTimeout(() => {
        questionContainer.removeChild(popup);
    }, 1500);
}

// Display the leaderboard
function displayLeaderboard() {

    quizContainer.style.display = 'none';
    leaderboardContainer.style.display = 'block';

    // Update the leaderboard with the user's score
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('incorrect-count').textContent = incorrectAnswers;
    document.getElementById('result').textContent = calculateResult();
}

// Calculate the user's result
function calculateResult() {
    const totalQuestions = quizQuestions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;

    if (percentage >= 80) {
        return 'Excellent!';
    } else if (percentage >= 60) {
        return 'Good job!';
    } else {
        return 'Keep practicing!';
    }
}

// Start the quiz when the page loads
window.addEventListener('load', () => {
    displayQuestion();
});
