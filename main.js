const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const hoteles = document.querySelector('.hoteles');
const fincas = document.querySelector('.fincas');



navBarEmail.addEventListener('click', toggleNavBarEmail);
burguerMenu.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarAside);

function toggleNavBarEmail() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bici',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Macbook',
    price: 560,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Toy',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pencil',
    price: 125,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

const productToys = [
    { name: '2Bici',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: '2Bici',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: '2Bici',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: '2Bici',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
];

const sites = {
    hoteles: [
        
    {
        name: 'Hotel-1',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Hotel-2',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Hotel-3',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Hotel-4',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Hotel-5',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
        
    ],

    fincas: [
    {
        name: 'Finca-1',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Finca-2',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Finca-3',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Hotel-4',
        price: 160,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },  
    ]
}

function renderProducts(arr, container) {
    for ( product of arr ) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        // img.src('product.image');
        img.setAttribute('src', product.image);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productDiv.append(productPrice, productName);
        productFigure.appendChild(productFigureImg);
        productInfo.append(productDiv, productFigure);
        productCard.append(img, productInfo);
        // cardsContainer.appendChild(productCard);
        container.appendChild(productCard);
    }
}

renderProducts(productList, cardsContainer);
renderProducts(sites.hoteles, hoteles);
renderProducts(sites.fincas, fincas);


