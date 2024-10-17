

let bulbImgEL = document.getElementById("bulbImg");
let catImgEL = document.getElementById("catImg");
let msgEL = document.getElementById("msg");
let offbtnEL = document.getElementById("offbtn");
let onbtnEL = document.getElementById("onbtn");

function onhidecat(){

   bulbImgEL.src = "photo/bulb-go-off-img.png";
   catImgEL.src = "photo/cat-eyes-img.png";
   msgEL.textContent = "Switched OFF";
   offbtnEL.style.backgroundColor = "grey";
   onbtnEL.style.backgroundColor = "green";

}

function onshowcat(){

    bulbImgEL.src = "photo/bulb-go-on-img.png";
    catImgEL.src = "photo/cat-img.png";
    msgEL.textContent = "Switched ON";
    offbtnEL.style.backgroundColor = "red";
    onbtnEL.style.backgroundColor = "grey";

}