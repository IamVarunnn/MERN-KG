


function checkOddEven(){
    let num = prompt('Enter your num');
    if(num % 2 == 0){
        alert('Even');
    }
    else{
        alert('Odd');
    }
}

function greatestOfTwo(first, second){
    

    // if(first > second){
    //     return first;
    // }
    // else{
    //     return second;
    // }

    return first > second ? first : second;
}


function convertCelsiusToFahrenheit(cel){
    const Fah = (9/5) * cel + 32;
    return Fah;
}


// checkOddEven();
console.log(greatestOfTwo(1,2));
console.log(convertCelsiusToFahrenheit(38));