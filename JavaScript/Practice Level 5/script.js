
const age = 201;
let gender = "male";
let ticketPrice = 100;
 
let discount = 100/100;

if(gender === "female" || (age >= 5 && age <= 8)){
    //50% discount;
    discount = ticketPrice *  50 / 100;
    ticketPrice = ticketPrice - discount;
}
else if(age <= 5){
    discount = ticketPrice * 100/100; 
    ticketPrice -= discount;
}
else if(age >= 65){
    discount = ticketPrice * 70 / 100;
    ticketPrice -= discount;
}
else{
    discount = ticketPrice * 100/100;
    ticketPrice -= discount;
}

console.log(`Final discount is ${ticketPrice}`);
