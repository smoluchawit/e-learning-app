document.addEventListener("DOMContentLoaded", () => {
    // Pobieramy wszystkie elementy o klasie "fiszka"
    const fiszki = document.querySelectorAll(".fiszka");
    
    // Dodajemy do każdej fiszki nasłuchiwanie na kliknięcie
    fiszki.forEach(fiszka => {
        fiszka.addEventListener("click", () => {
            // Przełączamy klasę odpowiedzialną za efekt 3D (obrót)
            fiszka.classList.toggle("is-flipped");
        });
    });
});