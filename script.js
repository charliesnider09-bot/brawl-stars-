

// MINI BATTLE ARENA
let arenaScore = 0;
let arenaTime = 30;
let arenaInterval;
let arenaRunning = false;

const target = document.getElementById("target");

function moveTarget() {
  const arena = document.getElementById("arena");

  target.style.left =
    Math.random() * (arena.clientWidth - 60) + "px";

  target.style.top =
    Math.random() * (arena.clientHeight - 60) + "px";
}

function startArena() {
  clearInterval(arenaInterval);

  arenaScore = 0;
  arenaTime = 30;
  arenaRunning = true;

  document.getElementById("arenaScore").textContent = 0;
  document.getElementById("arenaTime").textContent = 30;

  moveTarget();

  arenaInterval = setInterval(() => {
    arenaTime--;
    document.getElementById("arenaTime").textContent = arenaTime;

    if (arenaTime <= 0) {
      clearInterval(arenaInterval);
      arenaRunning = false;
      alert("Game over! Your score: " + arenaScore);
    }
  }, 1000);
}

target.addEventListener("click", () => {
  if (!arenaRunning) return;

  arenaScore++;
  document.getElementById("arenaScore").textContent = arenaScore;
  moveTarget();
});

// GUESS THE BRAWLER
const brawlers = [
  {name: "Shelly", emoji: "💥"},
  {name: "Colt", emoji: "🔫"},
  {name: "Spike", emoji: "🌵"},
  {name: "Leon", emoji: "🦎"},
  {name: "Nita", emoji: "🐻"},
  {name: "Dynamike", emoji: "💣"}
];

let guessScore = 0;
let currentAnswer = "";

function startGuess() {
  guessScore = 0;
  document.getElementById("guessScore").textContent = 0;
  nextQuestion();
}

function nextQuestion() {
  const correct =
    brawlers[Math.floor(Math.random() * brawlers.length)];

  currentAnswer = correct.name;

  document.getElementById("brawlerQuestion").textContent =
    "Which Brawler is " + correct.emoji + "?";

  const choices = [correct.name];

  while (choices.length < 4) {
    const random =
      brawlers[Math.floor(Math.random() * brawlers.length)].name;

    if (!choices.includes(random)) {
      choices.push(random);
    }
  }

  choices.sort(() => Math.random() - 0.5);

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  choices.forEach(name => {
    const button = document.createElement("button");
    button.textContent = name;

    button.onclick = () => {
      if (name === currentAnswer) {
        guessScore++;
        document.getElementById("guessScore").textContent =
          guessScore;
        nextQuestion();
      } else {
        document.getElementById("brawlerQuestion").textContent =
          "Incorrect! The answer was " + currentAnswer +
          ". Press START to try again!";
        answers.innerHTML = "";
      }
    };

    answers.appendChild(button);
  });
}
