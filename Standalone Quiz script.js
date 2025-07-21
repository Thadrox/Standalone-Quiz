// --- Quiz Data (Highly Nested for Subject/Class/Term) ---
// You can extend this data structure with more questions, subjects, classes, and terms.
const allQuizData = {
    "Mathematics": {
        "JSS1": {
            "Term1": [
                { question: "What is 2 + 3?", options: ["4", "5", "6", "7"], correct: "5" },
                { question: "Solve for x: 2x + 5 = 15", options: ["x=2", "x=5", "x=10", "x=7"], correct: "x=5" },
                { question: "What is the square root of 9?", options: ["2", "3", "4", "5"], correct: "3" },
                { question: "If a = 5, what is 3a?", options: ["8", "15", "10", "12"], correct: "15" }
            ],
            "Term2": [
                { question: "Area of a rectangle with length 5 and width 3?", options: ["8", "15", "16", "25"], correct: "15" },
                { question: "What is 10 / 2?", options: ["3", "4", "5", "6"], correct: "5" },
                { question: "Next number in sequence: 1, 3, 5, 7, ...", options: ["8", "9", "10", "11"], correct: "9" }
            ]
        },
        "JSS2": {
            "Term1": [
                { question: "Simplify: 3a + 2a", options: ["5a", "6a", "3a2", "5"], correct: "5a" },
                { question: "What is the value of pi (approx)?", options: ["3.1", "3.14", "3.41", "3.01"], correct: "3.14" },
                { question: "What is the perimeter of a square with side 5?", options: ["10", "20", "25", "30"], correct: "20" }
            ]
        }
    },
    "English": {
        "JSS1": {
            "Term1": [
                { question: "Which of these is a verb?", options: ["happy", "jump", "tree", "slowly"], correct: "jump" },
                { question: "Complete the proverb: 'Actions speak louder than...'", options: ["words", "thoughts", "songs", "silence"], correct: "words" },
                { question: "Identify the pronoun: 'She runs fast.'", options: ["She", "runs", "fast"], correct: "She" }
            ],
            "Term2": [
                { question: "What is the plural of 'child'?", options: ["childs", "children", "childish", "childies"], correct: "children" },
                { question: "Choose the antonym of 'start'.", options: ["begin", "finish", "continue", "create"], correct: "finish" }
            ]
        }
    },
    "Science": {
        "JSS1": {
            "Term1": [
                { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "N2"], correct: "H2O" },
                { question: "Which planet is closest to the sun?", options: ["Earth", "Mars", "Venus", "Mercury"], correct: "Mercury" },
                { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"], correct: "Mitochondria" }
            ]
        }
    }
};

// --- DOM Elements ---
const setupScreen = document.getElementById('setup-screen');
const studentNameInput = document.getElementById('student-name');
const subjectSelect = document.getElementById('subject-select');
const classSelect = document.getElementById('class-select');
const termSelect = document.getElementById('term-select');
const startQuizBtn = document.getElementById('start-quiz-btn');

const quizScreen = document.getElementById('quiz-screen');
const displayName = document.getElementById('display-name');
const displayClass = document.getElementById('display-class');
const displaySubject = document.getElementById('display-subject');
const timerDisplay = document.getElementById('timer');
const questionNumberDisplay = document.getElementById('question-number'); // New element
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const submitQuizButton = document.getElementById('submit-quiz-btn');

const resultsScreen = document.getElementById('results-screen');
const resultsName = document.getElementById('results-name');
const resultsClass = document.getElementById('results-class');
const resultsSubject = document.getElementById('results-subject');
const resultsTerm = document.getElementById('results-term');
const scoreDisplay = document.getElementById('score-display');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// --- Quiz State Variables ---
let currentQuizData = []; // This will hold the specific questions for the selected subject/class/term
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionButton = null;
let timerInterval;
const QUIZ_DURATION_SECONDS = 300; // 5 minutes = 300 seconds
let timeLeft = QUIZ_DURATION_SECONDS;

// User's selected details
let userName = '';
let userSubject = '';
let userClass = '';
let userTerm = '';

// Array for 'A.', 'B.', 'C.' labels
const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F']; // Extend if you have more than 6 options per question

// --- Functions ---

/** Initializes the setup screen, populating subjects and setting up listeners. */
function initSetupScreen() {
    // Populate subjects dropdown
    populateDropdown(subjectSelect, Object.keys(allQuizData));

    // Disable class/term selects and start button initially
    classSelect.disabled = true;
    termSelect.disabled = true;
    startQuizBtn.disabled = true;

    // Add event listeners for input and dropdown changes to validate form
    studentNameInput.addEventListener('input', checkFormValidity);

    subjectSelect.addEventListener('change', () => {
        // Populate classes based on selected subject
        populateDropdown(classSelect, Object.keys(allQuizData[subjectSelect.value] || {}));
        classSelect.disabled = !subjectSelect.value; // Enable/disable class select
        termSelect.disabled = true; // Reset term when subject changes
        termSelect.innerHTML = '<option value="">Select Term</option>'; // Clear terms
        checkFormValidity();
    });

    classSelect.addEventListener('change', () => {
        // Populate terms based on selected subject and class
        populateDropdown(termSelect, Object.keys(allQuizData[subjectSelect.value][classSelect.value] || {}));
        termSelect.disabled = !classSelect.value; // Enable/disable term select
        checkFormValidity();
    });

    termSelect.addEventListener('change', checkFormValidity); // Check validity when term changes
    startQuizBtn.addEventListener('click', startQuiz); // Start quiz on button click

    // Ensure setup screen is visible
    showScreen(setupScreen);
}

/** Populates a <select> element with options from an array. */
function populateDropdown(selectElement, optionsArray) {
    // Set default option based on the dropdown's ID
    const defaultText = `Select ${selectElement.id.replace('-select', '').replace('-', ' ').trim()}`;
    selectElement.innerHTML = `<option value="">${defaultText}</option>`;
    optionsArray.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

/** Checks if all required fields on the setup screen are filled to enable the start button. */
function checkFormValidity() {
    const isNameValid = studentNameInput.value.trim() !== '';
    const isSubjectSelected = subjectSelect.value !== '';
    const isClassSelected = classSelect.value !== '';
    const isTermSelected = termSelect.value !== '';

    startQuizBtn.disabled = !(isNameValid && isSubjectSelected && isClassSelected && isTermSelected);
}

/** Starts the quiz, hides setup screen, and shows quiz screen. */
function startQuiz() {
    // Store user selections
    userName = studentNameInput.value.trim();
    userSubject = subjectSelect.value;
    userClass = classSelect.value;
    userTerm = termSelect.value;

    // Get the specific quiz data based on selections
    currentQuizData = allQuizData[userSubject]?.[userClass]?.[userTerm];

    if (!currentQuizData || currentQuizData.length === 0) {
        alert("No quiz questions found for this selection. Please choose different options.");
        return; // Stay on setup screen if no data
    }

    // Reset quiz state for a new session
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = QUIZ_DURATION_SECONDS;

    // Display user info in quiz header
    displayName.textContent = userName;
    displayClass.textContent = userClass;
    displaySubject.textContent = userSubject;

    // Start timer and load the first question
    startTimer();
    loadQuestion();
    showScreen(quizScreen); // Transition to quiz screen
}

/** Manages the quiz countdown timer. */
function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer to prevent multiple timers running
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's Up!";
            handleSubmitQuiz(); // Automatically submit when time runs out
        }
    }, 1000); // Update every 1 second (1000ms)
}

/** Loads and displays the current question and its options. */
function loadQuestion() {
    deselectOptions(); // Clear any visual selection from previous question
    selectedOptionButton = null; // Reset selected option for current question

    const currentQuestion = currentQuizData[currentQuestionIndex];
    questionNumberDisplay.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`; // Update question number
    questionTextElement.textContent = currentQuestion.question; // Display question text
    optionsContainer.innerHTML = ''; // Clear previous options from DOM

    // Create and append option buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = `${optionLabels[index]}. ${option}`; // Add A., B., C. prefix
        button.addEventListener('click', () => selectOption(button)); // Add click listener
        optionsContainer.appendChild(button);
    });

    // Adjust visibility of navigation buttons (Next/Submit)
    nextButton.style.display = 'block';
    submitQuizButton.style.display = 'none';
    if (currentQuestionIndex === currentQuizData.length - 1) { // If it's the last question
        nextButton.style.display = 'none'; // Hide Next
        submitQuizButton.style.display = 'block'; // Show Submit
    }
}

/** Handles selection of an answer option. */
function selectOption(button) {
    deselectOptions(); // Ensure only one option can be selected
    button.classList.add('selected'); // Apply 'selected' class for styling
    selectedOptionButton = button; // Store reference to the selected button
}

/** Removes 'selected' class from all option buttons. */
function deselectOptions() {
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.classList.remove('selected');
    });
}

/** Checks the selected answer against the correct answer and updates the score. */
function checkAnswer() {
    const currentQuestion = currentQuizData[currentQuestionIndex];
    if (selectedOptionButton) {
        // Extract the actual option text by removing the "A. " prefix
        const selectedText = selectedOptionButton.textContent.substring(selectedOptionButton.textContent.indexOf('.') + 2).trim();
        if (selectedText === currentQuestion.correct) {
            score++;
        }
    }
}

/** Handles the submission of the quiz (either by button click or time running out). */
function handleSubmitQuiz() {
    clearInterval(timerInterval); // Stop the timer
    checkAnswer(); // Check the answer for the last question (or current question if time ran out)

    // Populate results screen with user details and score
    resultsName.textContent = userName;
    resultsClass.textContent = userClass;
    resultsSubject.textContent = userSubject;
    resultsTerm.textContent = userTerm;
    scoreDisplay.textContent = `You scored ${score} out of ${currentQuizData.length} questions.`;

    showScreen(resultsScreen); // Transition to results screen
}

/** Resets the quiz to its initial state, returning to the setup screen. */
function restartQuiz() {
    // Reset all state variables
    currentQuestionIndex = 0;
    score = 0;
    selectedOptionButton = null;
    timeLeft = QUIZ_DURATION_SECONDS;
    userName = '';
    userSubject = '';
    userClass = '';
    userTerm = '';

    // Clear and reset setup screen inputs
    studentNameInput.value = '';
    subjectSelect.value = ''; // Reset subject dropdown
    classSelect.innerHTML = '<option value="">Select Class</option>'; // Clear and reset class dropdown
    classSelect.disabled = true;
    termSelect.innerHTML = '<option value="">Select Term</option>'; // Clear and reset term dropdown
    termSelect.disabled = true;
    startQuizBtn.disabled = true;

    initSetupScreen(); // Re-initialize the setup screen
}

/** Manages which screen is currently visible. */
function showScreen(screenToShow) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active-screen')); // Hide all screens
    screenToShow.classList.add('active-screen'); // Show the target screen
}


// --- Event Listeners for Navigation ---
nextButton.addEventListener('click', () => {
    if (!selectedOptionButton) { // Prevent proceeding without selecting an option
        alert("Please select an option before proceeding to the next question.");
        return;
    }
    checkAnswer(); // Check answer for current question
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuestion(); // Load next question
    } else {
        handleSubmitQuiz(); // If no more questions, submit quiz
    }
});

submitQuizButton.addEventListener('click', handleSubmitQuiz); // Submit quiz button
restartQuizBtn.addEventListener('click', restartQuiz); // Restart quiz button


// --- Initial Setup on Page Load ---
// Ensures that the DOM is fully loaded before trying to access elements
document.addEventListener('DOMContentLoaded', initSetupScreen);
