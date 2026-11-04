
/* 25 АСУУЛТ */
const questions = [
  { question: "'Мэд + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["мэдье", "мэдъе", "мэдээ", "мэдие"], correctAnswer: "мэдье" },
  { question: "'Үз + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["үзье", "үзъе", "үзээ", "үзие"], correctAnswer: "үзье" },
  { question: "'Хий + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хийе", "хийье", "хийъе", "хие"], correctAnswer: "хийе" },
  { question: "'Яв + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["явъя", "явя", "явья", "явая"], correctAnswer: "явъя" },
  { question: "'Ав + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["авъя", "авя", "авья", "авая"], correctAnswer: "авъя" },
  { question: "'Бод + ё' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["бодъё", "бодё", "бодьё", "бодое"], correctAnswer: "бодъё" },
  { question: "'Ол + ё' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["олъё", "олё", "ольё", "олое"], correctAnswer: "олъё" },
  { question: "'Хар + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["харъя", "харя", "харья", "харая"], correctAnswer: "харъя" },
  { question: "'Сур + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["суръя", "суря", "сурья", "сурая"], correctAnswer: "суръя" },
  { question: "'Унш + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["уншъя", "уншя", "уншья", "уншая"], correctAnswer: "уншъя" },
  { question: "'Ир + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["ирье", "ире", "иръе", "ирээ"], correctAnswer: "ирье" },
  { question: "'Өг + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["өгье", "өгөе", "өгъе", "өгие"], correctAnswer: "өгье" },
  { question: "'Суу + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["сууя", "суужя", "суулья", "сууъя"], correctAnswer: "сууя" },
  { question: "'Уу + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["ууя", "уъя", "уья", "ууъя"], correctAnswer: "ууя" },
  { question: "'Дуул + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["дуулъя", "дууля", "дуулья", "дуулай"], correctAnswer: "дуулъя" },
  { question: "'Тат + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["татъя", "татя", "татья", "татая"], correctAnswer: "татъя" },
  { question: "'Бич + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["бичье", "биче", "бичъе", "бичээ"], correctAnswer: "бичье" },
  { question: "'Хэл + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хэлье", "хэле", "хэлъе", "хэлээ"], correctAnswer: "хэлье" },
  { question: "'Хүлээ + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хүлээе", "хүлээье", "хүлээъе", "хүлэе"], correctAnswer: "хүлээе" },
  { question: "'Бай + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["байя", "байъя", "байья", "бая"], correctAnswer: "байя" },
  { question: "'Ор + ё' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["оръё", "орё", "орьё", "орое"], correctAnswer: "оръё" },
  { question: "'Бос + ё' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["босъё", "босё", "босьё", "босое"], correctAnswer: "босъё" },
  { question: "'Хүр + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хүрье", "хүре", "хүръе", "хүрээ"], correctAnswer: "хүрье" },
  { question: "'Тэмүүл + е' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["тэмүүлье", "тэмүүле", "тэмүүлъе", "тэмүүлээ"], correctAnswer: "тэмүүлье" },
  { question: "'Барь + я' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["барья", "баръя", "бария", "барьъя"], correctAnswer: "барья" }
];

/* ТОГЛООМЫН ЭЛЕМЕНТҮҮД */
const questionText = document.getElementById("questionText");
const statusText = document.getElementById("statusText");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

const victoryOverlay = document.getElementById("victoryOverlay");
const victoryTitle = document.getElementById("victoryTitle");
const victoryCloseBtn = document.getElementById("victoryCloseBtn");
const fireworksCanvas = document.getElementById("fireworksCanvas");
const ctx = fireworksCanvas.getContext("2d");

/* ТОХИРГОО */
const ROPE_STEP = 20;
const WIN_DISTANCE = 100;
const NEXT_DELAY = 900;
const FIREWORK_DURATION = 5000;

let gameQuestions = [];
let questionIndex = 0;
let ropeOffset = 0;
let leftScore = 0;
let rightScore = 0;
let gameOver = false;
let nextTimer = null;

/* САЛЮТЫН ХУВЬСАГЧ */
let particles = [];
let animationId = null;
let fireworksStart = 0;
let lastBurst = 0;
let fireworksWidth = 0;
let fireworksHeight = 0;

const colors = [
  "#ffdd00",
  "#ff477e",
  "#38bdf8",
  "#22c55e",
  "#a855f7",
  "#fb923c",
  "#ffffff"
];

/* АСУУЛТ ХОЛИХ */
function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/* ОЛСНЫ ЗАЙГ ХЯЗГААРЛАХ */
function getSafeLimit() {
  const gameArea = document.querySelector(".game-area");
  const areaWidth = gameArea.clientWidth;
  const imageWidth = ropeGroup.getBoundingClientRect().width;

  return Math.min(
    WIN_DISTANCE,
    Math.max(0, (areaWidth - imageWidth) / 2 - 8)
  );
}

/* ОЛС ХӨДӨЛГӨХ */
function moveRope() {
  const limit = getSafeLimit();

  const offset = Math.max(
    -limit,
    Math.min(limit, ropeOffset)
  );

  ropeGroup.style.setProperty(
    "--rope-offset",
    `${offset}px`
  );
}

/* ХАРИУЛТЫН ТОВЧ ҮҮСГЭХ */
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

/* АСУУЛТ ХАРУУЛАХ */
function showQuestion() {
  if (questionIndex >= gameQuestions.length) {
    finishGame();
    return;
  }

  const question = gameQuestions[questionIndex];

  questionText.textContent = question.question;
  statusText.textContent = "";

  const options = shuffle(question.options);

  createButtons(leftAnswers, options, "left");
  createButtons(rightAnswers, options, "right");
}

/* ЗӨВ БУРУУ ХАРИУЛТЫН ӨНГӨ */
function colorAnswers(container, selected, correct) {
  container.querySelectorAll("button").forEach((button) => {
    button.disabled = true;

    if (button.textContent === correct) {
      button.classList.add("correct");
    } else if (button.textContent === selected) {
      button.classList.add("wrong");
    }
  });
}

/* ХАРИУЛТ СОНГОХ */
function chooseAnswer(team, selected) {
  if (gameOver || nextTimer !== null) return;

  const question = gameQuestions[questionIndex];
  const correct = selected === question.correctAnswer;

  if (team === "left") {
    if (correct) {
      leftScore++;
      ropeOffset -= ROPE_STEP;
    }

    colorAnswers(
      leftAnswers,
      selected,
      question.correctAnswer
    );
  } else {
    if (correct) {
      rightScore++;
      ropeOffset += ROPE_STEP;
    }

    colorAnswers(
      rightAnswers,
      selected,
      question.correctAnswer
    );
  }

  ropeOffset = Math.max(
    -WIN_DISTANCE,
    Math.min(WIN_DISTANCE, ropeOffset)
  );

  document.querySelectorAll(".answer-btn").forEach((button) => {
    button.disabled = true;
  });

  moveRope();

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

/* ЯЛАГЧ ТОДРУУЛАХ */
function finishGame() {
  if (gameOver) return;

  gameOver = true;

  let result = "";

  if (ropeOffset < 0) {
    result = "БАГ 1 ЯЛЛАА!";
  } else if (ropeOffset > 0) {
    result = "БАГ 2 ЯЛЛАА!";
  } else if (leftScore > rightScore) {
    result = "БАГ 1 ЯЛЛАА!";
  } else if (rightScore > leftScore) {
    result = "БАГ 2 ЯЛЛАА!";
  } else {
    result = "ХОЁР БАГ ТЭНЦЛЭЭ!";
  }

  questionText.textContent = result;
  statusText.textContent = "";

  leftAnswers.replaceChildren();
  rightAnswers.replaceChildren();

  showVictory(result);
}

/* ЯЛАЛТЫН ДЭЛГЭЦ */
function showVictory(result) {
  victoryTitle.textContent = result;

  const subtitle = document.querySelector(".victory-subtitle");

  if (result.includes("ТЭНЦЛЭЭ")) {
    subtitle.textContent = "САЙН ТОГЛОЛОО! 🎉";
  } else {
    subtitle.textContent = "БАЯР ХҮРГЭЕ! 🎉";
  }

  victoryOverlay.hidden = false;

  startFireworks();
}

/* ЯЛАЛТЫН ДЭЛГЭЦ ХААХ */
function closeVictory() {
  victoryOverlay.hidden = true;
  stopFireworks();
}

/* CANVAS ХЭМЖЭЭ */
function resizeFireworks() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  fireworksWidth = window.innerWidth;
  fireworksHeight = window.innerHeight;

  fireworksCanvas.width = Math.round(fireworksWidth * dpr);
  fireworksCanvas.height = Math.round(fireworksHeight * dpr);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

/* НЭГ САЛЮТ БУУДАХ */
function createFirework(x, y) {
  const count = 75;
  const baseColor = colors[
    Math.floor(Math.random() * colors.length)
  ];

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = 1.5 + Math.random() * 5.5;

    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 65 + Math.random() * 30,
      maxLife: 95,
      size: 2 + Math.random() * 3,
      color: Math.random() < 0.25
        ? colors[Math.floor(Math.random() * colors.length)]
        : baseColor
    });
  }
}

/* ӨНГӨТ ЦААСНЫ БОРОО */
function createConfetti() {
  for (let i = 0; i < 90; i++) {
    particles.push({
      x: Math.random() * fireworksWidth,
      y: -Math.random() * fireworksHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: 1 + Math.random() * 2,
      life: 150 + Math.random() * 100,
      maxLife: 250,
      size: 3 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      confetti: true
    });
  }
}

/* САЛЮТЫН ХӨДӨЛГӨӨН */
function animateFireworks(timestamp) {
  ctx.clearRect(
    0,
    0,
    fireworksWidth,
    fireworksHeight
  );

  const elapsed = timestamp - fireworksStart;

  // 5 секундийн турш шинэ салют буудна
  if (
    elapsed < FIREWORK_DURATION &&
    timestamp - lastBurst > 350
  ) {
    const leftSide = Math.random() < 0.5;

    const x = leftSide
      ? fireworksWidth * (0.08 + Math.random() * 0.25)
      : fireworksWidth * (0.67 + Math.random() * 0.25);

    const y = fireworksHeight * (
      0.12 + Math.random() * 0.55
    );

    createFirework(x, y);
    lastBurst = timestamp;
  }

  particles = particles.filter((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.confetti) {
      particle.vx += Math.sin(timestamp / 250 + particle.y) * 0.015;
    } else {
      particle.vx *= 0.985;
      particle.vy *= 0.985;
      particle.vy += 0.035;
    }

    particle.life--;

    if (particle.life <= 0) return false;

    ctx.globalAlpha = Math.max(
      0,
      Math.min(1, particle.life / 35)
    );

    ctx.fillStyle = particle.color;

    if (particle.confetti) {
      ctx.fillRect(
        particle.x,
        particle.y,
        particle.size,
        particle.size * 1.8
      );
    } else {
      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    return true;
  });

  ctx.globalAlpha = 1;

  if (elapsed < FIREWORK_DURATION || particles.length > 0) {
    animationId = requestAnimationFrame(animateFireworks);
  } else {
    animationId = null;
  }
}

/* САЛЮТ ЭХЛҮҮЛЭХ */
function startFireworks() {
  stopFireworks();
  resizeFireworks();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  particles = [];

  createConfetti();

  createFirework(
    fireworksWidth * 0.2,
    fireworksHeight * 0.3
  );

  createFirework(
    fireworksWidth * 0.8,
    fireworksHeight * 0.3
  );

  fireworksStart = performance.now();
  lastBurst = fireworksStart;

  animationId = requestAnimationFrame(animateFireworks);
}

/* САЛЮТ ЗОГСООХ */
function stopFireworks() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  particles = [];

  ctx.clearRect(
    0,
    0,
    fireworksWidth,
    fireworksHeight
  );
}

/* ТОГЛООМ ДАХИН ЭХЛҮҮЛЭХ */
function restartGame() {
  if (nextTimer !== null) {
    clearTimeout(nextTimer);
    nextTimer = null;
  }

  closeVictory();

  gameQuestions = shuffle(questions);
  questionIndex = 0;
  ropeOffset = 0;
  leftScore = 0;
  rightScore = 0;
  gameOver = false;

  moveRope();
  showQuestion();
}

/* ҮЙЛДЛҮҮД */
restartBtn.addEventListener("click", restartGame);

victoryCloseBtn.addEventListener("click", closeVictory);

window.addEventListener("resize", () => {
  moveRope();

  if (!victoryOverlay.hidden) {
    resizeFireworks();
  }
});

const tugImage = document.querySelector(".tug-image");

tugImage.addEventListener("load", moveRope);

/* ТОГЛООМ ЭХЛҮҮЛЭХ */
restartGame();
