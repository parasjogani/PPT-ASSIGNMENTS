document.addEventListener('DOMContentLoaded', getProducts);

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

        container.appendChild(card);
    });
}
