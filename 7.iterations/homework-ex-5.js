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

const result = bankDebits.map((debit) => {
  return debit.amount * 2; 
});
console.log(result); // Output: [ 6, 20, 28, 36, 60 ]