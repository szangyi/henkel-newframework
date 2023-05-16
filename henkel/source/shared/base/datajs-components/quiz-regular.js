// -----------------------------------------------------------------------------
// Quiz Component Javascript
//
// Note!
// With this script you can control 3 types of quiz card:
//      - regular/ one-selection = data-quiz="regular"
//      - multiple choice = data-quiz="multiple"
//      - slider = data-quiz="slider"
//
// Swipe cards can be controlled separately with the quiz-swipe.js
// -----------------------------------------------------------------------------



function _all(q, e = document) {
    return [...e.querySelectorAll(q)];
  }
  
  function _one(q, e = document) {
    return e.querySelector(q);
  }
  
  var cards = _all('[data-comp*="card "]');
  let questionNumber = 0; // quiz state
  var countcards = _all(".count");
  var pagination = _one(".pagination");
  var radiobuttons = _all("input[type=radio]");
  var checkboxes = _all("input[type=checkbox]");
  
  /* ---------------- */
  /* Question numbers */
  /* ---------------- */
  
  setListenerForButtons();
  addListeners();
  
  // initialized at start of each card
  function setListenerForButtons() {
    questionNumber++;
    if (pagination) {
      pagination.innerHTML = `${questionNumber}/${cards.length}`;
    }
  }
  
  /* -------------------- */
  /* Styling radiobuttons */
  /* -------------------- */
  
  function removeRadioClass() {
    radiobuttons.forEach((radio, i) => {
      radio.parentElement.parentElement.classList.remove("active");
    });
  }
  
  function addRadioClass() {
    radiobuttons.forEach((radio, i) => {
      radio.addEventListener("click", () => {
        removeRadioClass();
        radio.parentElement.parentElement.classList.add("active");
      });
    });
  }
  
  /* ------------------ */
  /* Styling checkboxes */
  /* ------------------ */
  
  function removeCheckboxclass() {
    checkboxes.forEach((cb, i) => {
      cb.parentElement.parentElement.classList.remove("active");
    });
  }
  
  function addCheckboxclass() {
    checkboxes.forEach((cb, i) => {
      cb.addEventListener("click", () => {
        cb.checked = !cb.checked;
  
        // Add active class to all input field with the same id
        var inputId = cb.id;
        console.log({ inputId });
  
        _all(`#${inputId}`).forEach((answerinput, i) => {
          console.log({ answerinput });
          answerinput.parentElement.parentElement.classList.toggle("active");
          answerinput.checked = !answerinput.checked;
        });
      });
    });
  }
  
  addRadioClass();
  addCheckboxclass();
  
  /* ---- */
  /* Quiz */
  /* ---- */
  
  function addListeners() {
    console.log({ cards });
    cards.forEach((card, index, cards) => {
      const btnSubmit = card.querySelector("button.submit");
      const btnNext = card.querySelector("button.next");
      let startX = 0;
      let pct = 0;
      let checkedCorrectAnswers = 0;
  
      /* ------- Multiple ------- */
  
      if (card.dataset.quiz == "multiple") {
        console.log("multiple");
  
        // Input on the form
        card.addEventListener("change", (e) => {
          const input = e.target;
          var correctAnswers = card.querySelectorAll("input[value=true]");
  
          if (input.value == "true") {
            checkedCorrectAnswers++;
          } else if (input.value == "false") {
            card.classList.add("false");
          }
  
          if (checkedCorrectAnswers == correctAnswers.length) {
            card.classList.add("true");
          }
  
          btnSubmit.removeAttribute("disabled");
        });
  
        if (btnSubmit) {
          btnSubmit.addEventListener("click", (e) => {
            card.classList.add("flipped");
  
            if (card.classList.contains("false")) {
              card.dataset.correct = "false";
            } else if (
              card.classList.contains("true") &&
              !card.classList.contains("false")
            ) {
              card.dataset.correct = "true";
            } else {
              card.dataset.correct = "false";
            }
          });
        }
      } else if (card.dataset.quiz == "regular") {
        /* ------- Regular ------- */
  
        // Input on the form
        card.addEventListener("change", (e) => {
          const input = e.target;
          card.dataset.correct = input.value;
  
          if (card.dataset.correct) {
            btnSubmit.removeAttribute("disabled");
          }
        });
  
        if (btnSubmit) {
          btnSubmit.addEventListener("click", (e) => {
            card.classList.add("flipped");
          });
        }
      } else if (card.dataset.quiz == "slider") {
        /* ------- Slider ------- */
  
        /* mobile slider */
        const slider = document.querySelector(".slider");
        const donut = document.querySelector(".range-donut");
        const range = document.getElementById("range");
        const handle = document.getElementById("handle");
        const tooltip = document.getElementById("tooltip");
        const svg = document.getElementById("svg");
        addEventListener("input", (e) => {
          handle.value = range.value * 10;
          donut.style.setProperty("--pct", range.value);
          donut.style.setProperty("--wdt", range.offsetWidth);
          tooltip.value = range.value * 10;
          // tooltip.value = parseFloat(range.value).toFixed(2);
  
          // disable/ enable button styling
          if (tooltip.innerText != "0") {
            donut.parentElement.parentElement.parentElement.parentElement.dataset.correct = true;
          } else {
            donut.parentElement.parentElement.parentElement.parentElement.removeAttribute(
              "data-correct"
            );
          }
        });
  
        // initial trigger
        dispatchEvent(new Event("input"));
        handle.addEventListener("pointerdown", rangeStart);
        addEventListener("pointermove", rangeMove);
        addEventListener("pointerup", rangeEnd);
        let drag = false;
        let center = {
          x1: 0,
          y1: 0,
        };
  
        function rangeStart(e) {
          console.log("rangestart");
          drag = e.currentTarget;
          const rect = svg.getBoundingClientRect();
          const x1 = rect.x + rect.width / 2;
          const y1 = rect.y + rect.height / 2;
          center = {
            x1,
            y1,
          };
        }
  
        function rangeMove(e) {
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
          console.log("rangeend");
          if (!drag) return;
          drag = false;
        }
  
        if (btnSubmit) {
          btnSubmit.addEventListener("click", (e) => {
            card.classList.add("flipped");
          });
        }
      }
  
      /* ------- Global ------- */
  
      if (btnNext) {
        btnNext.addEventListener("click", (e) => {
          card.classList.add("discarded");
  
          if (questionNumber == cards.length) {
            parent.pageNext();
          }
  
          setListenerForButtons();
        });
      }
    });
  }
  
  cards.forEach((card, index, cards) => {
    card.style.setProperty("--z", cards.length - index);
  });