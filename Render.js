let PIL = [
    {   id: 1,
        name: 'Realme C33',
        specifications: '50mp Sejutaan Terjangkau',
        price: 'Rp 1.599.000',
        image: 'img/productimages.png'
    },
]

function RenderProductcart() {
    var ProductCart = document.getElementById('productcart1');
    PIL.forEach(function (element){
        var ListItem = document.createElement('div');
        ListItem.innerHTML = `
        <img src="${element.image}">
        <h2>${element.name}</h2>
        <h5>${element.specifications}</h5>
        <h4>${element.price}</h4>
        <div class="button-primary-hover" id="product-in-basket" onClick={SaveProductCart(${element.id}, ${element.name}, ${element.specifications}, ${element.price}, ${element.image})}>
            Cek Spesifikasi
        </div>
        `;
        console.log(ProductCart)
        ProductCart.appendChild(ListItem)
    })
}

let PIL2 = [
    {   id: 1,
        name: 'Realme Pad Mini',
        specifications: 'Peningkat Kinerja Kuat',
        price: 'Rp 2.399.000',
        image: 'img/productimage_2.png'
    },
]

function RenderProductcart2() {
    var ProductCart2 = document.getElementById('productcart2');
    PIL2.forEach(function (element){
        var ListItem2 = document.createElement('div');
        ListItem2.innerHTML = `
        <img src="${element.image}">
        <h2>${element.name}</h2>
        <h5>${element.specifications}</h5>
        <h4>${element.price}</h4>
        <div class="button-primary-hover" id="product-in-basket">
            Cek Spesifikasi
        </div>
        `;
        console.log(ProductCart2)
        ProductCart2.appendChild(ListItem2)
    })
}

let PIL3 = [
    {   id: 1,
        name: 'Realme Buds T100',
        specifications: 'Kebebasan Musik Tanpa Batas',
        price: 'Rp 299.000',
        image: 'img/productimage (1).png'
    },
]

function RenderProductcart3() {
    var ProductCart3 = document.getElementById('productcart3');
    PIL3.forEach(function (element){
        var ListItem3 = document.createElement('div');
        ListItem3.innerHTML = `
        <img src="${element.image}">
        <h2>${element.name}</h2>
        <h5>${element.specifications}</h5>
        <h4>${element.price}</h4>
        <div class="button-primary-hover" id="product-in-basket">
            Cek Spesifikasi
        </div>
        `;
        console.log(ProductCart3)
        ProductCart3.appendChild(ListItem3)
    })
}

RenderProductcart();
RenderProductcart2();
RenderProductcart3();

function SaveProductCart(id, name, specifications, price, image) {
    localStorage.setItem(id, 'tset')
}