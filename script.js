//Arithmetic Operators
let a = 10;
let b = 20;
console.log("Sum of the two numbers:", a + b);
console.log("Difference of the two numbers:", a - b);
console.log("Product of the two numbers:", a * b);
console.log("Ratio of the two numbers:", a / b);
console.log("Modulus of the two numbers:", a % b);

//Assignment Operators

let c = 50;
console.log("Number:", c);
c += 5;
console.log("After Incrementing By 5:", c);
c -= 10;
console.log("After Decrementing By 10:", c);
c *= 5;
console.log("After Multiplying With 5:", c);
c /= 15;
console.log("After Dividing by 15:", c);

let d = 10;
let e = 15;

console.log(d, "Equals:", e, ":", d == e);
console.log(d, "Strictly Equals:", e, ":", d === e);
console.log(d, "Not Equals:", e, ":", d != e);
console.log(d, "Greater Than:", e, ":", d > e);
console.log(d, "Smaller Than:", e, ":", d < e);
console.log(d, "Less Than Or Equal To:", e, ":", d <= e);

//Expressions

let price = parseInt(prompt("Enter Price of the Product:"));
let quantity = parseInt(prompt("Enter Quantity:"));
let TotalPrice = price * quantity;
console.log("Total Price:", TotalPrice);

let marks1 = Number(prompt("Enter English Marks:"));
let marks2 = Number(prompt("Enter Maths Marks:"));
let marks3 = Number(prompt("Enter Urdu Marks:"));
let FinalScore = marks1 + marks2 + marks3;
console.log("Total Marks:", FinalScore);

//Practice Task
number = 10;

string = "Pakistan";
//number  and string are two different datatypes ,== compares equality like 5=5 while === compares equality plus datatype so both are false here because thery are neither equal nor have same datatype.
console.log("Comparing Num And String", number == string);
console.log("Strictly Comparing Num And String", number === string);
