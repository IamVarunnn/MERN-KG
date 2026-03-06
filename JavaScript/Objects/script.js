

// // product -> object name
// // company : 'Mango',.... -> Object properties
// // company, item_name, price -> key
// // 'Mango',... value 

// let product = {
//     company : 'Mango',
//     item_name : 'Cotton striped t-shirt',
//     price : 444,
// };

// // dot(.) notation
// // console.log(product.company);
// // console.log(product.item_name);
// // console.log(product.price);
// // product.company = 'Red'

// //Bracket[] notation
// // console.log(product['company']);

// let propertyName = 'item_name';
// let propertyName2 = 'price';

// console.log(product[propertyName]);
// console.log(product.propertyName);
// console.log(product[propertyName2]);

// delete product.company;


// console.log(product);

// let product = {
//     company : 'Mango',
//     price : 888,

//     displayPrice : function(){
//         console.log(`The price is ${product.price}`);
//     }
// };

// product.displayPrice();

// console.log('This is good'.length);

let product = {
    company : 'Mango',
    price : 888,

    displayPrice : function(){
        console.log(`The price is ${product.price}`);
    }
};

let {company, price} = product;
console.log(company);
console.log(price);