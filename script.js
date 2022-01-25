let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt; ?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wer setzt die Webstandards?",
        "answer_1": "Apple",
        "answer_2": "Mircosoft",
        "answer_3": "Amazon",
        "answer_4": "The World Wide Web Consortium",
        "right_answer": 4
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt",
        "answer_2": "&lt;frame&gt",
        "answer_3": "&lt;frameset&gt",
        "answer_4": "&lt;a&gt",
        "right_answer": 1
    },
];

let currentQuestion = 0;
let score = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail_01.mp3');

function init() {
    document.getElementById('pageNumber').innerHTML = questions.length;
    document.getElementById('questionNumber1.0').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length
}

function updateProgressBar() {
    let percent = (currentQuestion) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = question['answer_1']
    document.getElementById('answer_2').innerHTML = question['answer_2']
    document.getElementById('answer_3').innerHTML = question['answer_3']
    document.getElementById('answer_4').innerHTML = question['answer_4']
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
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        score++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
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
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function replay() {
    currentQuestion = 0;
    document.getElementById('questionBody').style = '';
    document.getElementById('endSrceen').style = 'display: none';
    init();
}