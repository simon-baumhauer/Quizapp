let questionsHTML = [{
        "question": "Who Invented HTML?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "What does the &lt;a&gt; tag mean?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Who sets the web standards?",
        "answer_1": "Apple",
        "answer_2": "Mircosoft",
        "answer_3": "Amazon",
        "answer_4": "The World Wide Web Consortium",
        "right_answer": 4
    },
    {
        "question": "How to embed a website into a website?",
        "answer_1": "&lt;iframe&gt",
        "answer_2": "&lt;frame&gt",
        "answer_3": "&lt;frameset&gt",
        "answer_4": "&lt;a&gt",
        "right_answer": 1
    },
];

let questionsCSS = [{
        "question": "How can you created rounded corners using CSS3?",
        "answer_1": "border[round]: 30px",
        "answer_2": "corner-effect: round",
        "answer_3": "border-radius: 30px",
        "answer_4": "alpha-effect: round-corner",
        "right_answer": 3
    },
    {
        "question": "How to resize a background image using CSS3?",
        "answer_1": "background-size: 80px 60px",
        "answer_2": "bg-dimensions: 80px 60px",
        "answer_3": "background-proportion: 80px 60px",
        "answer_4": "alpha-effect: bg-resize 80px 60px",
        "right_answer": 1
    },
    {
        "question": "How to add text shadow using CSS3?",
        "answer_1": "font: shadowed 5px 5px 5px grey",
        "answer_2": "font-shadow: 5px 5px 5px grey",
        "answer_3": "text-shadow: 5px 5px 5px grey",
        "answer_4": "shadow: text 5px 5px 5px grey",
        "right_answer": 3
    },
    {
        "question": "How to force a word wrap using CSS3?",
        "answer_1": "word-wrap: break-word",
        "answer_2": "text-wrap: break-word",
        "answer_3": "text-wrap: force",
        "answer_4": "text-width: set",
        "right_answer": 1
    },
];

let questionsJS = [{
        "question": "To insert JavaScript into an HTML page, which tag is used?",
        "answer_1": "&lt;javascript&gt",
        "answer_2": "&lt;script&gt",
        "answer_3": "&lt;script=java&gt",
        "answer_4": "&lt;js&gt",
        "right_answer": 2
    },
    {
        "question": "What language defines the behavior of a web page?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "XML",
        "answer_4": "Java Script",
        "right_answer": 4
    },
    {
        "question": "Which of the following is a server-side Java Script object?",
        "answer_1": "Function",
        "answer_2": "File",
        "answer_3": "FileUpload",
        "answer_4": "Date",
        "right_answer": 2
    },
    {
        "question": "Which attribute needs to be changed to make elements invisible?",
        "answer_1": "visibilty",
        "answer_2": "visible",
        "answer_3": "invisibility",
        "answer_4": "invisible",
        "right_answer": 1
    },
];

let questionsResponsive = [{
        "question": "What do we use to define the display type, width, height, orientation and resolution of media devices?",
        "answer_1": "HTML tag",
        "answer_2": "Viewport meta tag",
        "answer_3": "JavaScript scripts",
        "answer_4": "CSS media queries",
        "right_answer": 4
    },
    {
        "question": "Which one of the following items will not achieve a responsive website?",
        "answer_1": "Media queries",
        "answer_2": "Fixed layout",
        "answer_3": "Flexible media",
        "answer_4": "Flexible layout",
        "right_answer": 2
    },
    {
        "question": "Where do you place the viewport metatag?",
        "answer_1": "&lt;head&gtsection",
        "answer_2": "Anywhere in an html page",
        "answer_3": "&lt;body&gtsection",
        "answer_4": "At the start before the &lt;html&gt tag",
        "right_answer": 1
    },
    {
        "question": "What is a viewport?",
        "answer_1": "It is the user's visible area of a web page on any display device.",
        "answer_2": "It is the width and height of a tablet device.",
        "answer_3": "It is the width and height of a mobile device.",
        "answer_4": "It is the width of any display device.",
        "right_answer": 1
    },
];
let questions = questionsHTML;

function questions_HTML() {
    document.getElementById('quizName').innerHTML = 'HTML';
    questions = questionsHTML;
    showQuestion();
    resetButtons()
}

function questions_CSS() {
    document.getElementById('quizName').innerHTML = 'CSS';
    questions = questionsCSS;
    showQuestion();
    resetButtons()
}

function questions_JS() {
    document.getElementById('quizName').innerHTML = 'JS';
    questions = questionsJS;
    showQuestion();
    resetButtons()
}

function questions_Responsive() {
    document.getElementById('quizName').innerHTML = 'Responsive Design';
    questions = questionsResponsive;
    showQuestion();
    resetButtons()
}

function init() {
    document.getElementById('pageNumber').innerHTML = questions.length;
    document.getElementById('questionNumber1.0').innerHTML = questions.length;
}

let currentQuestion = 0;
let score = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail_01.mp3');

function startGame() {
    document.getElementById('questionBody').style = '';
    document.getElementById('startScreen').style = 'display: none';
    showQuestion();
}


function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }

    function gameIsOver() {
        return currentQuestion >= questions.length;
    }
}

function updateProgressBar() {
    let percent = (currentQuestion) / questions.length;
    percent = Math.round(percent * 100)
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = `<span>A</span>${question['answer_1']}`
    document.getElementById('answer_2').innerHTML = `<span>B</span>${question['answer_2']}`
    document.getElementById('answer_3').innerHTML = `<span>C</span>${question['answer_3']}`
    document.getElementById('answer_4').innerHTML = `<span>D</span>${question['answer_4']}`
}

function startScreen() {
    document.getElementById('startScreen').style = '';
    document.getElementById('endSrceen').style = 'display: none';
    document.getElementById('questionBody').style = 'display: none';
}

function startGame() {
    document.getElementById('startScreen').style = 'display: none';
    document.getElementById('endSrceen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    showQuestion();
}

function showEndScreen() {
    document.getElementById('endSrceen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('score').innerHTML = `${score}/`;
    document.getElementById('progress-bar').innerHTML = `100%`;
    document.getElementById('progress-bar').style = `width: 100%;`;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber)) {
        document.getElementById(selection).parentNode.classList.add('success');
        document.getElementById(selection).firstChild.classList.add('success1');
        AUDIO_SUCCESS.play();
        score++;
    } else {
        document.getElementById(selection).parentNode.classList.add('danger');
        document.getElementById(selection).firstChild.classList.add('danger1');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('success');
        document.getElementById(idOfRightAnswer).firstChild.classList.add('success1');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
    init();

    function rightAnswerSelected(selectedQuestionNumber) {
        return selectedQuestionNumber == question['right_answer'];
    }

}


function nextQuestion() {
    document.getElementById('questionNumber').innerHTML =
        currentQuestion++;
    resetButtons()
    document.getElementById('next-button').disabled = true;
    showQuestion();
}

function resetButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('success');
    document.getElementById('answer_1').firstChild.classList.remove('success1');
    document.getElementById('answer_1').parentNode.classList.remove('danger');
    document.getElementById('answer_1').firstChild.classList.remove('danger1');
    document.getElementById('answer_2').parentNode.classList.remove('success');
    document.getElementById('answer_2').firstChild.classList.remove('success1');
    document.getElementById('answer_2').parentNode.classList.remove('danger');
    document.getElementById('answer_2').firstChild.classList.remove('danger1');
    document.getElementById('answer_3').parentNode.classList.remove('success');
    document.getElementById('answer_3').firstChild.classList.remove('success1');
    document.getElementById('answer_3').parentNode.classList.remove('danger');
    document.getElementById('answer_3').firstChild.classList.remove('danger1');
    document.getElementById('answer_4').parentNode.classList.remove('success');
    document.getElementById('answer_4').firstChild.classList.remove('success1');
    document.getElementById('answer_4').parentNode.classList.remove('danger');
    document.getElementById('answer_4').firstChild.classList.remove('danger1');
}

function replay() {
    questionNumber.innerHTML = 1;
    currentQuestion = 0;
    document.getElementById('progress-bar').innerHTML = `0%`;
    document.getElementById('progress-bar').style = `width: 0%;`;
    document.getElementById('questionBody').style = '';
    document.getElementById('endSrceen').style = 'display: none';
    score = 0;
    init();
}