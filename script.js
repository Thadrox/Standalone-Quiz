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
    },
    "Information Technology": {
        "JSS1": {
            "Term1": [
                { question: "Which of these is NOT an input device?", 
                options: ["Mouse", "Keyboard", "Monitor", "Microphone"], 
                correct: "Monitor" },
                { question: "What does CPU stand for?", 
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit"], 
                correct: "Central Processing Unit" },
                { question: "Which of these is used to store data permanently?", 
                options: ["RAM", "ROM", "Hard Disk", "Cache Memory"], 
                correct: "Hard Disk" },
                
                { question: "What is the brain of the computer called?", 
                options: ["Monitor", "Keyboard", "CPU", "Printer"], 
                correct: "CPU" },
               { question: "Which device displays the output from a computer?", 
                options: ["Printer", "Speaker", "Monitor", "Scanner"], 
                correct: "Monitor" },
                { question: "What is the full meaning of WWW?", 
                options: ["World Wide Web", "World Wide Wonder", "Web Wide World", "World Wide Window"], 
                correct: "World Wide Web" },
                { question: "A set of instructions that tells the computer what to do is called:", 
                options: ["Hardware", "Software", "Data", "Network"], 
                correct: "Software" },
                { question: "Which of these is a common operating system?", 
                options: ["Microsoft Word", "Google Chrome", "Windows", "Adobe Photoshop"], 
                correct: "Windows" },
                { question: "What is the term for connecting computers together to share resources?", 
                options: ["Processing", "Networking", "Printing", "Typing"], 
                correct: "Networking" },
                { question: "Which of these is an example of an output device?", 
                options: ["Mouse", "Microphone", "Speaker", "Scanner"], 
                correct: "Speaker"},
               { question: "What is the primary function of a printer?", 
                options: ["To display images", "To make sound", "To produce hard copies of documents", "To scan documents"], 
                correct: "To produce hard copies of documents" },
               { question: "Which of these is a popular search engine?", 
                options: ["Facebook", "YouTube", "Google", "WhatsApp"], 
                correct: "Google" },
               { question: "What is a 'folder' used for on a computer?", 
                options: ["To play music", "To store and organize files", "To browse the internet", "To type documents"], 
                correct: "To store and organize files" },
               { question: "Which input device is used to control a pointer on the screen?", 
                options: ["Keyboard", "Mouse", "Scanner", "Printer"], 
                correct: "Mouse" },
               { question: "What is the process of starting up a computer called?", 
                options: ["Shutting down", "Sleeping", "Booting", "Restarting"], 
                correct: "Booting" },
               { question: "Which of these is a benefit of using computers?", 
                options: ["They are always slow", "They cannot store much data", "They make work faster and easier", "They are only for playing games"], 
                correct: "They make work faster and easier" },
               { question: "What is the name for a small picture on a computer screen that represents a program or file?", 
                options: ["Window", "Button", "Icon", "Menu"], 
                correct: "Icon" },
               { question: "Which component supplies power to the entire computer system?", 
                options: ["Motherboard", "CPU", "Power Supply Unit (PSU)", "RAM"], 
                correct: "Power Supply Unit (PSU)" },
              { question: "What does 'URL' stand for?", 
                options: ["Universal Resource Locator", "Uniform Resource Link", "United Resource List", "Under Resource Location"], 
                correct: "Uniform Resource Link" },
              { question: "Which of these is a common way to protect a computer from unauthorized access?", 
                options: ["Turning it off", "Setting a password", "Leaving it on all the time", "Sharing it with everyone"], 
                correct: "Setting a password" },
              { question: "What is the primary purpose of a keyboard?",
                options: ["To display images", "To make sound", "To input text and commands", "To print documents"],
                correct: "To input text and commands" },
               { question: "Which of these is a type of computer memory that loses its content when power is off?",
                options: ["Hard Disk", "ROM", "RAM", "Flash Drive"],
                correct: "RAM"
            },
            {
                question: "What is an 'email' primarily used for?",
                options: ["Playing games", "Sending and receiving digital messages", "Watching videos", "Listening to music"],
                correct: "Sending and receiving digital messages"
            },
            {
                question: "Which device is used to capture images or documents and convert them into digital format?",
                options: ["Printer", "Scanner", "Monitor", "Speaker"],
                correct: "Scanner"
            },
            {
                question: "What is a 'web browser' used for?",
                options: ["Typing documents", "Creating spreadsheets", "Accessing websites on the internet", "Playing video games"],
                correct: "Accessing websites on the internet"
            },
            {
                question: "Which of these is a major component found inside the computer case?",
                options: ["Mouse", "Keyboard", "Motherboard", "Monitor"],
                correct: "Motherboard"
            },
            {
                question: "What is 'data' in computing terms?",
                options: ["Instructions for the computer", "Raw facts, figures, and symbols", "A type of computer program", "A computer output device"],
                correct: "Raw facts, figures, and symbols"
            },
            {
                question: "Which of these protects a computer from viruses and other malicious software?",
                options: ["Microsoft Word", "Antivirus software", "Google Chrome", "Paint"],
                correct: "Antivirus software"
            },
            {
                question: "What is the act of connecting to the internet called?",
                options: ["Downloading", "Uploading", "Browse", "Connecting online"],
                correct: "Connecting online"
            },
            {
                question: "Which of these is an example of a portable storage device?",
                options: ["Hard Disk", "Monitor", "USB Flash Drive", "CPU"],
                correct: "USB Flash Drive"
            },
            {
                question: "What is the small blinking vertical line that shows where you are typing on a screen called?",
                options: ["Pointer", "Icon", "Cursor", "Scroll bar"],
                correct: "Cursor"
            },
            {
                question: "Which of these is used to listen to audio output from the computer privately?",
                options: ["Speakers", "Printer", "Headphones", "Microphone"],
                correct: "Headphones"
            },
               { question: "What does 'Wi-Fi' allow devices to do?",
                options: ["Connect to a printer", "Connect to the internet wirelessly", "Store files permanently", "Charge their batteries"],
                correct: "Connect to the internet wirelessly" },
               { question: "Which term describes physical parts of a computer that you can touch?",
                options: ["Software", "Data", "Hardware", "Program"],
                correct: "Hardware" },
               { question: "What is the main function of the 'Delete' key on a keyboard?",
                options: ["To move the cursor", "To capitalize letters", "To remove text or files", "To save a document"],
                correct: "To remove text or files" }
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
    deselectOptions(); // Ensure only one opt
