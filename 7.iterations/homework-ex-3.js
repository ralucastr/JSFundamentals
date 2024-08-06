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

const result = bankDebits.some(debit => debit.amount === 10);
console.log(result); // Output: true