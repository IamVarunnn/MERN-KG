
let items_container = document.querySelector(".items_container");




let innerHTML = '';

details.forEach(item => {
    innerHTML += `
        <div class="items">
            <img class="items_img" src="${item.image}" alt="item_image">                
            <div class="ratings">
                <span>${item.rating.stars} ⭐ | ${item.rating.count} </span>
            </div>
            <div class="company_name"> ${item.company} </div>
            <div class="item_name"> ${item.item_name} </div>
            <div class="price">
                <span class="current_price" > ${item.current_price} </span> 
                <span class="original_price" > ${item.original_price} </span> 
                <span class="discount" > ${item.discount_percentage}% OFF </span>
            </div>
            <button class="addToBagBtn" >Add to Bag</button>

        </div>
    `
})


items_container.innerHTML = innerHTML;























// let item = {
//     item_image : 'images/cart_items/1.png',

//     ratings : {
//         stars : 4.5,
//         noOfReviews : 1200
//     },

//     company_name : `Carlton London`,

//     item_name : `Rhodium-Plated CZ Studs`,

//     current_price : `606`,

//     original_price : `1045`,
//     discount_percentage : 42


// };