
const questions = [
  {
    question: "'Мэд + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["мэдье", "мэдъе", "мэдээ", "мэдие"],
    correctAnswer: "мэдье"
  },
  {
    question: "'Үз + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["үзье", "үзъе", "үзээ", "үзие"],
    correctAnswer: "үзье"
  },
  {
    question: "'Хий + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хийе", "хийье", "хийъе", "хие"],
    correctAnswer: "хийе"
  },
  {
    question: "'Яв + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["явъя", "явя", "явья", "явая"],
    correctAnswer: "явъя"
  },
  {
    question: "'Ав + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["авъя", "авя", "авья", "авая"],
    correctAnswer: "авъя"
  },
  {
    question: "'Бод + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["бодъё", "бодё", "бодьё", "бодое"],
    correctAnswer: "бодъё"
  },
  {
    question: "'Ол + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["олъё", "олё", "ольё", "олое"],
    correctAnswer: "олъё"
  },
  {
    question: "'Хар + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["харъя", "харя", "харья", "харая"],
    correctAnswer: "харъя"
  },
  {
    question: "'Сур + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["суръя", "суря", "сурья", "сурая"],
    correctAnswer: "суръя"
  },
  {
    question: "'Унш + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["уншъя", "уншя", "уншья", "уншая"],
    correctAnswer: "уншъя"
  },
  {
    question: "'Ир + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["ирье", "ире", "иръе", "ирээ"],
    correctAnswer: "ирье"
  },
  {
    question: "'Өг + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["өгье", "өгөе", "өгъе", "өгие"],
    correctAnswer: "өгье"
  },
  {
    question: "'Суу + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["сууя", "суужя", "суулья", "сууъя"],
    correctAnswer: "сууя"
  },
  {
    question: "'Уу + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["ууя", "уъя", "уья", "ууъя"],
    correctAnswer: "ууя"
  },
  {
    question: "'Дуул + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["дуулъя", "дууля", "дуулья", "дуулай"],
    correctAnswer: "дуулъя"
  },
  {
    question: "'Тат + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["татъя", "татя", "татья", "татая"],
    correctAnswer: "татъя"
  },
  {
    question: "'Бич + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["бичье", "биче", "бичъе", "бичээ"],
    correctAnswer: "бичье"
  },
  {
    question: "'Хэл + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хэлье", "хэле", "хэлъе", "хэлээ"],
    correctAnswer: "хэлье"
  },
  {
    question: "'Хүлээ + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хүлээе", "хүлээье", "хүлээъе", "хүлэе"],
    correctAnswer: "хүлээе"
  },
  {
    question: "'Бай + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["байя", "байъя", "байья", "бая"],
    correctAnswer: "байя"
  },
  {
    question: "'Ор + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["оръё", "орё", "орьё", "орое"],
    correctAnswer: "оръё"
  },
  {
    question: "'Бос + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["босъё", "босё", "босьё", "босое"],
    correctAnswer: "босъё"
  },
  {
    question: "'Хүр + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хүрье", "хүре", "хүръе", "хүрээ"],
    correctAnswer: "хүрье"
  },
  {
    question: "'Тэмүүл + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["тэмүүлье", "тэмүүле", "тэмүүлъе", "тэмүүлээ"],
    correctAnswer: "тэмүүлье"
  },
  {
    question: "'Барь + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["барья", "баръя", "бария", "барьъя"],
    correctAnswer: "барья"
  }
];

// HTML элементүүд
const questionText = document.getElementById("questionText");
const statusText = document.getElementById("statusText");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

// Тохиргоо
const ROPE_STEP = 12;
const WIN_DISTANCE = 60;
const NEXT_DELAY = 1200;

let gameQuestions = [];
let questionIndex = 0;
let ropeOffset = 0;
let leftScore = 0;
let rightScore = 0;

let leftAnswered = false;
let rightAnswered = false;
let leftCorrect = false;
let rightCorrect = false;
let gameOver = false;
let nextTimer = null;

// Асуултуудыг холих
function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// Олсны байрлал
function moveRope() {
  ropeGroup.style.transition = "transform 0.6s ease";
  ropeGroup.style.transform = `translateX(${ropeOffset}px)`;
}

// Товч үүсгэх
function createButtons(container, options, team) {
  container.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = option;

    button.addEventListener("click", () => {
      chooseAnswer(team, option);
    });

    container.appendChild(button);
  });
}

// Асуулт харуулах
function showQuestion() {
  if (questionIndex >= gameQuestions.length) {
    finishGame();
    return;
  }

  leftAnswered = false;
  rightAnswered = false;
  leftCorrect = false;
  rightCorrect = false;

  const question = gameQuestions[questionIndex];

  questionText.textContent = question.question;
  statusText.textContent = "";

  const options = shuffle(question.options);

  createButtons(leftAnswers, options, "left");
  createButtons(rightAnswers, options, "right");
}

// Сонгосон хариултыг өнгөөр ялгах
function colorAnswers(container, selected, correct) {
  const buttons = container.querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === correct) {
      button.style.backgroundColor = "#22c55e";
      button.style.color = "#ffffff";
      button.style.borderColor = "#16a34a";
    } else if (button.textContent === selected) {
      button.style.backgroundColor = "#ef4444";
      button.style.color = "#ffffff";
      button.style.borderColor = "#dc2626";
    }
  });
}

// Хариулт сонгох
function chooseAnswer(team, selected) {
  if (gameOver || nextTimer !== null) return;

  const question = gameQuestions[questionIndex];
  const correct = selected === question.correctAnswer;

  if (team === "left") {
    if (leftAnswered) return;

    leftAnswered = true;
    leftCorrect = correct;

    if (correct) leftScore++;

    colorAnswers(
      leftAnswers,
      selected,
      question.correctAnswer
    );
  } else {
    if (rightAnswered) return;

    rightAnswered = true;
    rightCorrect = correct;

    if (correct) rightScore++;

    colorAnswers(
      rightAnswers,
      selected,
      question.correctAnswer
    );
  }

  if (leftAnswered && rightAnswered) {
    resolveRound();
  }
}

// Хоёр баг хариулсны дараах хөдөлгөөн
function resolveRound() {
  if (leftCorrect && !rightCorrect) {
    ropeOffset -= ROPE_STEP;
  } else if (rightCorrect && !leftCorrect) {
    ropeOffset += ROPE_STEP;
  }

  ropeOffset = Math.max(
    -WIN_DISTANCE,
    Math.min(WIN_DISTANCE, ropeOffset)
  );

  moveRope();

  nextTimer = setTimeout(() => {
    nextTimer = null;

    if (Math.abs(ropeOffset) >= WIN_DISTANCE) {
      finishGame();
      return;
    }

    questionIndex++;
    showQuestion();
  }, NEXT_DELAY);
}

// Ялагч тодруулах
function finishGame() {
  gameOver = true;

  let result = "";

  if (ropeOffset < 0) {
    result = "🏆 БАГ 1 ЯЛЛАА!";
  } else if (ropeOffset > 0) {
    result = "🏆 БАГ 2 ЯЛЛАА!";
  } else if (leftScore > rightScore) {
    result = "🏆 БАГ 1 ЯЛЛАА!";
  } else if (rightScore > leftScore) {
    result = "🏆 БАГ 2 ЯЛЛАА!";
  } else {
    result = "🤝 ХОЁР БАГ ТЭНЦЛЭЭ!";
  }

  questionText.textContent = result;
  statusText.textContent = "";

  leftAnswers.innerHTML = "";
  rightAnswers.innerHTML = "";
}

// Дахин тоглох
function restartGame() {
  if (nextTimer !== null) {
    clearTimeout(nextTimer);
    nextTimer = null;
  }

  gameQuestions = shuffle(questions);
  questionIndex = 0;
  ropeOffset = 0;
  leftScore = 0;
  rightScore = 0;

  leftAnswered = false;
  rightAnswered = false;
  leftCorrect = false;
  rightCorrect = false;
  gameOver = false;

  moveRope();
  showQuestion();
}

// Асуултын харагдах байдал
questionText.style.color = "#e60000";
questionText.style.fontSize = "40px";
questionText.style.fontWeight = "900";
questionText.style.textAlign = "center";
questionText.style.lineHeight = "1.4";

statusText.style.display = "none";

// Тоглоом эхлүүлэх
restartBtn.addEventListener("click", restartGame);
restartGame();
