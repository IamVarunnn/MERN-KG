

let randNo1 = Math.floor(Math.random() * 6) + 1;
let randNo2 = Math.floor(Math.random() * 6) + 1;

let h1 = document.querySelector("h1");
// let imgSrc = document.querySelectorAll("img");

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.src = `images/dice${randNo1}.png`;
img2.src = `images/dice${randNo2}.png`;

console.log(randNo1);
console.log(randNo2);

if(randNo1 > randNo2){
    h1.innerText = "🚩 Player-1 Wins";
}
else if(randNo2 > randNo1){
    h1.innerText = "Player-2 Wins 🚩";
}
else if(randNo1 === randNo2){
    h1.innerText = "Its a Draw!"
}

