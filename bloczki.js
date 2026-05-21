const correctOrder = [1, 2, 3, 0, 4];

function shuffle(list) {
    const items = Array.from(list.children);
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        list.appendChild(items[j]);
        items.splice(j, 1);
    }
}

let draggedEl = null;

function initDrag() {
    const list = document.getElementById("bloczki-list");
    shuffle(list);

    list.addEventListener("dragstart", (e) => {
        draggedEl = e.target;
        e.target.classList.add("dragging");
    });

    list.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
        draggedEl = null;
    });

    list.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterEl = getDragAfterElement(list, e.clientY);
        if (afterEl == null) {
            list.appendChild(draggedEl);
        } else {
            list.insertBefore(draggedEl, afterEl);
        }
    });
}

function getDragAfterElement(container, y) {
    const elements = [...container.querySelectorAll(".bloczek:not(.dragging)")];
    return elements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        }
        return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

document.addEventListener("DOMContentLoaded", () => {
    initDrag();

    document.getElementById("bloczki-check").addEventListener("click", () => {
        const list = document.getElementById("bloczki-list");
        const current = Array.from(list.children).map(el => parseInt(el.dataset.index));
        const feedback = document.getElementById("bloczki-feedback");

        if (JSON.stringify(current) === JSON.stringify(correctOrder)) {
            feedback.textContent = "✅ Brawo! Kolejność jest poprawna!";
            feedback.className = "bloczki-feedback correct";
        } else {
            feedback.textContent = "❌ Kolejność jest niepoprawna. Spróbuj jeszcze raz!";
            feedback.className = "bloczki-feedback wrong";
        }
    });

    document.getElementById("bloczki-reset").addEventListener("click", () => {
        const list = document.getElementById("bloczki-list");
        shuffle(list);
        const feedback = document.getElementById("bloczki-feedback");
        feedback.textContent = "";
        feedback.className = "bloczki-feedback";
    });
});