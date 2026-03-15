
// 1
// let multiply = function(a, b){
//     return a * b;
// }

// console.log(multiply(2,3));

// 2

// function run(){
//     console.log("Hello");
// }

// function runTwice(){
//     runTwice();
//     runTwice();
// }

// runTwice(run());


// 3

// let btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     setTimeout(() => {
//         btn.style.height = "200px";
//         btn.style.width = '400px';
//     }, 2000);

// })

//4 - 1

let btn = document.querySelector("button");

function doubled(){
    let btn = document.querySelector("button");

    btn.classList.add('btn_doubled');
}

btn.addEventListener("click",()=>{
    setTimeout(doubled, 2000);
})

 

//4

// let btn = document.querySelector("button");

// let behavior = ()=>{
//     setTimeout(() => {
//         btn.style.height = "200px";
//         btn.style.width = '400px';
//     }, 2000);

// };
// btn.addEventListener("click",behavior)

//5

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(e){
//     sum += e;
// });

// console.log(sum);

//6

let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((num)=>{return num * num});

console.log(newArr);

