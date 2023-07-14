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

// Difficulty level event listeners







// startQuiz() function










// loadQuiz() function














// nextButton event listener











// handleAnswer() function