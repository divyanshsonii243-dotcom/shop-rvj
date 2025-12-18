








    
        let cart = [];

        function addToCart(name, price) {
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                cartItems.innerHTML += `
                    <div class="cart-item">
                        <span>${item.name} (x${item.quantity}) - ₹${itemTotal}</span>
                        <button onclick="removeFromCart(${index})">Remove</button>
                    </div>
                `;
            });
            cartTotal.textContent = `Total: ₹${total}`;
        }

        function generateInvoice() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            // For simplicity, open the invoice generator in a new window with cart data
            // You can integrate this with the previous invoice code
            const invoiceWindow = window.open('', '_blank');
            invoiceWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Invoice</title>
                    <link rel="stylesheet" href="test .css" />
                  
                </head>
                <body>
                
                          <div>  <nav>

        
            <button onclick="showSection('products')"><a href="4.html"> BACK</a></button>
      </nav>
      </div>  
                   
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>




                            
     <script src="test.js"></script>
</body>
</html>
                                        <tbody>
                            ${cart.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>${item.quantity}</td>
                                    <td>₹${item.price}</td>
                                    <td>₹${item.price * item.quantity}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    <p><strong>Total: ₹${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</strong></p>
                    <button onclick="window.print()">Print Invoice</button>
                </body>
                </html>
            `);
        }
