
function _all(q, e = document) {
    return [...e.querySelectorAll(q)];
}

function _one(q, e = document) {
    return e.querySelector(q);
}

/* ---- */
/* Flip */
/* ---- */

const flipCards = _all("[data-comp*='flip']");
const timeOut = _one("[data-comp*='timeout']")

flipCards.forEach((card, index, flipCards) => {
    card.addEventListener("click", (e) => {
        card.classList.add("flipped");

        if (timeOut) {
            setTimeout(() => {
                card.classList.add("discarded");
            }, 3000);
        }

    });
});



/* ------------- */
/* Card stacking */
/* ------------- */

flipCards.forEach((box, index, flipCards) => {
    box.style.setProperty("--z", flipCards.length - index);
});