
let btn = document.querySelectorAll("button");


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click",()=>{
        // console.log(btn[i].innerText);
        // btn[i].src = `sounds/crash.mp3`;
        let key = btn[i].innerText;

         switch (key) {
            case "w":
                new Audio("sounds/tom-1.mp3").play();
                break;

            case "a":
                new Audio("sounds/tom-2.mp3").play();
                break;

            case "s":
                new Audio("sounds/tom-3.mp3").play();
                break;

            case "d":
                new Audio("sounds/tom-4.mp3").play();
                break;

            case "j":
                new Audio("sounds/snare.mp3").play();
                break;

            case "k":
                new Audio("sounds/crash.mp3").play();
                break;

            case "l":
                new Audio("sounds/kick.mp3").play();
                break;
        }
    });

    btn[i].addEventListener("keydown",(e)=>{
        // console.log(btn[i].innerText);
        // btn[i].src = `sounds/crash.mp3`;
        let key = e.key;

         switch (key) {
            case "w":
                new Audio("sounds/tom-1.mp3").play();
                break;

            case "a":
                new Audio("sounds/tom-2.mp3").play();
                break;

            case "s":
                new Audio("sounds/tom-3.mp3").play();
                break;

            case "d":
                new Audio("sounds/tom-4.mp3").play();
                break;

            case "j":
                new Audio("sounds/snare.mp3").play();
                break;

            case "k":
                new Audio("sounds/crash.mp3").play();
                break;

            case "l":
                new Audio("sounds/kick.mp3").play();
                break;
        }
    });
} 