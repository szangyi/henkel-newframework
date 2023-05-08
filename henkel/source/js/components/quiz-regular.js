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

var cards = _all('[data-comp*="card "]');
let questionNumber = 0  // quiz state
var countcards = _all('.count')
var pagination = _one('.pagination')
var radiobuttons = _all('input[type=radio]')
var checkboxes = _all('input[type=checkbox]')

/* ---------------- */
/* Question numbers */
/* ---------------- */

setListenerForButtons()
addListeners()

// initialized at start of each card
function setListenerForButtons() {
    let checkedCorrectAnswers = 0
    cardslength = cards.length
    questionNumber++;
    if(pagination) {
        pagination.innerHTML = `${questionNumber}/${cardslength}`
    }

    // if (window.innerWidth < 880) {
    //     setLottie()
    // } else {
    //     setLottieDesktop()
    // }
}


/* -------------------- */
/* Styling radiobuttons */
/* -------------------- */

function removeRadioClass() {
    radiobuttons.forEach((radio, i) => {
        radio.parentElement.parentElement.classList.remove('active');
    })
}

function addRadioClass() {
    radiobuttons.forEach((radio, i) => {
        radio.addEventListener('click', () => {
            removeRadioClass();
            radio.parentElement.parentElement.classList.add('active');
        })
    })
}

/* ------------------ */
/* Styling checkboxes */
/* ------------------ */

function removeCheckboxclass() {
    checkboxes.forEach((cb, i) => {
        cb.parentElement.parentElement.classList.remove('active');
    })
}

function addCheckboxclass() {
    checkboxes.forEach((cb, i) => {
        cb.addEventListener('click', () => {
            cb.checked = !cb.checked

            // Add active class to all input field with the same id 
            var inputId = cb.id
            console.log({ inputId })


            _all(`#${inputId}`).forEach((answerinput, i) => {
                console.log({ answerinput })
                answerinput.parentElement.parentElement.classList.toggle('active');
                answerinput.checked = !answerinput.checked

            })

        })
    })
}

addRadioClass()
addCheckboxclass()


/* ---- */
/* Quiz */
/* ---- */

function addListeners() {
    console.log({ cards })
    cards.forEach((card, index, cards) => {
        const btnSubmit = card.querySelector('button.submit')
        const btnNext = card.querySelector('button.next')
        let startX = 0
        let pct = 0
        let checkedCorrectAnswers = 0


        /* ------- Multiple ------- */

        if (card.dataset.quiz == 'multiple') {
            console.log('multiple');

            // Input on the form 
            card.addEventListener('change', e => {
                const input = e.target
                // card.dataset.correct = input.value
                // card.classList.add(input.value)
                console.log({ card })
                var correctAnswers = card.querySelectorAll('input[value=true]')
                console.log('how many correct:')
                console.log({ correctAnswers })
                console.log(correctAnswers.length)


                console.log(input.value)

                if (input.value == 'true') {
                    console.log('TRUUUUUUUEEEE')
                    checkedCorrectAnswers++;
                } else if (input.value == 'false') {
                    console.log('FAAAAAAALSE')
                    card.classList.add('false')
                }

                if (checkedCorrectAnswers == correctAnswers.length) {
                    console.log('YOU SHOULD BE GOOOD')
                    card.classList.add('true')
                }

                // if (checkedCorrectAnswers == correctAnswers.length) {
                //     console.log('YOU SHOULD BE GOOOD')
                //     card.classList.add('true')
                // } else {
                //     card.classList.add('true')
                // }

                console.log({ checkedCorrectAnswers })

            })


            if (btnSubmit) {
                btnSubmit.addEventListener('click', e => {
                    card.classList.add('flipped')

                    if (card.classList.contains('false')) {
                        card.dataset.correct = 'false'
                    } else if (card.classList.contains('true') && !card.classList.contains('false')) {
                        card.dataset.correct = 'true'
                    } else {
                        card.dataset.correct = 'false'
                    }

                    // if (window.innerWidth > 880) {
                    //     setLottieDesktop()
                    // }
                })
            }
        }

        /* ------- Regular ------- */


        else if (card.dataset.quiz == 'regular') {
            // else if (card.classList.contains('regular') && !card.classList.contains('multiple') && !card.classList.contains('slider')) {
            console.log('reg')

            // Input on the form 
            card.addEventListener('change', e => {
                const input = e.target
                card.dataset.correct = input.value

                if (card.dataset.correct) {
                    btnSubmit.removeAttribute('disabled')
                } 
            })

           

            if (btnSubmit) {

                btnSubmit.addEventListener('click', e => {
                    card.classList.add('flipped')

                    // if (window.innerWidth < 880) {
                    //     setLottie()
                    // }

                    // if (window.innerWidth > 880) {
                    //     setLottieDesktop()
                    // }
                })
            }
        }

        /* ------- Slider ------- */

        else if (card.dataset.quiz == 'slider') {
            console.log('slider card')
            console.log({ card })
            /* ------ */
            /* Slider */
            /* ------ */

            /* mobile slider */
            const slider = document.querySelector('.slider')
            const donut = document.querySelector(".range-donut");
            const range = document.getElementById("range");
            const handle = document.getElementById("handle");
            const tooltip = document.getElementById("tooltip");
            const svg = document.getElementById("svg");
            addEventListener("input", (e) => {
                handle.value = range.value * 10;
                donut.style.setProperty("--pct", range.value);
                donut.style.setProperty("--wdt", range.offsetWidth);
                tooltip.value = range.value * 10
                // tooltip.value = parseFloat(range.value).toFixed(2);

                // disable/ enable button styling
                if (tooltip.innerText != "0") {
                    donut.parentElement.parentElement.parentElement.parentElement.dataset.correct = true
                } else {
                    donut.parentElement.parentElement.parentElement.parentElement.removeAttribute('data-correct')
                }


            });
            // initial trigger
            dispatchEvent(new Event("input"));
            handle.addEventListener("pointerdown", rangeStart);
            addEventListener("pointermove", rangeMove);
            addEventListener("pointerup", rangeEnd);
            let drag = false;
            let startAngle = 0;
            let endAngle = 0;
            let center = {
                x1: 0,
                y1: 0
            };

            function rangeStart(e) {
                console.log('rangestart')
                drag = e.currentTarget;
                const rect = svg.getBoundingClientRect();
                const x1 = rect.x + rect.width / 2;
                const y1 = rect.y + rect.height / 2;
                center = {
                    x1,
                    y1
                };
            }

            function rangeMove(e) {
                console.log('rangemove')
                if (!drag) return;
                const { x1, y1 } = center;
                const x2 = e.clientX;
                const y2 = e.clientY;
                let angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI) + 90;
                angle = angle < 0 ? 360 + angle : angle;
                angle = Math.max(angle, 0);
                let pct = angle / 360;
                if (range.value > 0.75 && x2 > x1) pct = 1;
                if (range.value < 0.25 && x2 < x1) pct = 0;
                range.value = pct;
                dispatchEvent(new Event("input"));
            }

            function rangeEnd(e) {
                console.log('rangeend')
                if (!drag) return;
                drag = false;
            }

            if (btnSubmit) {
                btnSubmit.addEventListener('click', e => {
                    card.classList.add('flipped')

                    // if (window.innerWidth < 880) {
                    //     setLottie()
                    // }

                    // if (window.innerWidth > 880) {
                    //     setLottieDesktop()
                    // }
                })
            }

        }



        /* ------- Global ------- */

        if (btnNext) {
            btnNext.addEventListener('click', e => {
                card.classList.add('discarded');
                // detect clicked item
                const target = e.target
                console.log({ target })
                console.log('nextbuttoncliceeeeked')

                if (questionNumber == cardslength) {
                    console.log('go to next page')
                    parent.pageNext();
                }

                setListenerForButtons();
            })
        }
    })
}

cards.forEach((card, index, cards) => {
    card.style.setProperty("--z", cards.length - index);
});



// function setLottie() {
//     /* ---------------- */
//     /* Lottie animation */
//     /* ---------------- */

//     // currentcard = cards[questionNumber - 1]
//     currentcard = _all('.card')[questionNumber - 1]
//     console.log({ currentcard })

//     Lotties = [
//         "",
//         "./assets/roson-1.json", // card 1
//         "./assets/roson-2.json", // card 2
//         "./assets/roson-3.json", // card 3
//         "./assets/roson-4.json", // card 4
//     ]


//     // Set up lottie animation 
//     // based on questionNumber

//     // ******* SOMETHING HERE BREAKS THE COINLOTTIE ******

//     var anim = bodymovin.loadAnimation({
//         container: currentcard.querySelector('.lottie-player'), // required
//         path: Lotties[questionNumber], // required
//         renderer: 'svg', // required
//         autoplay: true,
//     });

//     // *************************************************

//     console.log(currentcard.querySelector('.lottie-player'))

//     anim.addEventListener('DOMLoaded', () => {
//         const {
//             w,
//             h
//         } = anim.animationData
//         anim.wrapper.setAttribute('viewBox', `0 0 ${w} ${h}`)

//     })


//     // lottie fades out
//     setTimeout(function () {
//         console.log('disappear')

//         anim.wrapper.classList.add('disappear');
//         currentcard.querySelector('.lottie-player').addEventListener('animationend', addForm())

//     }, 2500)

//     function addForm() {
//         if (currentcard.classList.contains('regular')) {
//             console.log('appear')

//             // form fades in
//             currentcard.querySelector('fieldset').classList.add('appear')
//         }
//     }
// }

// function setLottieDesktop() {
//     console.log({ questionNumber })

//     console.log('setdesktoplottie')
//     currentcard = _all('.card')[questionNumber - 1]
//     currentloc = currentcard.querySelector('.loc')

//     console.log({ currentcard })
//     console.log({ currentloc })

//     if (currentloc) {
//         currentloc.classList.toggle('slide-in')
//     }


// }

