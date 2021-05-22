var body = document.querySelector("body");
const play = document.getElementById("play");
const exit = document.getElementById("exit");
var modal = document.getElementById("id-modal-card")
var video = document.getElementById("video")

const modalActive = () =>{
    modal.classList.add("active");
    body.style.overflow ="hidden";
    modal.scrollIntoView();
    video.play();
}

const modalDesactive = () =>{
    modal.classList.remove("active");
    body.style.overflow ="scroll";
    video.pause();
    video.currentTime = 0;
}


play.addEventListener("click", modalActive);
exit.addEventListener("click", modalDesactive);