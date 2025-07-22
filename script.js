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
    "Information Technology": {
        "JSS1": {
            "Term3": [
                { question: "Which one is a type of computer?", options: ["Scanner", "Laptop", "Keyboard", "Printer"], correct: "Laptop" },
                { question: "What does the 'C' in ICT stand for?", options: ["Computer", "Communication", "Cable", "Control"], correct: "Communication" },
                { question: "A device that allows you to type into a computer is called?", options: ["Mouse", "Monitor", "Keyboard", "CPU"], correct: "Keyboard" },
                { question: "The device that moves the cursor on the screen is the?", options: ["Speaker", "Mouse", "Monitor", "Scanner"], correct: "Mouse" },
                { question: "What is a monitor used for?", options: ["Typing", "Seeing output", "Sending emails", "Programming"], correct: "Seeing output" },
                { question: "A printer is used to produce?", options: ["Soft copy", "Hard copy", "Digital files", "Web pages"], correct: "Hard copy" },
                { question: "Which of these is an example of an input device?", options: ["Printer", "Monitor", "Mouse", "Speaker"], correct: "Mouse" },
                { question: "The brain of the computer is the?", options: ["Monitor", "Keyboard", "CPU", "Mouse"], correct: "CPU" },
                { question: "The full meaning of CPU is?", options: ["Central Power Unit", "Central Processing Unit", "Computer Processing Unit", "Control Panel Unit"], correct: "Central Processing Unit" },
                { question: "What is the main function of the CPU?", options: ["Display pictures", "Type letters", "Process data", "Print documents"], correct: "Process data" },
                { question: "What does 'ICT' stand for?", options: ["Information Control Technology", "International Communication Tools", "Information and Communication Technology", "Information Computer Text"], correct: "Information and Communication Technology" },
                { question: "Which of the following is not a part of the computer?", options: ["Mouse", "Keyboard", "Book", "Monitor"], correct: "Book" },
                { question: "The part of the computer used for drawing is?", options: ["Paint", "Excel", "Word", "Notepad"], correct: "Paint" },
                { question: "Which one is a storage device?", options: ["Scanner", "Flash drive", "Monitor", "Mouse"], correct: "Flash drive" },
                { question: "What is a computer virus?", options: ["An insect", "A human sickness", "A harmful program", "A keyboard key"], correct: "A harmful program" },
                { question: "Which of these is an output device?", options: ["Mouse", "Monitor", "Keyboard", "Scanner"], correct: "Monitor" },
                { question: "Software that helps the computer work is called?", options: ["System software", "Mouse", "Hardware", "CD-ROM"], correct: "System software" },
                { question: "Microsoft Word is used for?", options: ["Playing games", "Watching movies", "Typing documents", "Browse"], correct: "Typing documents" },
                { question: "Which key is used to move to the next line when typing?", options: ["Backspace", "Enter", "Shift", "Tab"], correct: "Enter" },
                { question: "Which of the following is a function of ICT?", options: ["Cooking", "Cleaning", "Sending messages", "Sweeping"], correct: "Sending messages" },
                { question: "What is data?", options: ["Typed words", "Processed information", "Raw facts", "Internet Browse"], correct: "Raw facts" },
                { question: "Information is?", options: ["Input", "Processed data", "Computer device", "Raw facts"], correct: "Processed data" },
                { question: "Which of these is NOT a storage device?", options: ["CD", "Flash", "Keyboard", "Hard disk"], correct: "Keyboard" },
                { question: "Which key is used to erase characters?", options: ["Tab", "Enter", "Shift", "Backspace"], correct: "Backspace" },
                { question: "Which part of the computer saves data permanently?", options: ["RAM", "ROM", "CPU", "Monitor"], correct: "ROM" },
                { question: "Which of these is a type of software?", options: ["Monitor", "Keyboard", "Microsoft Excel", "Printer"], correct: "Microsoft Excel" },
                { question: "A person who uses the computer is called a?", options: ["Computer", "CPU", "User", "Monitor"], correct: "User" },
                { question: "Which of these is a function of a mouse?", options: ["Clicking and pointing", "Typing", "Printing", "Drawing"], correct: "Clicking and pointing" },
                { question: "A full screen picture on a computer is called?", options: ["Wallpaper", "Spreadsheet", "Document", "Link"], correct: "Wallpaper" },
                { question: "A program used for Browse the internet is?", options: ["WordPad", "Paint", "Web browser", "Excel"], correct: "Web browser" },
                { question: "A file saved on the computer is stored in the?", options: ["Memory", "Recycle Bin", "Folder", "Clipboard"], correct: "Folder" },
                { question: "Which one of the following is used to draw and colour?", options: ["Excel", "Paint", "PowerPoint", "Notepad"], correct: "Paint" },
                { question: "Microsoft Excel is mainly used for?", options: ["Typing", "Drawing", "Calculations", "Browse"], correct: "Calculations" },
                { question: "Which device is used to record your voice into a computer?", options: ["Speaker", "Printer", "Microphone", "Modem"], correct: "Microphone" },
                { question: "A folder is used to?", options: ["Install programs", "Save files", "Display pictures", "Print documents"], correct: "Save files" }
            ]
        },
        "JSS2": {
            "Term3": [
                { question: "What does ICT stand for?", options: ["Information and Communication Technology", "Internet Communication Tool", "Information Control Technology", "Interactive Computer Training"], correct: "Information and Communication Technology" },
                { question: "Which device is used to enter data into a computer?", options: ["Monitor", "Keyboard", "Printer", "Speaker"], correct: "Keyboard" },
                { question: "The part of a computer that displays output is the?", options: ["Mouse", "Monitor", "CPU", "Scanner"], correct: "Monitor" },
                { question: "Which of these is an example of an input device?", options: ["Speaker", "Keyboard", "Projector", "Monitor"], correct: "Keyboard" },
                { question: "What is software?", options: ["Physical parts of a computer", "Programs and applications", "Input devices", "Computer casing"], correct: "Programs and applications" },
                { question: "What is the full meaning of CPU?", options: ["Central Programming Unit", "Central Processing Unit", "Computer Power Unit", "Control Panel Unit"], correct: "Central Processing Unit" },
                { question: "Which of the following stores information permanently?", options: ["RAM", "ROM", "Cache", "Register"], correct: "ROM" },
                { question: "Which of these is NOT a storage device?", options: ["Hard disk", "Flash drive", "Mouse", "Memory card"], correct: "Mouse" },
                { question: "A website address is also called a?", options: ["Email", "Username", "URL", "Domain"], correct: "URL" },
                { question: "Which key is used to delete characters to the left of the cursor?", options: ["Enter", "Shift", "Backspace", "Tab"], correct: "Backspace" },
                { question: "A virus in computing is?", options: ["Computer hardware", "Programming language", "Malicious software", "Antivirus"], correct: "Malicious software" },
                { question: "An example of a web browser is?", options: ["Windows", "Chrome", "Linux", "Excel"], correct: "Chrome" },
                { question: "Which of the following is used to protect your computer from viruses?", options: ["Paint", "WordPad", "Antivirus", "Excel"], correct: "Antivirus" },
                { question: "The main function of a scanner is to?", options: ["Print documents", "Send emails", "Convert paper to digital", "Copy documents"], correct: "Convert paper to digital" },
                { question: "Which of these is used for printing hard copies?", options: ["Monitor", "Printer", "Modem", "Mouse"], correct: "Printer" },
                { question: "Which device connects a computer to the internet?", options: ["Scanner", "Printer", "Modem", "Keyboard"], correct: "Modem" },
                { question: "Software designed to do specific tasks is called?", options: ["System software", "Utility software", "Application software", "Malware"], correct: "Application software" },
                { question: "What does WWW stand for?", options: ["World Web Wide", "Wide World Web", "World Wide Web", "Web World Wide"], correct: "World Wide Web" },
                { question: "Which of the following is an operating system?", options: ["Word", "Windows", "Chrome", "Excel"], correct: "Windows" },
                { question: "Which of these is NOT an output device?", options: ["Monitor", "Speaker", "Keyboard", "Printer"], correct: "Keyboard" },
                { question: "What is the brain of the computer?", options: ["Monitor", "CPU", "Mouse", "RAM"], correct: "CPU" },
                { question: "Which file extension is used for Microsoft Word documents?", options: [".exe", ".docx", ".jpg", ".mp3"], correct: ".docx" },
                { question: "What is the function of a mouse?", options: ["Type text", "Store data", "Point and click", "Display graphics"], correct: "Point and click" },
                { question: "An email is used for?", options: ["Printing documents", "Online chatting", "Sending and receiving messages", "Editing pictures"], correct: "Sending and receiving messages" },
                { question: "Where is data temporarily stored during computer operation?", options: ["ROM", "RAM", "Hard disk", "CD"], correct: "RAM" },
                { question: "Which of the following is an example of system software?", options: ["Microsoft Word", "CorelDRAW", "Windows OS", "PowerPoint"], correct: "Windows OS" },
                { question: "What is the purpose of a firewall?", options: ["Print documents", "Protect against viruses", "Secure the network", "Improve graphics"], correct: "Secure the network" },
                { question: "What is the process of starting a computer called?", options: ["Loading", "Booting", "Refreshing", "Initiating"], correct: "Booting" },
                { question: "The storage capacity of a CD is about?", options: ["700MB", "2GB", "4GB", "1TB"], correct: "700MB" },
                { question: "Which of these is a programming language?", options: ["HTTP", "Python", "USB", "LAN"], correct: "Python" },
                { question: "Which of the following is not a type of computer?", options: ["Desktop", "Laptop", "Printer", "Tablet"], correct: "Printer" },
                { question: "Which of these helps in creating and editing spreadsheets?", options: ["Word", "Excel", "Access", "Paint"], correct: "Excel" },
                { question: "Ctrl + C is used to?", options: ["Paste", "Copy", "Cut", "Delete"], correct: "Copy" },
                { question: "Which part of the computer stores data long-term?", options: ["RAM", "ROM", "Hard Disk", "Cache"], correct: "Hard Disk" },
                { question: "The smallest unit of computer memory is?", options: ["Byte", "Bit", "Kilobyte", "Megabyte"], correct: "Bit" }
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
const resultsTerm = document.getElementById('results-term'); // Corrected typo here
const scoreDisplay = document.getElementById('score-display');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
