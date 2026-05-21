document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-podsumowanie");
    const box = document.getElementById("wynik-box");
    const elPunkty = document.getElementById("wynik-punkty");
    const elProcent = document.getElementById("wynik-procent");
    const elOcena = document.getElementById("wynik-ocena");

    if (btn) {
        btn.addEventListener("click", () => {
            let zdobyte = 0;
            // Maksymalnie można zdobyć 7 punktów: 4(Quiz) + 1(Bloczki) + 2(Luki)
            let max = 7; 

            // 1. Sprawdzanie punktów z Quizu (korzysta z globalnej zmiennej z quiz.js)
            if (typeof score !== 'undefined') {
                zdobyte += score;
            }

            // 2. Sprawdzanie punktów z Bloczków
            const bloczkiFeedback = document.getElementById("bloczki-feedback");
            if (bloczkiFeedback && bloczkiFeedback.classList.contains("correct")) {
                zdobyte += 1;
            }

            // 3. Sprawdzanie punktów z Uzupełniania kodu
            const gap1 = document.getElementById("gap1");
            const gap2 = document.getElementById("gap2");
            if (gap1 && gap1.classList.contains("correct")) zdobyte += 1;
            if (gap2 && gap2.classList.contains("correct")) zdobyte += 1;

            // Zliczanie procentów
            let procent = Math.round((zdobyte / max) * 100);
            
            // Mapowanie na oceny zgodnie z wytycznymi z laboratorium
            let ocena = "2.0 (niedostateczny)";

            if (procent >= 91) {
                ocena = "5.0 (bardzo dobry)";
            } else if (procent >= 81) {
                ocena = "4.5 (dobry plus)";
            } else if (procent >= 71) {
                ocena = "4.0 (dobry)";
            } else if (procent >= 61) {
                ocena = "3.5 (dostateczny plus)";
            } else if (procent >= 51) {
                ocena = "3.0 (dostateczny)";
            }

            // Wyświetlenie wyniku
            elPunkty.textContent = `${zdobyte} / ${max} pkt`;
            elProcent.textContent = `${procent}%`;
            elOcena.textContent = `Ocena: ${ocena}`;

            // Pokaż okienko
            box.style.display = "inline-block";
        });
    }
});