document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");

    // Dummy data (replace with actual product data)
    const products = [
        { id: 1, name: "Product 1", price: 19.99, image: "product1.jpg" },
        { id: 2, name: "Product 2", price: 29.99, image: "product2.jpg" },
        // Add more products as needed
    ];

    // Populate product cards
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add("product-image");

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const addToCartButton = document.createElement("a");
        addToCartButton.href = "#"; // Add actual cart functionality
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.classList.add("button");

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartButton);

        productsContainer.appendChild(productCard);
    });
});
