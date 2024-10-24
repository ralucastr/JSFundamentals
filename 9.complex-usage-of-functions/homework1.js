console.clear();
function calculateTotal(subtotal, taxRate = 0.07, ShippingFee = 5) { return subtotal + (subtotal * taxRate) + ShippingFee };
function displayCost(amount) {
    if (amount.taxRate == 0.07 && amount.ShippingFee == 5) { console.log(`Total cost (default params): ${amount}`) }
    else { console.log(`Total cost (custom params): ${amount}`) }
};
displayCost(calculateTotal(5));
displayCost(calculateTotal(5, 2, 15));
