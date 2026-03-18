
let btn = document.querySelectorAll("button");


for(let i = 0; i < btn.length; i++){
    
    btn[i].addEventListener("click",(e)=>{
        // console.log(e.target.innerText);
        let key = e.target.innerText;
        
        switch (key) {
            case "w":
                let sound = new Audio(`sounds/tom-1.mp3`);
                sound.play();
                break;

            case "a":
                let asound = new Audio(`sounds/tom-2.mp3`);
                asound.play();
                break;
            case "s":
                let ssound = new Audio(`sounds/tom-3.mp3`);
                ssound.play();
                break;
            case "d":
                let dsound = new Audio(`sounds/tom-4.mp3`);
                dsound.play();
                break;
            case "j":
                let jsound = new Audio(`sounds/snare.mp3`);
                jsound.play();
                break;
            case "k":
                let ksound = new Audio(`sounds/crash.mp3`);
                ksound.play();
                break;
            case "l":
                let lsound = new Audio(`sounds/kick-bass.mp3`);
                lsound.play();
                break;
            default:
                break;
        }
    });
}