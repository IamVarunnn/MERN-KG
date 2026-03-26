

let bagItemsObjects;
onLoad();

function onLoad(){
    loadBagItemsObjects();
    displayBagItems();

}

function loadBagItemsObjects(){

    bagItemsObjects = bagItems.map(itemId => {
        for(let i = 0; i < details.length; i++){
            if(itemId == details[i].id){
                return details[i];
            }
        }
    });

    console.log(bagItemsObjects);
}

function displayBagItems(){
    let containerEle = document.querySelector(".cart-page");

    console.log(bagItems);

    if(!containerEle){
        return;
    }

    let innerHTML = '';

    bagItemsObjects.forEach(bagItem => {
        innerHTML += generateItemHtml(bagItem);
    });

    containerEle.innerHTML = innerHTML;
}

function generateItemHtml(item){
    return `
        <div class="cart-item">
            <div class="left">
                <img src="../${item.image}" alt="">
            </div>

            <div class="right">
                <div class="company">${item.company}</div>
                <div class="name">${item.item_name}</div>

                <div class="price">
                    <span class="current">Rs ${item.current_price}</span>
                    <span class="original">Rs ${item.original_price}</span>
                    <span class="discount">${item.discount_percentage}</span>
                </div>

                <div class="extra">${item.return_period}</div>
                <div class="extra">${item.delivery_date}</div>
            </div>

            <div class="remove">X</div>
        </div>
    `;
}
