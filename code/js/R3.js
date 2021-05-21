var body = document.querySelector("body");
const play = document.getElementById("play");
const exit = document.getElementById("exit");
var modal = document.getElementById("id-modal-card")


const modalActive = () => {
    
}

play.addEventListener("click",()=>{
    modal.style.display = "flex";
    body.style.overflow ="hidden";
});

exit.addEventListener("click", ()=>{
    modal.style.display = "none";
    body.style.overflow ="scroll";
});