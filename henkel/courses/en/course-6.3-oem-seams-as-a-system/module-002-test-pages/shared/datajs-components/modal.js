


// Multiple modals
const modalOpens = document.querySelectorAll('.modal-open')
const modalCloses = document.querySelectorAll('.modal-close')
const modals = document.querySelectorAll("[data-comp='modal']")
const overlay = document.querySelector("[data-comp='overlay']")
let i = 0;

for (let i = 0; i < modals.length; i++) {
    modalOpens[i].addEventListener("click", toggle);
    modalCloses[i].addEventListener("click", toggle);
    overlay.addEventListener("click", close);

    function toggle(e) {
        console.log(e.currentTarget);
        overlay.classList.toggle("active");
        modals[i].classList.toggle('active')
    }

    addEventListener("click", function (e) {
        if (e.target.dataset.comp == 'overlay') {
            console.log('overlayclicked');
            close();

        }
    })

    function close() {
        for (let i = 0; i < modals.length; i++) {
            modals[i].classList.remove('active');
            overlay.classList.remove("active");
        }
    }

}


      // Only one modal
      // const $ = document.querySelector.bind(document);
      // let modalIsOpen = false;

      // function toggleModal(e) {
      //     $("[data-comp='modal']").classList.toggle("active");
      //     $("[data-comp='overlay']").classList.toggle("active");
      // }
