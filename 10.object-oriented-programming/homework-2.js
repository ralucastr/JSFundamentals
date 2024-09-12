class BankAccount {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this._balance = 0;
    }
  
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this._balance}`);
        }
    }
  
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this._balance}`);
        } else {
            console.log('Insufficient funds or invalid amount.');
        }
    }
  
    getBalance() {
      return this._balance;
    }
}
  
const myAccount = new BankAccount('123456789');
myAccount.deposit(1000);
myAccount.withdraw(500);
console.log(`Final balance: ${myAccount.getBalance()}`); // Output: "Final balance: 500"
