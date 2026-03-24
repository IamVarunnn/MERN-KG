{/* <div class="items-container">
    <div class="item-container">
        <img class="item-image" src="images/1.jpg" alt="">
        <div class="rating">
            <span>4.5 ⭐ | 1.4k</span>
        </div>
        <div class="company-name">Carlton London</div>
        <div class="item-name">Rodhium - Plated CZ FLoral Studs</div>
        <div class="price">
            <span class="current-price" >Rs 606</span>
            <span class="original-price" >Rs 1045</span>
            <span class="discount-percentage" >(42% OFF)</span>
        </div>
        <button class="btn-add-bag" >Add to Bag</button>
    </div>

</div> */}

let items_container = document.querySelector(".items-container");

let item = {
    item_image : 'images/1.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1444
    },
    company_name : 'Carlton London',
    item_name : 'Rodiudm-Plated CZ Floral Studs',
    current_price : 606,
    original_price : 1485,
    dicount_percentage : 42
};

items_container.innerHTML = `
    <div class="item-container">
        <img class="item-image" src="${item.item_image} " alt="">
        <div class="rating">
            <span>${item.rating.stars} ⭐ | ${item.rating.noOfReviews}</span>
        </div>
        <div class="company-name"> ${item.company_name} </div>
        <div class="item-name">${item.item_image} </div>
        <div class="price">
            <span class="current-price" >Rs${item.current_price} </span>
            <span class="original-price" >Rs${item.original_price}</span>
            <span class="discount-percentage" >(${item.dicount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" >Add to Bag</button>
    </div>
`;


