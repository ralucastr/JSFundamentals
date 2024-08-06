const bankDebits = [
    {
        id: 1,
        amount: 3
    },
    {
        id: 2,
        amount: 10
    },
    {
        id: 3,
        amount: 14
    },
    {
        id: 4,
        amount: 18
    },
    {
        id: 5,
        amount: 30
    }
];

bankDebits.forEach((debit) => {

    if (debit.amount >= 10) {
        console.log(`The amount is: ${debit.amount}`)
    } else {
        console.log(`Required not met for amount ${debit.amount}`)
    }
});

// Output:
// Required not met for amount 3
// The amount is: 10
// The amount is: 14
// The amount is: 18
// The amount is: 30