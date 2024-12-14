const questions = [
    "What's the capital of France?", 
    "Who painted the Mona Lisa?",
    "What is the capital of Nigeria",
    "Who is the current world richest man",
    "What is the capital of Czech Rep.",
    "What currency is used in Czech Rep.",
    "What currency is used in Nigeria",
    "In which country is Dresden",
    "What is the most populated state in Nigeria",
    "The father of gentics is from which country"
];

const choicesArray = [
    ["Paris", "London", "Berlin", "Madrid"], 
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    ["Lagos", "Kano", "Cross River", "Abuja"],
    ["Jay Z", "Jeff Bezos", "Elon Musk", "Mark Zuckerberg"],
    ["Ostrava", "Borno", "Prague", "Zlin"],
    ["Euro", "Danish Krona", "Swiss Franc", "Czech Koruna"],
    ["US Dollar", "British Pounds", "Naira", "Cedis"],
    ["Czech Rep.", "Poland", "Netherlands", "Germany"],
    ["Rivers", "Anambra", "Lagos", "Kano"],
    ["Germany", "Czech Rep.", "italy", "Greece"]
];

const correctAnswers = ["Paris", "Da Vinci", "Abuja", "Elon Musk", "Prague", "Czech Koruna", "Naira", "Germany", "Lagos", "Czech Rep."];

const wrongAnswers = [];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerHTML = questions[currentQuestionIndex];
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`choice${i+1}`);
            btn.innerHTML = choicesArray[currentQuestionIndex][i];
            btn.value = choicesArray[currentQuestionIndex][i];
        }
      } else {
    document.getElementById('result').innerHTML =
      `You scored ${score} out of ${questions.length}!<br><br>`;


      if (wrongAnswers.length > 0) {
        let wrongList = "<h3>Incorrect Answers:</h3><ul>";
        
        wrongAnswers.forEach(item => {
            wrongList += `<li><strong>Q:</strong> ${item.question}<br>
                          <strong>Your Answer:</strong> ${item.userAnswer}<br>
                          <strong>Correct Answer:</strong> ${item.correctAnswer}</li><br>`;
        });
        
        wrongList += "</ul>";
        document.getElementById('result').innerHTML += wrongList;
    }

   
    document.getElementById('question').innerHTML = "";
    document.getElementById('choices').innerHTML = "";
}
}


function checkAnswer(btn) {
    if (btn.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    else {
        wrongAnswers.push({
            question: questions[currentQuestionIndex],
            userAnswer: btn.value,
            correctAnswer: correctAnswers[currentQuestionIndex],
        });
    }
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();