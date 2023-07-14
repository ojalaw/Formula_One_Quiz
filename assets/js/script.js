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
      {
        text: "What does it mean when a driver is on pole?",
        answers: [
          { text: "They climbed a pole before the race", isCorrect: false },
          { text: "They have qualified for the race fastest", isCorrect: true },
          { text: "They have qualified for the race slowest", isCorrect: false },
          { text: "They have qualified in third place", isCorrect: false },
        ],
      },
      {
        text:
          "What colour flag is waved to a driver to indicate that there is a fast car approaching and they should move off of the racing line?",
        answers: [
          { text: "Blue", isCorrect: true },
          { text: "Red", isCorrect: false },
          { text: "Yellow", isCorrect: false },
          { text: "Orange", isCorrect: false },
        ],
      },
      {
        text: "What colour is the sidewall of a hard compound tyre?",
        answers: [
          { text: "Red", isCorrect: false },
          { text: "White", isCorrect: true },
          { text: "Yellow", isCorrect: false },
          { text: "Green", isCorrect: false },
        ],
      },
      {
        text:
          "In the 2023 F1 season, Daniel Ricciardo is the reserve driver for which team?",
        answers: [
          { text: "Red Bull Racing", isCorrect: true },
          { text: "Mercedes", isCorrect: false },
          { text: "Ferrari", isCorrect: false },
          { text: "Alpine Racing", isCorrect: false },
        ],
      },
      {
        text:
          "Which current British driver has won 7 World Championships?",
        answers: [
          { text: "Lewis Hamilton", isCorrect: true },
          { text: "Lando Norris", isCorrect: false },
          { text: "George Russell", isCorrect: false },
          { text: "Nigel Mansell", isCorrect: false },
        ],
      },
      {
        text: "What does it mean when race engineers tell drivers to 'box box'?",
        answers: [
          { text: "The driver should slow down", isCorrect: false },
          { text: "The driver should speed up", isCorrect: false },
          { text: "The driver should come into the pits", isCorrect: true },
        ],
      },
      {
        text:
          "How many races will be hosted in the USA in the 2023 F1 season?",
        answers: [
          { text: "None", isCorrect: false },
          { text: "1", isCorrect: false },
          { text: "2", isCorrect: false },
          { text: "3", isCorrect: true },
        ],
      },
      {
        text: "Who was the F1 world champion in the F1 2022 season?",
        answers: [
          { text: "Michael Schumacher", isCorrect: false },
          { text: "Valteri Bottas", isCorrect: false },
          { text: "Lewis Hamilton", isCorrect: false },
          { text: "Max Verstappen", isCorrect: true },
        ],
      },
      {
        text:
          "Who are the 2 McLaren drivers for the F1 2023 season?",
        answers: [
          { text: "Lando Norris and Oscar Piastri", isCorrect: true },
          { text: "Lewis Hamilton and George Russell", isCorrect: false },
          { text: "Lando Norris and Max Verstappen", isCorrect: false },
          { text: "Oscar Piastri and Lance Stroll", isCorrect: false },
        ],
      },
      {
        text:
          "Which one of these drivers secured a seat in an F1 team for the first time in 2023?",
        answers: [
          { text: "Lance Stroll", isCorrect: false },
          { text: "Lando Norris", isCorrect: false },
          { text: "Nyck De Vries", isCorrect: true },
          { text: "Sergio Perez", isCorrect: false },
        ],
      },
    ],
    hard: [
      {
        text: "In which year did Lewis Hamilton win his first world title?",
        answers: [
          { text: "2008", isCorrect: true },
          { text: "2010", isCorrect: false },
          { text: "2005", isCorrect: false },
          { text: "2006", isCorrect: false },
        ],
      },
      {
        text: "How many times did Juan Manuel Fangio win the world Championship?",
        answers: [
          { text: "3", isCorrect: false },
          { text: "4", isCorrect: false },
          { text: "8", isCorrect: false },
          { text: "5", isCorrect: true },
        ],
      },
      {
        text: "What does DRS stand for?",
        answers: [
          { text: "Drag Reduction System", isCorrect: true },
          { text: "Drivers Responsive System", isCorrect: false },
          { text: "Drive Right Soon", isCorrect: false },
          { text: "Don't Rev So much", isCorrect: false },
        ],
      },
      {
        text: "How many sectors are there in a race?",
        answers: [
          { text: "20", isCorrect: false },
          { text: "10", isCorrect: false },
          { text: "5", isCorrect: false },
          { text: "3", isCorrect: true },
        ],
      },
      {
        text: "What time does a driver need to be within the driver in front to use DRS?",
        answers: [
          { text: "2 sec", isCorrect: false },
          { text: "1 sec", isCorrect: true },
          { text: "0.5 sec", isCorrect: false },
          { text: "5 sec", isCorrect: false },
        ],
      },
      {
        text: "Which of the following tracks are street circuits?",
        answers: [
          { text: "Monaco", isCorrect: true },
          { text: "Silverstone", isCorrect: false },
          { text: "Monza", isCorrect: false },
          { text: "Melbourne", isCorrect: false },
        ],
      },
      {
        text: "The 'Wall of Champions' is a famous corner on a track in which country?",
        answers: [
          { text: "Spain", isCorrect: false },
          { text: "Italy", isCorrect: false },
          { text: "USA", isCorrect: false },
          { text: "Canada", isCorrect: true },
        ],
      },
      {
        text: "The 'Eau Rouge' part of the track is present at what circuit?",
        answers: [
          { text: "Abu Dhabi", isCorrect: false },
          { text: "Bahrain", isCorrect: false },
          { text: "Saudi Arabia", isCorrect: false },
          { text: "Spa", isCorrect: true },
        ],
      },
      {
        text: "Who produces tyres for the F1 teams in 2023?",
        answers: [
          { text: "Pirelli", isCorrect: true },
          { text: "Bridgestone", isCorrect: false },
          { text: "Yamaha", isCorrect: false },
          { text: "Halfords", isCorrect: false },
        ],
      },
      {
        text: "When was the maiden Formula 1 world championship?",
        answers: [
          { text: "1950", isCorrect: true },
          { text: "1970", isCorrect: false },
          { text: "1980", isCorrect: false },
          { text: "1955", isCorrect: false },
        ],
      },
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
  










