// ===== АСУУЛТУУД =====
// Шинэ асуулт нэмэхдээ доорх хэлбэрийг хуулна.
const questions = [
  { question: "'Нутаг + аас' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["нутгаас", "нутагаас", "нутгаасаа", "нутагас"], correctAnswer: "нутгаас" },
  { question: "'Хавар + аас' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хавраас", "хавараас", "хавруудаас", "хавраасаа"], correctAnswer: "хавраас" },
  { question: "'Цэрэг + үүд' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["цэрэгүүд", "цэргүүд", "цэрэггүүд", "цэргүүдээ"], correctAnswer: "цэргүүд" },
  { question: "'Хадаг + аар' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хадагаар", "хадгаар", "хадагаараа", "хадгаараа"], correctAnswer: "хадгаар" },
  { question: "'Бэлэг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["бэлэгийн", "бэлгийн", "бэлэгний", "бэлгэийн"], correctAnswer: "бэлгийн" },
  { question: "'Аймаг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["аймгийн", "аймагийн", "аймгиин", "аймагын"], correctAnswer: "аймгийн" },
  { question: "'Гавар + ын' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["гаварын", "гаварийн", "гаврын", "гаврийн"], correctAnswer: "гаврын" },
  { question: "'Чарга + ыг' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["чаргаыг", "чаргийг", "чаргыг", "чаргаийг"], correctAnswer: "чаргыг" },
  { question: "'Сана + уул' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["санауул", "сануул", "сануулл", "сануал"], correctAnswer: "сануул" },
  { question: "'Өмнө + өөс' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["өмнөөөс", "өмнөөгөөс", "өмнөөс", "өмнөө"], correctAnswer: "өмнөөс" },
  { question: "'Тойрог + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["тойргийн", "тойрогийн", "тойргын", "тойрогын"], correctAnswer: "тойргийн" },
  { question: "'Олон + оор' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["олноор", "олоноор", "олноороо", "олоноороо"], correctAnswer: "олноор" },
  { question: "'Явсан + ыг' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["явсныг", "явсаныг", "явсаныиг", "явсныиг"], correctAnswer: "явсныг" },
  { question: "'Торго + ыг' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["торгоныг", "торгыг", "торгоыг", "торгонийг"], correctAnswer: "торгыг" },
  { question: "'Авга + ыг' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["авгыг", "авгаыг", "авганыг", "авгыйг"], correctAnswer: "авгыг" },
  { question: "'Тархи + ийг' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["тархийг", "тархиийг", "тархиг", "тархиныг"], correctAnswer: "тархийг" },
  { question: "'Уурга + ыг' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["уургыг", "уургаыг", "уурганыг", "уургийг"], correctAnswer: "уургыг" },
  { question: "'Ажил + аас' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["ажлаас", "ажилаас", "ажлаасаа", "ажилаасаа"], correctAnswer: "ажлаас" },
  { question: "'Анги + аас' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["ангиас", "ангиасаа", "ангьаас", "ангинаас"], correctAnswer: "ангиас" },
  { question: "'Эрдэм + ээс' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["эрдмээс", "эрдэмээс", "эрдмээсээ", "эрдэмнээс"], correctAnswer: "эрдмээс" },
  { question: "'Наадам + аар' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["наадмаар", "наадамаар", "наадмаараа", "наадамнаас"], correctAnswer: "наадмаар" },
  { question: "'Өвөл + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["өвлийн", "өвөлийн", "өвлийин", "өвөлний"], correctAnswer: "өвлийн" },
  { question: "'Хавар + ын' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хаврын", "хаварын", "хаврынх", "хаварний"], correctAnswer: "хаврын" },
  { question: "'Хүүхэд + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хүүхдийн", "хүүхэдийн", "хүүхдийин", "хүүхэдний"], correctAnswer: "хүүхдийн" },
  { question: "'Худал + аас' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["худлаас", "худалаас", "худлаасаа", "худалаасаа"], correctAnswer: "худлаас" },
  { question: "'Булаг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["булагийн", "булгийн", "булагын", "булаагийн"], correctAnswer: "булгийн" },
  { question: "'Худаг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["худагийн", "худгийн", "худагын", "худагий"], correctAnswer: "худгийн" },
  { question: "'Суваг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["сувагийн", "сувгийн", "сувагын", "сувгын"], correctAnswer: "сувгийн" },
  { question: "'Зураг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["зурагийн", "зургийн", "зурагын", "зургын"], correctAnswer: "зургийн" },
  { question: "'Хөгжим + өөр' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["хөгжмөөр", "хөгжимөөр", "хөгжмөөрөө", "хөгжимнөөс"], correctAnswer: "хөгжмөөр" },
  { question: "'Дархан + ы' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["дархны", "дарханы", "дарханий", "дархний"], correctAnswer: "дархны" },
  { question: "'Явдал + ыг' нийлбэрийг зөв бичсэн нь аль вэ?", options: ["явдлыг", "явдалыг", "явдалийг", "явдлийг"], correctAnswer: "явдлыг" },
];

const questionText = document.getElementById("questionText");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const statusText = document.getElementById("statusText");
const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

let currentQuestion = null;
let ropePosition = 0;
let roundLocked = false;
let isGameOver = false;
let availableQuestions = [];
let nextQuestionTimer = null;

const STEP_SIZE = 35;
const WIN_DISTANCE = 280;
const RIBBON_CORRECTION = 0;

function updateRopePosition() {
  ropeGroup.style.setProperty("--ribbon-correction", `${RIBBON_CORRECTION}px`);
  ropeGroup.style.setProperty("--rope-offset", `${ropePosition}px`);
}

function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function renderQuestion() {
  if (isGameOver) return;
  roundLocked = false;
  statusText.textContent = "";
  if (availableQuestions.length === 0) availableQuestions = shuffle(questions);
  currentQuestion = availableQuestions.pop();
  questionText.textContent = currentQuestion.question;
  leftAnswers.innerHTML = "";
  rightAnswers.innerHTML = "";
  shuffle(currentQuestion.options).forEach(option => {
    const lb = document.createElement("button");
    lb.textContent = option;
    lb.onclick = () => checkAnswer(option, "left", lb);
    leftAnswers.appendChild(lb);
    const rb = document.createElement("button");
    rb.textContent = option;
    rb.onclick = () => checkAnswer(option, "right", rb);
    rightAnswers.appendChild(rb);
  });
}

function moveRope(team) {
  ropePosition += team === "left" ? -STEP_SIZE : STEP_SIZE;
  updateRopePosition();
  if (ropePosition <= -WIN_DISTANCE) {
    endGame("Баг 1 яллаа! 🏆");
    return true;
  }
  if (ropePosition >= WIN_DISTANCE) {
    endGame("Баг 2 яллаа! 🏆");
    return true;
  }
  return false;
}

function endGame(message) {
  isGameOver = true;
  roundLocked = true;
  questionText.textContent = "Тоглоом дууслаа!";
  statusText.textContent = message;
  statusText.style.color = "#dc2626";
  statusText.style.fontSize = "24px";
  document.querySelectorAll(".teams button").forEach(b => (b.disabled = true));
}

function checkAnswer(answer, team, button) {
  if (roundLocked || isGameOver) return;
  if (answer === currentQuestion.correctAnswer) {
    roundLocked = true;
    button.classList.add("correct");
    statusText.style.color = "#16a34a";
    statusText.textContent = `${team === "left" ? "Баг 1" : "Баг 2"} зөв хариуллаа!`;
    if (!moveRope(team)) {
      nextQuestionTimer = setTimeout(() => {
        nextQuestionTimer = null;
        renderQuestion();
      }, 800);
    }
  } else {
    button.classList.add("wrong");
    button.disabled = true;
    statusText.style.color = "#dc2626";
    statusText.textContent = "Буруу байна, дахин оролдоно уу!";
  }
}

restartBtn.onclick = () => {
  if (nextQuestionTimer !== null) {
    clearTimeout(nextQuestionTimer);
    nextQuestionTimer = null;
  }
  ropePosition = 0;
  roundLocked = false;
  isGameOver = false;
  availableQuestions = [];
  statusText.textContent = "";
  statusText.style.fontSize = "22px";
  statusText.style.color = "";
  document.querySelectorAll(".teams button").forEach(b => (b.disabled = false));
  updateRopePosition();
  renderQuestion();
};

updateRopePosition();
renderQuestion();
