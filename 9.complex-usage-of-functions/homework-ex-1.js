// Function definition with default parameters
function calculateTotal(subtotal, taxRate = 0.07, shippingFee = 5) {
    const totalCost = subtotal + (subtotal * taxRate) + shippingFee;
    return totalCost;
}

// Test cases
const total1 = calculateTotal(100); // Using default taxRate and shippingFee
console.log(`Total cost (default params): $${total1}`); // Output: $112.0

const total2 = calculateTotal(100, 0.1); // Using a custom taxRate, default shippingFee
console.log(`Total cost (custom taxRate): $${total2}`); // Output: $115.0

const total3 = calculateTotal(100, 0.1, 10); // Using custom taxRate and shippingFee
console.log(`Total cost (custom params): $${total3}`); // Output: $120.0
