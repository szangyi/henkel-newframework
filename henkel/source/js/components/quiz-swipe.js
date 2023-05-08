// Add Lottie-player libraries to <head> index.html
// <script src="lottieplayer-min.js"></script>
// <script src="lottie-interactivity-min.js"></script>
// <script src="bodymovin-min.js"></script>

function _all(q, e = document) {
    return [...e.querySelectorAll(q)]
}

function _one(q, e = document) {
    return e.querySelector(q)
}


// var cards = _all("[data-comp*='card ']");
var cards = _all("[data-comp*='card']:not([data-comp*='-'])");
var swipecards = _all("[data-comp*='swipe']");

let questionNumber = 0 // quiz state
var pagination = _one('.pagination')
var swipecardslength = swipecards.length


/* ---------------- */
/* Question numbers */
/* ---------------- */

setNr()

setListenerForButtons()
addListeners()


// console.log({ questionNumber })

function setNr() {
    questionNumber++;
    console.log({ questionNumber })

    if (pagination) {
        pagination.innerHTML = `${questionNumber}/${swipecardslength}`
    }
}


// initialized at start of each card
function setListenerForButtons() {
    cards[questionNumber - 1].classList.add('active')
}


/* ---- */
/* Quiz */
/* ---- */

function addListeners() {

    cards.forEach((card, index, cards) => {
        const btnSubmit = card.querySelector('button.submit')
        const btnNext = card.querySelector('button.next')
        let swipe = false
        let startX = 0
        let pct = 0

        /* ------- Swipe ------- */

        card.addEventListener('pointerdown', swipeStart)
        card.addEventListener('click', swipeclick())

        addEventListener('pointermove', swipeMove)
        addEventListener('pointerup', swipeEnd)

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

            if (Math.abs(pct) < .1) {
                /* incomplete swipe */
                swipe.style.removeProperty('--swipe-pct')
                swipe.style.removeProperty('--opacity')
            } else {
                /* complete swipe */
                swipe.style.setProperty('--swipe-pct', Math.abs(pct) / pct * 2)

                // swipeAnswerCheck(e) function moved here
                if ((swipe.dataset.correct == "left" && pct < 0) || (swipe.dataset.correct == "right" && pct > 0)) {
                    // console.log('right')
                    swipe.dataset.correct = true
                } else {
                    // console.log('wrooong')
                    swipe.dataset.correct = false
                }

                // add discarded class to swiped card so the answer will show up
                card.classList.add('discarded')

            }

            swipe = false
            setListenerForButtons();
        }

        function swipeclick() {
            console.log('this is a swipeclick')
            if (swipe) return

            return function curried_func(e) {
                console.log("calling click function");
                const card = e.currentTarget
                const target = e.target
                console.log({target})


                if (target != swipe && target.dataset.direction) {
                    //  enable swipe 
                    swipe = card

                    // if item (button) has data-direction attribute 
                    // set percentage based on value                 
                    if (target.dataset.direction == "left") {
                        pct = -1;
                        swipe.dataset.correct = true
                    }
                    if (target.dataset.direction == "right") {
                        pct = 1;
                        swipe.dataset.correct = false
                    }

                    // update percentage variable for css
                    swipe.style.setProperty('--swipe-pct', Math.abs(pct) / pct * 2)

                    card.classList.add('discarded')
                    // setLottie()

                    // disable swipe to avoid swipe move 
                    swipe = false


                }

            }

            setListenerForButtons();
        }


        /* ------- Global ------- */

        if (btnNext) {
            btnNext.addEventListener('click', e => {
                card.classList.add('discarded');
                // _all('.character-image-slidein')[questionNumber - 1].classList.add('discarded')
                const target = e.target
                console.log('nextbuttoncliceeeeked')

                setNr();
                setListenerForButtons();

                // setLottie();
                // setLottieDesktop(questionNumber)
            })
        }
    })
}


/* ------------- */
/* Card stacking */
/* ------------- */

cards.forEach((card, index, cards) => {
    card.style.setProperty("--z", cards.length - index);
});