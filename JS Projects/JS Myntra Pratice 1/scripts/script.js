{/*
  */}


let bagItems;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayOnPage();
    displayBagCount();

}

function addToBag(itemId){
    bagItems.push(itemId);

    localStorage.setItem('bagItems',JSON.stringify(bagItems));

    console.log(bagItems);
    displayBagCount();
}


function displayBagCount(){
    let bagItemCount = document.querySelector(".bag_item_count");

    if(bagItems.length > 0){
        bagItemCount.style.visibility = 'visible';
        bagItemCount.innerText = bagItems.length;
    }
    else{
        bagItemCount.style.visibility = 'hidden';
    }
}


function displayOnPage(){
    let containerEle = document.querySelector(".items_container");

    if(!containerEle){
        return;
    }

    let innerHTML = '';

    items.forEach(item =>{
        innerHTML += `
            <div class="item_container">

                <img class="item_image" src="${item.image}" alt="">
                <div class="rating">
                    <span>${item.rating.stars} ⭐ | ${item.rating.count}</span>
                </div>
                <div class="company_name">${item.company}</div>
                <div class="item_name">${item.item_name}</div>
                <div class="price">
                    <span class="current_price">Rs ${item.current_price}</span>
                    <span class="original_price">Rs${item.original_price}</span>
                    <span class="discount_percentage">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="addToBag" onclick="addToBag(${item.id});" >Add to Bag</button>

            </div>
        `
    })

    containerEle.innerHTML = innerHTML;
}