let start = 2;
let end = 12;

for (let i = start; i <= end; i++) {
    let type = (i % 2 === 0) ? "even" : "odd";
    let primeStatus = "not a prime number";

    if (i > 1) {
        for (let x = 2; x <= Math.sqrt(i); x++) {
            if (i % x !== 0) {
                primeStatus = "a prime number";
            }
        }
    }

    console.log(`${i} is ${type} and ${primeStatus}.`);
}

// Output:
// 2 is even and not a prime number.
// 3 is odd and not a prime number.
// 4 is even and not a prime number.
// 5 is odd and a prime number.
// 6 is even and not a prime number.
// 7 is odd and a prime number.
// 8 is even and not a prime number.
// 9 is odd and a prime number.
// 10 is even and a prime number.
// 11 is odd and a prime number.
// 12 is even and not a prime number.
