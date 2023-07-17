document.addEventListener('DOMContentLoaded', displayProductDetails);

function displayProductDetails() {
    const productData = getProductData();

    if (productData) {
        const container = document.getElementById('product-details');

        const image = document.createElement('img');
        image.className = 'product-image';
        image.src = productData.image;
        image.alt = productData.title;
        container.appendChild(image);

        const title = document.createElement('h2');
        title.className = 'product-title';
        title.textContent = productData.title;
        container.appendChild(title);

        const price = document.createElement('p');
        price.className = 'product-price';
        price.textContent = '$' + productData.price;
        container.appendChild(price);

        const buyNowButton = document.createElement('button');
        buyNowButton.className = 'buy-now-button';
        buyNowButton.textContent = 'Buy Now';
        container.appendChild(buyNowButton);
    }
}

function getProductData() {
    const productData = localStorage.getItem('productData');
    return productData ? JSON.parse(productData) : null;
}
