let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "etwas neues?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('pageNumber').innerHTML = questions.length;
    document.getElementById('questionNumber1.0').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endSrceen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('score').innerHTML = `${currentQuestion}/`;
        document.getElementById('progress-bar').innerHTML = `100%`;
        document.getElementById('progress-bar').style = `width: 100%;`;
    } else {

        let percent = (currentQuestion) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;


        let question = questions[currentQuestion];
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question']
        document.getElementById('answer_1').innerHTML = question['answer_1']
        document.getElementById('answer_2').innerHTML = question['answer_2']
        document.getElementById('answer_3').innerHTML = question['answer_3']
        document.getElementById('answer_4').innerHTML = question['answer_4']
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
    init();
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