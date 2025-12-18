
        // Minimal JS: Calculation, Order, History

        const GOLD_PRICE_PER_10G = 125000; // ₹125,000 per 10 grams
        const GST_RATE = 0.05; // 5%

        let orders = JSON.parse(localStorage.getItem('goldOrders') || '[]');

        // Show/hide sections
        function showSection(sectionId) {
            document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
            document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            if (sectionId === 'history') loadHistory();
        }

        // Calculate total on input change
        function calculateTotal() {
            const weight = parseFloat(document.getElementById('gold-weight').value) || 0;
            const ornamentSelect = document.getElementById('ornament-type').value;
            if (weight < 10) return; // Min 10g

            const goldValue = (weight / 10) * GOLD_PRICE_PER_10G;
            const [ornamentType, makingStr] = ornamentSelect.split('|');
            const makingCharges = parseInt(makingStr) || 0;
            const subtotal = goldValue + makingCharges;
            const gst = subtotal * GST_RATE;
            const grandTotal = subtotal + gst;

            document.getElementById('gold-value').textContent = goldValue.toLocaleString();
            document.getElementById('making-charges').textContent = makingCharges.toLocaleString();
            document.getElementById('gst').textContent = gst.toLocaleString();
            document.getElementById('grand-total').textContent = grandTotal.toLocaleString();

            document.getElementById('calculation').style.display = (weight >= 10 && ornamentSelect) ? 'block' : 'none';
        }

        // Order form submit
        document.getElementById('order-form').addEventListener('submit', function(e) {
            e.preventDefault();
            if (this.checkValidity()) {
                const weight = parseFloat(document.getElementById('gold-weight').value);
                const ornamentSelect = document.getElementById('ornament-type').value;
                const [ornamentType] = ornamentSelect.split('|');
                const grandTotal = parseFloat(document.getElementById('grand-total').textContent.replace(/,/g, '')) || 0;

                if (weight < 10 || !ornamentType || grandTotal === 0) {
                    alert('Please select valid weight (min 10g) and ornament type.');
                    return;
                }

                const orderId = 'GOLD' + Math.random().toString(36).substr(2, 8).toUpperCase();
                const order = {
                    id: orderId,
                    weight,
                    ornament: ornamentType,
                    total: grandTotal,
                    timestamp: new Date().toISOString(),
                    name: document.getElementById('customer-name').value,
                    email: document.getElementById('email').value,
                    address: document.getElementById('address').value
                };

                orders.push(order);
                localStorage.setItem('goldOrders', JSON.stringify(orders));

                // Show confirmation
                document.getElementById('order-id').textContent = orderId;
                document.getElementById('order-weight').textContent = weight;
                document.getElementById('order-ornament').textContent = ornamentType;
                document.getElementById('order-total').textContent = grandTotal.toLocaleString();
                document.getElementById('confirmation').style.display = 'block';
                this.reset();
                document.getElementById('calculation').style.display = 'none';

                alert(`Order ${orderId} confirmed! Total: ₹${grandTotal.toLocaleString()}\n(After making ornaments - Simulated purchase)`);
            }
        });

        // Load history
        function loadHistory() {
            const list = document.getElementById('history-list');
            if (orders.length === 0) {
                list.innerHTML = '<p>No orders found.</p>';
                return;
            }
            list.innerHTML = orders.map(order => `
                <div class="order-item">
                    <h4>Order ID: ${order.id}</h4>
                    <p>Weight: ${order.weight}g | Ornament: ${order.ornament}</p>
                    <p>Total: ₹${order.total.toLocaleString()} | Date: ${new Date(order.timestamp).toLocaleDateString()}</p>
                    <p>Customer: ${order.name} | Email: ${order.email}</p>
                    <button onclick="deleteOrder('${order.id}')">complere</button>
                </div>
            `).join('');
        }

        // Delete order
        function deleteOrder(orderId) {
            orders = orders.filter(o => o.id !== orderId);
            localStorage.setItem('goldOrders', JSON.stringify(orders));
            loadHistory();
            alert('Order deliver.');
        }



        

        // Clear all
        function clearHistory() {
            if (confirm('Clear all orders?')) {
                orders = [];
                localStorage.removeItem('goldOrders');
                document.getElementById('history-list').innerHTML = '<p>All records cleared.</p>';
            }
        }

        // Init: Add event listeners
        document.getElementById('gold-weight').addEventListener('input', calculateTotal);
        document.getElementById('ornament-type').addEventListener('change', calculateTotal);





        










 
    const video = document.getElementById('bgVideo');
    const button = document.getElementById('toggleBtn');

    button.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        button.textContent = 'Pause Video';
     
      }} 
    );
  




        








    









    
   