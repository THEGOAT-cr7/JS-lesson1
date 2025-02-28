let name = prompt("Ismingizni kiriting:");
let surname = prompt("Familyangizni kiriting:");
let age = prompt("Yoshingizni kiriting:");
alert(`Salom, ${name} ${surname}! Sizning yoshingiz ${age}.`);

let num1 = Number(prompt("Birinchi sonni kiriting:"));
let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
let sum = num1 + num2;
alert(`Yig‘indi: ${sum}`); 

let num = Number(prompt("Biror son kiriting:"));

console.log(`Siz kiritgan son: ${num}`);
console.log(`Kvadrati: ${num ** 2}`);
console.log(`Kub: ${num ** 3}`);

alert(`Siz kiritgan son: ${num}\nKvadrati: ${num ** 2}\nKub: ${num ** 3}`);

let birthYear = Number(prompt("Tug‘ilgan yilingizni kiriting:"));
let currentYear = new Date().getFullYear();
let yearAge = currentYear - birthYear;

console.log(`Sizning yoshingiz: ${yearAge}`);
alert(`Sizning yoshingiz: ${yearAge}`);
