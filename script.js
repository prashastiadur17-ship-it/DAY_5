
const questions = [
    {
        question: "Which movie has the actor name 'Naina' in it?",
        options: [
            "Yeh Jawaani Hai Deewani",
            "Jab We Met",
            "Wake Up Sid",
            "Happy New Year"
        ],
        answer: 0
    },

    {
        question: "Which is the best entertainment show?",
        options: [
            "Wagle Ki Duniya",
            "Taarak Mehta Ka Ooltah Chashmah",
            "Crime Patrol",
            "Bigg Boss"
        ],
        answer: 1
    },

    {
        question: "Who played the role of Sid in Wake Up Sid?",
        options: [
            "Kartik",
            "Ranveer Singh",
            "Ranbir Kapoor",
            "Aditya Roy Kapoor"
        ],
        answer: 2
    },

    {
        question: "Which is the best animated movie?",
        options: [
            "Narasimha",
            "Kurukshetra",
            "Ramayana",
            "Adipurush"
        ],
        answer: 2
    }
];

const quizContainer =
    document.getElementById("quiz-container");

const showBtn =
    document.getElementById("show-btn");


function displayQuestions() {

    quizContainer.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {

        const currentQuestion = questions[i];

        const questionBox = document.createElement("div");

        questionBox.className = "question-box";

        const questionHeading = document.createElement("h3");

        questionHeading.textContent =
            (i + 1) + ". " + currentQuestion.question;

        questionBox.appendChild(questionHeading);

        for (let j = 0; j < currentQuestion.options.length; j++) {

            const label = document.createElement("label");

            label.className = "option";

            const radio = document.createElement("input");

            radio.type = "radio";

            radio.name = "question" + i;

            radio.value = j;

            const optionText = document.createTextNode(
                currentQuestion.options[j]
            );

            label.appendChild(radio);

            label.appendChild(optionText);

            questionBox.appendChild(label);
        }

        quizContainer.appendChild(questionBox);
    }
}

showBtn.addEventListener("click", displayQuestions);
