document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product button');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout');
    const cartItemsContainer = document.getElementById('cart-items');

    // Function to add item to cart
    function addToCart(productName, productPrice) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${productName}</span>
            <span>$${productPrice}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    }

    // Event listener for add to cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('h2').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.slice(1)); // Remove $ sign and convert to number
            addToCart(productName, productPrice);
        });
    });

    // Function to clear the cart
    function clearCart() {
        cartItemsContainer.innerHTML = '';
    }

    // Event listener for clearing the cart
    clearCartButton.addEventListener('click', function() {
        clearCart();
    });

    // Event listener for checkout button
    checkoutButton.addEventListener('click', function() {
        clearCart();
        alert('Thank you for your purchase! Your items have been successfully bought.');
    });
});