

"use strict"

const videoOpens = document.querySelectorAll(".video-open"); // open buttons (multiple)
const videoClose = document.querySelector(".video-close"); // close button
const videoContainer = document.querySelector("[data-comp='video-container']"); // video container
const videos = document.querySelectorAll("video"); // video (multiple)


// Refactored

for (let i = 0; i < videoOpens.length; i++) {
    videoOpens[i].addEventListener("click", open);
    videoClose.addEventListener("click", close);
    videos[i].addEventListener("ended", close);

    function open(e) {
        console.log(e.currentTarget);
        videoContainer.classList.add("open");
        videoContainer.style.transform = "none";
        videoContainer.style.opacity = 1;
        videoContainer.style.pointerEvents = "auto";

        for (let i = 0; i < videos.length; i++) {
            videos[i].style.display = "none";
        }
        videos[i].style.display = "block";
        videos[i].play();
    }

    function close() {
        videoContainer.classList.remove("open");
        videoContainer.style.transform = "";
        videoContainer.style.opacity = "";
        videoContainer.style.pointerEvents = "";
        for (let i = 0; i < videos.length; i++) {
            videos[i].style.display = "none";
        }
        videos[i].pause();
        videos[i].currentTime = 0;
    }
}