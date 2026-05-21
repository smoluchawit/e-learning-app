document.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.getElementById("uzupelnianie-check");
    const gap1 = document.getElementById("gap1");
    const gap2 = document.getElementById("gap2");
    const feedback = document.getElementById("uzupelnianie-feedback");

    if (checkBtn) {
        checkBtn.addEventListener("click", () => {
            // Pobieramy wpisany tekst, usuwamy białe znaki i zamieniamy na małe litery
            const ans1 = gap1.value.trim().toLowerCase();
            const ans2 = gap2.value.trim().toLowerCase();

            // Sprawdzamy poprawność
            const isCorrect1 = ans1 === "fun";
            const isCorrect2 = ans2 === "return";

            // Aktualizacja wyglądu luki 1
            if (isCorrect1) {
                gap1.className = "code-input correct";
            } else {
                gap1.className = "code-input wrong";
            }

            // Aktualizacja wyglądu luki 2
            if (isCorrect2) {
                gap2.className = "code-input correct";
            } else {
                gap2.className = "code-input wrong";
            }

            // Komunikat zwrotny
            if (isCorrect1 && isCorrect2) {
                feedback.textContent = "✅ Świetnie! Poprawnie użyłeś słów kluczowych.";
                feedback.className = "uzupelnianie-feedback correct";
            } else {
                feedback.textContent = "❌ Coś jest nie tak. Upewnij się, że wpisujesz poprawne komendy z małych liter.";
                feedback.className = "uzupelnianie-feedback wrong";
            }
        });
    }
});