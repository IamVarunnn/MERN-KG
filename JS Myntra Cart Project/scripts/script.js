
let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');

    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

    displayItemsOnHomePage();
    displayBagItems();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagItems();

     
}

function displayBagItems(){
    let bagItemCount = document.querySelector(".bag-item-count");

    let n = bagItems.length;

    if(n > 0){
        bagItemCount.style.visibility = 'visible';
        bagItemCount.innerText = bagItems.length;
    }
    else{
        bagItemCount.style.visibility = "hidden";
    }
        
    
        
    
}

function displayItemsOnHomePage(){
    
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
                <button class="addToBagBtn" onclick = "addToBag(${item.id})" >Add to Bag</button>

            </div>
        `
    })


    items_container.innerHTML = innerHTML;


}






















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