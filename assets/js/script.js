let questions = {
    easy: [
       {
        text: 'What is the main colour of the Ferrari team?',
        answers: [
          { text: 'Red', isCorrect: true },
          { text: 'Blue', isCorrect: false },
          { text: 'Green', isCorrect: false },
          { text: 'Yellow', isCorrect: false }
        ]
      },
      {
        text: 'Which of these flags indicates the race is over?',
        answers: [
          { text: 'Red', isCorrect: false },
          { text: 'Yellow', isCorrect: false },
          { text: 'Chequered', isCorrect: true },
          { text: 'Blue', isCorrect: false }
        ]
      },
      {
        text: 'The Silverstone Grand Prix is based in which country?',
        answers: [
          { text: 'UK', isCorrect: true },
          { text: 'France', isCorrect: false },
          { text: 'USA', isCorrect: false },
          { text: 'Spain', isCorrect: false }
        ]
      },
      {
        text: 'What nationality is Fernando Alonso?',
        answers: [
          { text: 'Spanish', isCorrect: true },
          { text: 'French', isCorrect: false },
          { text: 'Italian', isCorrect: false },
          { text: 'Portuguese', isCorrect: false }
        ]
      },
      {
        text: 'How many wheels do Formula 1 cars have?',
        answers: [
          { text: '4', isCorrect: true },
          { text: '3', isCorrect: false },
          { text: '6', isCorrect: false },
          { text: '2', isCorrect: false }
        ]
      },
      {
        text: 'When the race has finished, where do the drivers collect their winners trophy?',
        answers: [
          { text: 'The Pitlane', isCorrect: false },
          { text: 'The Podium', isCorrect: true },
          { text: 'The Stewards Office', isCorrect: false },
          { text: 'The Middle of The Track', isCorrect: false }
        ]
      },
      {
        text: 'How many teams are there competing in the 2023 F1 season?',
        answers: [
          { text: '10', isCorrect: true },
          { text: '12', isCorrect: false },
          { text: '8', isCorrect: false },
          { text: '20', isCorrect: false }
        ]
      },
      {
        text: 'How many drivers does each team have? (Reserve drivers excluded)',
        answers: [
          { text: '2', isCorrect: true },
          { text: '3', isCorrect: false },
          { text: '4', isCorrect: false },
          { text: '5', isCorrect: false }
        ]
      },
      {
        text: 'Which of these is NOT a F1 racing team?',
        answers: [
          { text: 'Red Bull Racing', isCorrect: false },
          { text: 'Mercedes', isCorrect: false },
          { text: 'Mclaren', isCorrect: false },
          { text: 'Mini Cooper Racing', isCorrect: true }
        ]
      },
      {
        text: 'Which of these is NOT a formula one driver?',
        answers: [
          { text: 'Lewis Hamilton', isCorrect: false },
          { text: 'Max Verstappen', isCorrect: false },
          { text: 'Charles Leclerc', isCorrect: false },
          { text: 'Boris Johnson', isCorrect: true }
        ]
      }
    ],
    medium: [
      // medium level questions and answers go here...
    ],
    hard: [
      // hard level questions and answers go here...
    ],
  };

  // variables for keeping track of the index of the question and quiz difficulty
let currentQuestionIndex;
let difficulty;

    // Get elements
const playButton = document.querySelector("#play-button");
const introBox = document.querySelector("#intro-box");
const difficultyBox = document.querySelector("#difficulty");
const easyButton = document.querySelector("#easy");
const mediumButton = document.querySelector("#medium");
const hardButton = document.querySelector("#hard");
const quizBox = document.querySelector("#quiz");
const questionText = document.querySelector("#question-text");
const answersContainer = document.querySelector("#answers-container");
const nextButton = document.querySelector("#next-question");

// Play button click handler
playButton.addEventListener("click", () => {

    // Hide intro box
    introBox.classList.add("hidden");

    // Show difficulty box
    difficultyBox.classList.remove("hidden");
});

// Difficulty buttons event listener
easyButton.addEventListener("click", () => startQuiz('easy'));
mediumButton.addEventListener("click", () => startQuiz('medium'));
hardButton.addEventListener("click", () => startQuiz('hard'));

// startQuiz() function

function startQuiz(selectedDifficulty) {
    // Hide difficulty box
    difficultyBox.classList.add("hidden");
    // Show the quiz
    quizBox.classList.remove("hidden");
    // Get difficulty level from the button that was clicked
    difficulty = selectedDifficulty;
    console.log(questions[difficulty].length);
    currentQuestionIndex = 0;
    loadQuestion(questions[difficulty][currentQuestionIndex]);
  }

// loadQuiz() function

function loadQuestion(question) {
    // Update the question text
    questionText.textContent = question.text;
  
    // Clear any old answers
    answersContainer.innerHTML = '';
  
    // Create a new button for each answer
    for (let i = 0; i < question.answers.length; i++) {
      let answer = question.answers[i];
      let answerButton = document.createElement("button");
      answerButton.textContent = answer.text;
      answerButton.addEventListener("click", (event) => {
        handleAnswer(answer.isCorrect, event.target);
      });
      answersContainer.appendChild(answerButton);
    }
  }

// Get the message element
const answerMessage = document.querySelector("#answer-message");


// handleAnswer() function
function handleAnswer(isCorrect, target) {
  // log whether the answer was correct to test function
  console.log(isCorrect ? "Correct!" : "Incorrect!");

  // Mark the answer as correct or incorrect
  target.classList.add(isCorrect ? 'correct' : 'incorrect');

  // Update the answer message and make it visible
  answerMessage.textContent = isCorrect ? "Correct answer!" : "Incorrect answer!";
  answerMessage.classList.remove('hidden');

  // Show the next button
  nextButton.classList.remove("hidden");
}

// nextButton event listener
nextButton.addEventListener("click", () => {
    // Move to the next question
    currentQuestionIndex++;
    
    // Check if there are more questions
    if(currentQuestionIndex < questions[difficulty].length) {
      // Load the next question
      loadQuestion(questions[difficulty][currentQuestionIndex]);
      // Hide the next button again
      nextButton.classList.add("hidden");
      answerMessage.classList.add("hidden")
    } else {
      // End of the quiz! Hide the quiz box and show a message or score
      quizBox.classList.add("hidden");
      console.log("Quiz complete!");
    }
  });
  










