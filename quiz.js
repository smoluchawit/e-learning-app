const questions = [
    {
        question: "Jakim słowem kluczowym deklarujemy funkcję w Kotlinie?",
        answers: ["func", "fun", "def", "function"],
        correct: 1
    },
    {
        question: "Co zwróci funkcja, która nie ma podanego typu zwracanego?",
        answers: ["null", "void", "Unit", "Nothing"],
        correct: 2
    },
    {
        question: "Jak nazywamy parametr z domyślną wartością w Kotlinie?",
        answers: ["optional parameter", "default parameter", "null parameter", "lazy parameter"],
        correct: 1
    },
    {
        question: "Która deklaracja funkcji jest poprawna w Kotlinie?",
        answers: [
            "fun add(a: Int, b: Int): Int { return a + b }",
            "function add(a, b) { return a + b }",
            "def add(a: Int, b: Int): Int { return a + b }",
            "func add(a: Int, b: Int) -> Int { return a + b }"
        ],
        correct: 0
    }
];

let current = 0;
let score = 0;

function renderQuestion() {
    const q = questions[current];
    document.getElementById("quiz-question").textContent = q.question;
    document.getElementById("quiz-counter").textContent = `Pytanie ${current + 1} / ${questions.length}`;
    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("quiz-feedback").className = "quiz-feedback";
    document.getElementById("quiz-next").style.display = "none";

    const answersEl = document.getElementById("quiz-answers");
    answersEl.innerHTML = "";
    q.answers.forEach((answer, i) => {
        const btn = document.createElement("button");
        btn.className = "quiz-answer";
        btn.textContent = `${["A", "B", "C", "D"][i]}. ${answer}`;
        btn.addEventListener("click", () => selectAnswer(i, btn));
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index, btn) {
    const q = questions[current];
    const allBtns = document.querySelectorAll(".quiz-answer");
    allBtns.forEach(b => b.disabled = true);

    const feedback = document.getElementById("quiz-feedback");

    if (index === q.correct) {
        btn.classList.add("correct");
        feedback.textContent = "✅ Poprawna odpowiedź!";
        feedback.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        allBtns[q.correct].classList.add("correct");
        feedback.textContent = "❌ Zła odpowiedź. Poprawna to: " + ["A","B","C","D"][q.correct];
        feedback.classList.add("wrong");
    }

    document.getElementById("quiz-next").style.display = "inline-block";
}

document.getElementById("quiz-next").addEventListener("click", () => {
    current++;
    if (current < questions.length) {
        renderQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = `
      <div class="quiz-result">
        <h3>Wynik: ${score} / ${questions.length}</h3>
        <p>${score === questions.length ? "Brawo! Wszystkie odpowiedzi poprawne! 🎉" : "Powtórz materiał i spróbuj jeszcze raz."}</p>
        <button class="btn btn--primary" onclick="location.reload()">Spróbuj ponownie</button>
      </div>
    `;
    }
});

document.addEventListener("DOMContentLoaded", renderQuestion);