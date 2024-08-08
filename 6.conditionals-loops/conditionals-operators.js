// ## Nullish Coalescing Operator (??)
// let result = value1 ?? value2;
// Example
let name = null;
let defaultName = "Guest";
let userName = name ?? defaultName;
console.log(userName); // Output: Guest

// ## Optional Chaining Operator (?.)
// obj?.prop
// obj?.[expr]
// arr?.[index]
// func?.(args)
// Example
let user = {
    profile: {
        name: "Alice"
    } 
}; 
console.log(user?.profile?.name); // Output: Alice
console.log(user?.address?.city); // Output: undefined