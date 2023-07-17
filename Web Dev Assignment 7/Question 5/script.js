document.addEventListener('DOMContentLoaded', getProducts);

const cartItems = [];

async function getProducts() {
    const url = 'https://fakestoreapi.com/products';

    try {
        const response = await fetch(url);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.log('Error:', error);
    }
}

function displayProducts(products) {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const image = document.createElement('img');
        image.className = 'product-image';
        image.src = product.image;
        image.alt = product.title;
        card.appendChild(image);

        const title = document.createElement('h2');
        title.className = 'product-title';
        title.textContent = product.title;
        card.appendChild(title);

        const price = document.createElement('p');
        price.className = 'product-price';
        price.textContent = '$' + product.price;
        card.appendChild(price);

        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'add-to-cart-button';
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => {
            addToCart(product);
        });
        card.appendChild(addToCartButton);

        container.appendChild(card);
    });
}

function addToCart(product) {
    cartItems.push(product);
    displayCartItems();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'cart-item';

        const itemImage = document.createElement('img');
        itemImage.className = 'cart-item-image';
        itemImage.src = item.image;
        itemImage.alt = item.title;
        itemCard.appendChild(itemImage);

        const itemTitle = document.createElement('h2');
        itemTitle.className = 'cart-item-title';
        itemTitle.textContent = item.title;
        itemCard.appendChild(itemTitle);

        const itemPrice = document.createElement('p');
        itemPrice.className = 'cart-item-price';
        itemPrice.textContent = '$' + item.price;
        itemCard.appendChild(itemPrice);

        const itemQuantity = document.createElement('p');
        itemQuantity.className = 'cart-item-quantity';
        itemQuantity.textContent = 'Quantity: ' + getQuantity(item);
        itemCard.appendChild(itemQuantity);

        cartItemsContainer.appendChild(itemCard);
    });
}

function getQuantity(item) {
    let quantity = 0;
    cartItems.forEach(cartItem => {
        if (cartItem.id === item.id) {
            quantity++;
        }
    });
    return quantity;
}

// Cart Modal
const cartModal = document.getElementById('cart-modal');
const closeButton = document.getElementsByClassName('close-button')[0];

closeButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

document.addEventListener('click', event => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        cartModal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('product-container').addEventListener('click', event => {
        if (event.target.className === 'add-to-cart-button') {
            cartModal.style.display = 'block';
        }
    });
});
