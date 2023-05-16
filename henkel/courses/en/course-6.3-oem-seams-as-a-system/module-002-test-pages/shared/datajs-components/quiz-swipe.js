// -----------------------------------------------------------------------------
// Quiz Swipe Component Javascript
//
// Note!
// With this script you can control swipe quiz cards
// followed by the swipe-answer.
//
//
// Markup example:
// <div data-comp="card-container stack">
//      <div data-comp="card rounded swipe" data-quiz="swipe"></div>
// </div>
// -----------------------------------------------------------------------------


function _all(q, e = document) {
    return [...e.querySelectorAll(q)]
}

function _one(q, e = document) {
    return e.querySelector(q)
}


// Variables
var cardStackElements = _all('[data-comp*="card-container"]>*')
var cards = _all("[data-comp*='card']:not([data-comp*='-'])");
var btns = _all("[data-comp*='button']");
var swipecards = _all("[data-comp*='swipe']");
var overlays = _all("[data-comp*='overlay']");
var pagination = _one('.pagination');
let questionNumber = 1;
let cardNumber = -1;


/* ---------------- */
/* Initial          */
/* ---------------- */
function initial() {
    stackCards();
    setNr(); // + setActiveCard();
    setListeners();
}

initial()

function stackCards() {
    // Card stacking
    cardStackElements.forEach((element, index) => {
        element.style.setProperty("--z", cardStackElements.length - index);
    });
}

function setListeners() {
    cards.forEach(card => {
        const btnNext = card.querySelector('button.next')
        let swipe = false
        let startX = 0
        let pct = 0

        card.addEventListener('click', swipeclick)

        if (!card.classList.contains('swipe-answer')) {
            card.addEventListener('pointerdown', swipeStart)
            card.addEventListener('pointermove', swipeMove)
            card.addEventListener('pointerup', swipeEnd)
        }

        function swipeclick(e) {
            if (swipe) return

            // return function curried_func(e) {
            const card = e.currentTarget
            const target = e.target

            if (target != swipe && target.dataset.direction) {
                //  enable swipe 
                swipe = card

                // if item (button) has data-direction attribute 
                // set percentage based on value    
                if (target.dataset.direction == "left") {
                    pct = -1;
                    swipe.dataset.correct = true
                } else if (target.dataset.direction == "right") {
                    pct = 1;
                    swipe.dataset.correct = false
                }

                // update percentage variable for css
                swipe.style.setProperty('--swipe-pct', Math.abs(pct) / pct * 2)

                swipe = false

                answerSubmit(card)

            }

            // }

        }

        function swipeStart(e) {
            swipe = e.currentTarget
            startX = e.clientX
            swipe.style.setProperty('--transition', 0)
        }

        function swipeMove(e) {
            if (!swipe) return
            let deltaX = e.clientX - startX
            let rect = swipe.getBoundingClientRect()
            let width = rect.width
            pct = deltaX / width
            swipe.style.setProperty('--swipe-pct', pct)
            swipe.style.setProperty('--opacity', Math.abs(pct) * 3)
            swipe.dataset.direction = pct > 0 ?
                "right" :
                "left"
        }

        function swipeEnd(e) {
            if (!swipe) return
            if (Math.abs(pct) === 1) return // solves bug with swipe on later cards

            swipe.style.removeProperty('--transition')

            /* incomplete swipe */
            if (Math.abs(pct) < .1) {
                swipe.style.removeProperty('--swipe-pct')
                swipe.style.removeProperty('--opacity')
            }
            /* complete swipe */
            else {
                card.style.setProperty('--swipe-pct', Math.abs(pct) / pct * 2)

                if ((swipe.dataset.correct == "left" && pct < 0) || (swipe.dataset.correct == "right" && pct > 0)) {
                    swipe.dataset.correct = true
                } else {
                    swipe.dataset.correct = false
                }
                answerSubmit(card)
            }

            swipe = false         // disable swipe to avoid swipe move 
        }

        if (btnNext) {
            btnNext.addEventListener('click', e => {
                nextQuestion(e)
            })
        }
    })
}




/* ---------------- */
/* Answer Submit    */
/* ---------------- */
function answerSubmit(card) {
    setNr(card);
}



/* ---------------- */
/* Next Question    */
/* ---------------- */
function nextQuestion(e) {
    const card = e.target
    questionNumber++
    setNr();
}

/* ---------------- */
/* Change number    */
/* ---------------- */


function setNr() {
    cardNumber++;
    setActiveCard()

    if (pagination) {
        pagination.innerHTML = `${questionNumber}/${swipecards.length}`
    }
}

function setActiveCard() {
    let card = cards[cardNumber]

    if (cards[cardNumber - 1]) {
        cards[cardNumber - 1].classList.remove('active')
        cards[cardNumber - 1].classList.add('discarded')
    }

    card.classList.add('active')
}