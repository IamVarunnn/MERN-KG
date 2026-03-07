

// let product = {
//     name : 'Mango',
//     price : 5555,

//     rating : {
//         stars : 4.5,
//         noOfReviews : 44,
//     },
// };

// console.log(product);

// console.log(typeof product);


// let str = JSON.stringify(product);
// console.log(typeof str);
// console.log(str);

// let obj = JSON.parse(str);
// console.log(typeof obj);
// console.log(obj);




// localStorage.setItem('Name','Coder');
// localStorage.setItem('Price','678');

// console.log(localStorage.getItem('Name'));

let product = {
    name : 'TShirt',
    price : 444,
    
    ratings : {
        stars : 4.5,
        reviews : 44,
    },
};


 
// localStorage.setItem('product',JSON.stringify(product));
// // localStorage.setItem('product',JSON.parse(product));
// console.log(localStorage.getItem('product'));


let company = {
    name : 'Amazon',
    jobs : 9,

    ratings : {
        stars : 4,
        reviews : 44,
    },
};

let jsonCompany = JSON.stringify(company);

localStorage.setItem('company1',jsonCompany);


// console.log(localStorage.getItem('company1'))

let objCompany = JSON.parse(jsonCompany);
console.log(objCompany);

localStorage.removeItem('Price');
localStorage.clear();