
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

const questionText = document.getElementById("questionText");
const statusText = document.getElementById("statusText");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

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

function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function moveRope() {
  // Зургийн голлуулах байрлалыг хадгална.
  ropeGroup.style.setProperty(
    "--rope-offset",
    `${ropeOffset}px`
  );
}

function createButtons(container, options, team) {
  container.replaceChildren();

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

  // Асуултын дугаар харуулахгүй.
  questionText.textContent = question.question;
  statusText.textContent = "";

  const options = shuffle(question.options);

  createButtons(leftAnswers, options, "left");
  createButtons(rightAnswers, options, "right");
}

function colorAnswers(container, selected, correct) {
  const buttons = container.querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === correct) {
      button.classList.add("correct");
    } else if (button.textContent === selected) {
      button.classList.add("wrong");
    }
  });
}

function chooseAnswer(team, selected) {
  if (gameOver || nextTimer !== null) return;

  const question = gameQuestions[questionIndex];
  const correct = selected === question.correctAnswer;

  if (team === "left") {
    if (leftAnswered) return;

    leftAnswered = true;
    leftCorrect = correct;

    if (correct) {
      leftScore++;

      // Баг 1 зөв хариулбал зүүн тийш
      ropeOffset = Math.max(
        -WIN_DISTANCE,
        ropeOffset - ROPE_STEP
      );
    }

    colorAnswers(
      leftAnswers,
      selected,
      question.correctAnswer
    );

  } else {
    if (rightAnswered) return;

    rightAnswered = true;
    rightCorrect = correct;

    if (correct) {
      rightScore++;

      // Баг 2 зөв хариулбал баруун тийш
      ropeOffset = Math.min(
        WIN_DISTANCE,
        ropeOffset + ROPE_STEP
      );
    }

    colorAnswers(
      rightAnswers,
      selected,
      question.correctAnswer
    );
  }

  // Зөв хариулсан даруйд олс хөдөлнө.
  moveRope();

  // Хоёр баг хариулсны дараа асуулт солигдоно.
  if (leftAnswered && rightAnswered) {
    nextTimer = setTimeout(() => {
      nextTimer = null;

      if (Math.abs(ropeOffset) >= WIN_DISTANCE) {
        finishGame();
      } else {
        questionIndex++;
        showQuestion();
      }
    }, NEXT_DELAY);
  }
}

function finishGame() {
  gameOver = true;

  let result;

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

  leftAnswers.replaceChildren();
  rightAnswers.replaceChildren();
}

function restartGame() {
  if (nextTimer !== null) {
    clearTimeout(nextTimer);
  }

  nextTimer = null;

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

restartBtn.addEventListener("click", restartGame);
restartGame();
