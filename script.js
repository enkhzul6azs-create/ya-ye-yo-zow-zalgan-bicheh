
const questions = [
  {
    question: "'Оч + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["очё", "очъё", "очье", "очиё"],
    correctAnswer: "очъё"
  },
  {
    question: "'Үнс + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["үнсе", "үнъе", "үнсье", "үнсъе"],
    correctAnswer: "үнсье"
  },
  {
    question: "'Уя + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["уяъя", "уяя", "уяье", "уяъё"],
    correctAnswer: "уяя"
  },
  {
    question: "'Мэд + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["мэдэе", "мэдье", "мэдъе", "мэдие"],
    correctAnswer: "мэдье"
  },
  {
    question: "'Хичээ + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хичээье", "хичээе", "хичээъе", "хичээьеэ"],
    correctAnswer: "хичээе"
  },
  {
    question: "'Хий + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хийье", "хийъе", "хийе", "хийэе"],
    correctAnswer: "хийе"
  },
  {
    question: "'Боль + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["больё", "болъё", "болё", "болье"],
    correctAnswer: "больё"
  },
  {
    question: "'Холь + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["холъё", "хольё", "холье", "холё"],
    correctAnswer: "хольё"
  },
  {
    question: "'Хорь + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хоръё", "хорё", "хорьё", "хорье"],
    correctAnswer: "хорьё"
  },
  {
    question: "'Харь + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["харъя", "харья", "харьъя", "харье"],
    correctAnswer: "харья"
  },
  {
    question: "'Бууд + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["буудая", "буудья", "буудъя", "буудъё"],
    correctAnswer: "буудъя"
  },
  {
    question: "'Алх + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["алхя", "алхья", "алхъя", "алхъё"],
    correctAnswer: "алхъя"
  },
  {
    question: "'Мөлх + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["мөлхе", "мөлхье", "мөлхъе", "мөлхие"],
    correctAnswer: "мөлхье"
  },
  {
    question: "'Хүлээ + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хүлээье", "хүлээе", "хүлээъе", "хүлэе"],
    correctAnswer: "хүлээе"
  },
  {
    question: "'Нуу + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["нуъя", "нуья", "нууя", "нууъя"],
    correctAnswer: "нууя"
  },
  {
    question: "'Нээ + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["нээе", "нээье", "нээъе", "нэе"],
    correctAnswer: "нээе"
  },
  {
    question: "'Хаа + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хаъя", "хаая", "хаья", "хааъя"],
    correctAnswer: "хаая"
  },
  {
    question: "'Нүү + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["нүүье", "нүүе", "нүүъе", "нүе"],
    correctAnswer: "нүүе"
  },
  {
    question: "'Буу + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["буъя", "буья", "бууя", "бууъя"],
    correctAnswer: "бууя"
  },
  {
    question: "'Суу + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["суъя", "сууя", "сууъя", "сууье"],
    correctAnswer: "сууя"
  },
  {
    question: "'Туу + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["туъя", "тууъя", "тууя", "туья"],
    correctAnswer: "тууя"
  },
  {
    question: "'Урууд + я' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["уруудя", "уруудъя", "уруудья", "уруудъё"],
    correctAnswer: "уруудъя"
  },
  {
    question: "'Өнхөр + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["өнхөре", "өнхөръе", "өнхөрье", "өнхрье"],
    correctAnswer: "өнхөрье"
  },
  {
    question: "'Өлгийд + е' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["өлгийде", "өлгийдье", "өлгийдъе", "өлгийдее"],
    correctAnswer: "өлгийдье"
  },
  {
    question: "'Оё + ё' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["оёъё", "оёё", "оёье", "оёо"],
    correctAnswer: "оёё"
  }
];

// ===================================
// ТОГЛООМЫН ҮНДСЭН ХУВЬСАГЧИД
// ===================================

let currentQuestion = 0;
let ropeOffset = 0;

let leftScore = 0;
let rightScore = 0;

let answers = {
  left: null,
  right: null
};

let gameOver = false;
let roundLocked = false;

const WIN_LIMIT = 180;
const PULL_STEP = 18;

// HTML элементүүд
const questionText = document.getElementById("questionText");
const statusText = document.getElementById("statusText");

const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");

const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

// ===================================
// САНАМСАРГҮЙ ДАРААЛАЛ
// ===================================

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] =
      [result[j], result[i]];
  }

  return result;
}

let gameQuestions = [];

// ===================================
// АСУУЛТ ХАРУУЛАХ
// ===================================

function showQuestion() {

  if (gameOver) return;

  if (currentQuestion >= gameQuestions.length) {
    finishGame();
    return;
  }

  answers = {
    left: null,
    right: null
  };

  roundLocked = false;

  const q = gameQuestions[currentQuestion];

  questionText.textContent =
    "Асуулт " + (currentQuestion + 1) +
    "/" + gameQuestions.length + ": " + q.question;

  statusText.textContent =
    "Хоёр баг хариултаа сонгоно уу!";

  createButtons(leftAnswers, "left", q);
  createButtons(rightAnswers, "right", q);
}

// ===================================
// ХАРИУЛТЫН ТОВЧ ҮҮСГЭХ
// ===================================

function createButtons(container, team, question) {

  container.innerHTML = "";

  const options = shuffle(question.options);

  options.forEach(option => {

    const button = document.createElement("button");

    button.textContent = option;

    button.addEventListener("click", function () {

      selectAnswer(team, option, button);

    });

    container.appendChild(button);

  });
}

// ===================================
// ХАРИУЛТ ШАЛГАХ
// ===================================

function selectAnswer(team, option, selectedButton) {

  if (gameOver || roundLocked) return;

  if (answers[team] !== null) return;

  const q = gameQuestions[currentQuestion];

  const isCorrect = option === q.correctAnswer;

  answers[team] = isCorrect;

  const container =
    team === "left" ? leftAnswers : rightAnswers;

  const buttons = container.querySelectorAll("button");

  buttons.forEach(button => {

    button.disabled = true;

    if (button.textContent === q.correctAnswer) {
      button.classList.add("correct");
    }

  });

  if (!isCorrect) {
    selectedButton.classList.add("wrong");
  }

  if (isCorrect) {

    if (team === "left") {
      leftScore++;
    } else {
      rightScore++;
    }

  }

  const teamName =
    team === "left" ? "Баг 1" : "Баг 2";

  statusText.textContent =
    teamName + ": " +
    (isCorrect ? "ЗӨВ ХАРИУЛЛАА!" : "БУРУУ ХАРИУЛЛАА!") +
    " | Оноо: " + leftScore + " : " + rightScore;

  if (answers.left !== null && answers.right !== null) {

    roundLocked = true;

    setTimeout(resolveRound, 1200);

  }
}

// ===================================
// ОЛС ТАТАХ ҮЙЛДЭЛ
// ===================================

function resolveRound() {

  if (gameOver) return;

  if (answers.left === true && answers.right !== true) {

    ropeOffset -= PULL_STEP;

    statusText.textContent =
      "💪 БАГ 1 ОЛСЫГ ӨӨРИЙН ТАЛ РУУ ТАТЛАА!";

  }

  else if (answers.right === true && answers.left !== true) {

    ropeOffset += PULL_STEP;

    statusText.textContent =
      "💪 БАГ 2 ОЛСЫГ ӨӨРИЙН ТАЛ РУУ ТАТЛАА!";

  }

  else if (answers.left && answers.right) {

    statusText.textContent =
      "Хоёр баг хоёулаа зөв хариуллаа! Олс хөдөлсөнгүй.";

  }

  else {

    statusText.textContent =
      "Хоёр баг хоёулаа буруу хариуллаа!";

  }

  // Олсны хөдөлгөөн
  ropeGroup.style.setProperty(
    "--rope-offset",
    ropeOffset + "px"
  );

  // Ялагч шалгах
  if (Math.abs(ropeOffset) >= WIN_LIMIT) {

    setTimeout(finishGame, 800);

    return;

  }

  currentQuestion++;

  setTimeout(showQuestion, 1200);

}

// ===================================
// ТОГЛООМЫН ЯЛАГЧ ТОДРУУЛАХ
// ===================================

function finishGame() {

  gameOver = true;

  leftAnswers.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });

  rightAnswers.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });

  questionText.textContent =
    "🏆 ТОГЛООМ ДУУСЛАА!";

  let winner = "";

  if (ropeOffset < 0) {

    winner = "🎉 БАГ 1 ЯЛЛАА! 🎉";

  }

  else if (ropeOffset > 0) {

    winner = "🎉 БАГ 2 ЯЛЛАА! 🎉";

  }

  else if (leftScore > rightScore) {

    winner = "🎉 БАГ 1 ЯЛЛАА! 🎉";

  }

  else if (rightScore > leftScore) {

    winner = "🎉 БАГ 2 ЯЛЛАА! 🎉";

  }

  else {

    winner = "🤝 ХОЁР БАГ ТЭНЦЛЭЭ!";

  }

  statusText.textContent =
    winner +
    " | Баг 1: " + leftScore +
    " оноо | Баг 2: " + rightScore + " оноо";

}

// ===================================
// ДАХИН ТОГЛОХ
// ===================================

function restartGame() {

  currentQuestion = 0;

  ropeOffset = 0;

  leftScore = 0;
  rightScore = 0;

  answers = {
    left: null,
    right: null
  };

  gameOver = false;
  roundLocked = false;

  // Олсыг голд буцаах
  ropeGroup.style.setProperty(
    "--rope-offset",
    "0px"
  );

  // Асуултуудыг шинэ дарааллаар эхлүүлэх
  gameQuestions = shuffle(questions);

  showQuestion();

}

// ===================================
// ТОГЛООМ ЭХЛҮҮЛЭХ
// ===================================

restartBtn.addEventListener("click", restartGame);

restartGame();
