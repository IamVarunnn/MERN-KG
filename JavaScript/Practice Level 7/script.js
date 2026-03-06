

let product = {
    company : 'Orange',
    item_name : 'T-Shirt',
    price : 890,
    delivery_time : '50mins',
};


// let object = {
//     price : 78,
// };

// let object2 = object;

// object2.price = 99;

// console.log(object.price);

// console.log(product['delivery_time']);

let obj = {
    message : 'good job',
    status : 'complete',
};

let {message} = obj;
console.log(message);

let {status} = obj;
console.log(status);


function isIdenticalProduct(product1, product2){
    if(product1 == product2){
        return true;
    }

    if(typeof product1 !== 'object' || typeof product2 !== 'object'){
        console.warn('Parameter pass was not an object');
        return false;
    }

    if(product1.company === product2.company && product1.price === product2.price){
        return true;
    }
    else{
        return false;
    }
}

let product1 = {
    company : 'mango',
    price : 555,
};

let product2 = {
    company : 'mango',
    price : 55,
};

// let product2 = product1;

console.log(isIdenticalProduct(product1, product2));
console.log(isIdenticalProduct(product1, ''));