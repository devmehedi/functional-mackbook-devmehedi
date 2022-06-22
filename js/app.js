// Calculate Product Costing by using single function
function getProductCost(productId, amount) {
    const memoryCost = document.getElementById(productId);
    const newMemoryCost = parseInt(memoryCost.innerText);
    memoryCost.innerText = amount;
    getTotal()
    // const totalCost = document.getElementById('total-cost');
    // const previousTotal = totalCost.innerText;
    // const currentTotal = parseInt(previousTotal);
    // totalCost.innerText = currentTotal + amount;


};

//Sub total and Grand total calculation
function getTotal() {
    const bestPrice = document.getElementById('best-price');
    const currentBestPrice = parseInt(bestPrice.innerText);
    const memoryPrice = document.getElementById('memory-cost');
    const currentMemoryPrice = parseInt(memoryPrice.innerText);
    const storageCost = document.getElementById('storage-cost');
    const currentStorageCost = parseInt(storageCost.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const currentDeliveryCost = parseInt(deliveryCost.innerText);
    const totalCost = document.getElementById('total-cost');
    const currentTotalCost = parseInt(totalCost.innerText);
    const subTotal = currentBestPrice + currentMemoryPrice + currentStorageCost + currentDeliveryCost;
    totalCost.innerText = subTotal;
    const grandTotal = document.getElementById('all-price-bottom');
    const currentGrandTotal = parseInt(grandTotal.innerText);
    grandTotal.innerText = subTotal;
}

/* function parseAll(productId) {
    const productText = document.getElementById(productId);
    const productAmount = parseInt(productText.innerText);
    productAmount.innerText = productAmount;
} */


// All click events
document.getElementById('first-memory').addEventListener('click', function () {
    getProductCost('memory-cost', 0);
});
document.getElementById('last-memory').addEventListener('click', function () {
    getProductCost('memory-cost', 100)
})
document.getElementById('storage-256gb').addEventListener('click', function () {
    getProductCost('storage-cost', 0)
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    getProductCost('storage-cost', 100)
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    getProductCost('storage-cost', 180)
})
document.getElementById('late-delivery').addEventListener('click', function () {
    getProductCost('delivery-cost', 0)
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    getProductCost('delivery-cost', 20)
})

// Mechanism of Coupon code
document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponInput = document.getElementById('coupon-input');
    const coupon = 'steavekaku';
    if (couponInput.value == coupon) {
        const grandTotal = document.getElementById('all-price-bottom');
        const currentGrandTotal = parseInt(grandTotal.innerText);
        grandTotal.innerText = (currentGrandTotal / 100) * 80;
        // grandTotal.innerText = currentGrandTotal - (currentGrandTotal * 20 / 100);
        couponInput.value = '';
    }
    else {
        alert('Please input correct Coupon code!');
        couponInput.value = '';
    }
})