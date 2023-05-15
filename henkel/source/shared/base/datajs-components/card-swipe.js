function _all(q, e = document) {
    return e.querySelectorAll(q);
}

function _one(q, e = document) {
    return e.querySelector(q);
}

/* ----------- */
/* Swipe cards */
/* ----------- */

const swipes = _all("[data-quiz='swipe']");
const cardBox = _all(".card-box");
const lastCardBox = cardBox[cardBox.length - 1];

let swipe = false;
let startX = 0;
let pct = 0;
let cardNr = 0;
let clicked = 0;

swipes.forEach((card) => {
    // console.log({ card });
    if (window.innerWidth < 880) {
        // only add swipe function on mobile
        card.addEventListener("pointerdown", swipeStart);
    }
    // card.addEventListener('click', swipeclick())
});

addEventListener("pointermove", swipeMove);
addEventListener("pointerup", swipeEnd);

function swipeStart(e) {
    cardNr++;


    // console.log("swipestart");

    swipe = e.currentTarget;
    startX = e.clientX;
    swipe.style.setProperty("--transition", 0);

    console.log(swipe)
}

function swipeMove(e) {
    // console.log("swipemove");
    if (!swipe) return;

    let deltaX = e.clientX - startX;
    let rect = swipe.getBoundingClientRect();
    let width = rect.width;
    pct = deltaX / width;

    swipe.style.setProperty("--swipe-pct", pct);
    swipe.style.setProperty("--opacity", Math.abs(pct) * 3);
    swipe.dataset.direction = pct > 0 ? "right" : "left";
}

function swipeEnd(e) {
    if (!swipe) return;


    if (Math.abs(pct) === 1) return; // solves bug with swipe on later cards

    swipe.style.removeProperty("--transition");



    /* incomplete swipe */
    // if (Math.abs(pct) < .2) {
    if (Math.abs(pct) < 0.15) {
        // console.log('swipe incomplete');
        swipe.style.removeProperty("--swipe-pct");
        swipe.style.removeProperty("--opacity");
    } else {
        // console.log('swipe complete, checking answer');
        swipe.style.setProperty("--swipe-pct", (Math.abs(pct) / pct) * 2);
        // swipe.closest('.card-box').style.display = "none"
        swipe.closest('.card-box').style.pointerEvents = "none"
        swipeAnswerCheck(e);

        // if (cardNr == swipes.length) {
            // SHOULD BE PAGE NEXT OR SOMETHING
        //     _one('[data-comp*="button"]').classList.add("fadeout");
        //     _one('[data-comp*="button"]').style.pointerEvents = "none";
        //     _one('[data-comp*="button"]').style.cursor = "none";
        //     _one('[data-comp*="button"]').style.cursor = "none";
        //     // card.removeEventListener("pointerdown", swipeStart);
        //     removeEventListener("pointermove", swipeMove);
        //     removeEventListener("pointerup", swipeEnd);
        //     lastCardBox.classList.add("reveal");
        // }

    }



    swipe = false;
}

function swipeAnswerCheck(e) {
    clicked++

    // console.log("checking answer", swipe, pct);
    if (
        (swipe.dataset.correct == "left" && pct < 0) ||
        (swipe.dataset.correct == "right" && pct > 0)
    ) {
        swipe.dataset.correct = true;
    } else {
        swipe.dataset.correct = false;
    }
}

function swipeclick() {
    console.log('workbitch')
    clicked++

    const card = swipes[cardNr];
    console.log(card)
    // card.closest('.card-box').style.display = "none"

    // only right
    pct = 1;

    //  enable swipe
    swipe = card;

    // update percentage variable for css
    swipe.style.setProperty("--swipe-pct", (Math.abs(pct) / pct) * 2);

    // disable swipe to avoid swipe move
    swipe = false;
    cardNr++;

    if (cardNr == swipes.length) {
        _one('[data-comp*="button"]').classList.add("fadeout");
        _one('[data-comp*="button"]').style.pointerEvents = "none";
        _one('[data-comp*="button"]').style.cursor = "none";
        _one('[data-comp*="button"]').style.cursor = "none";
        card.removeEventListener("pointerdown", swipeStart);
        removeEventListener("pointermove", swipeMove);
        removeEventListener("pointerup", swipeEnd);
        lastCardBox.classList.add("reveal");
    }
}

/* ------------- */
/* Card stacking */
/* ------------- */

cardBox.forEach((box, index, cardBox) => {
    box.style.setProperty("--z", cardBox.length - index);
});

  // if (window.innerWidth > 880) {
  //   const desiredHeight = _one(".test").offsetHeight;
  //   const posterContainer = _one(".poster-container");
  //   posterContainer.style.setProperty("--h", desiredHeight + "px");
  // }
