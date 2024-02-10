var Clicks1 = 1
var Clicks2 = 1

let items = [
    {
        id: 1,
        name: 'Samsung',
        price: '50000',
        description: '5GB + 15Mp',
        clicks: 1,
    },
    {
        id: 2,
        name: 'Xiaomi',
        price: '50000',
        description: '5GB + 15Mp',
        clicks: 1,
    },
];

function PlusClick(id){
    var ClickElement = document.getElementById('Click' + id)
    if(ClickElement){
        var clicks = parseInt(ClickElement.innerHTML)
        clicks++;
        ClickElement.innerHTML = clicks;
    }
}

function MinusClick(id){
    var ClickElement = document.getElementById('Click' + id)
    if(ClickElement){
        var Clicks = parseInt(ClickElement.innerHTML)
        if(Clicks > 1){
        Clicks -= 1;    
        }
        ClickElement.innerHTML = Clicks;
    }
}

let arr = [
    {   id: 1,
        name: 'Realme C33',
        type: 'Night sea',
        Storage: '4 + 128 GB',
        price: 'Rp 1.000.000',
        clicks: 1,
        image: 'img/productimages.png'
    },
    {   id: 2,
        name: 'Realme C33',
        type: 'Night sea',
        Storage: '4 + 128 GB',
        price: 'Rp 1.000.000',
        clicks: 1,
        image: 'img/productimages.png'
    },
    {   id: 3,
        name: 'Realme C33',
        type: 'Night sea',
        Storage: '4 + 128 GB',
        price: 'Rp 1.000.000',
        clicks: 1,
        image: 'img/productimages.png'
    },
];

function RenderProducts() {
    var ProductList = document.getElementsByClassName('isi-kerajang')[0];
    arr.forEach(function (element){
        var ListItem = document.createElement('div');
        ListItem.innerHTML = `
        <div class="produk-keranjang">
                        <div class="frame-keranjang">
                            <input type="checkbox">
                            <img src="${element.image}" width="69px" height="84px" style="margin: 15px">
                            <div class="frame-text">
                                <h3>${element.name}</h3>
                                <p>${element.type}</p>
                                <p>${element.Storage}</p>
                            </div>
                        </div>
                        <div class="char-keranjang">
                            <p>Цена</p>
                            <p>${element.price}</p>
                        </div>
                        <div class="switch-keranjang">
                            <div class="switch-kernajang-buttons">
                                <p onClick="MinusClick(${element.id})" style="cursor: pointer;">-</p>
                                <p id="Click${element.id}">${element.clicks}</p>
                                <p onClick="PlusClick(${element.id})" style="cursor: pointer;">+</p>
                            </div>
                        </div>
                        <div class="char-keranjang">
                            <p>Итого</p>
                            <p>Rp 1.000.000</p>
                        </div>
                        <div class="delete-button">
                            X
                        </div>
                    </div>
        `;
        console.log(ProductList)
        ProductList.appendChild(ListItem)
        
    })

}

    RenderProducts();
66
// arr.forEach(function (element) {
//     console.log(element.id)
// });