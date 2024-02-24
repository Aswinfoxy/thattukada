// JavaScript for adding items to cart and calculating total
let cartItems = [];
let total = 0;

function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    alert(`Total amount: $${total.toFixed(2)}`);
    // You can add additional functionality here such as sending the order to a server.
}
