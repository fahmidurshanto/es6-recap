/*১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।      */

// we can change the value of if we write a variable through let.
let ticketPrice = 20;
ticketPrice = 25;
// console.log(ticketPrice);

const catName = "Jacky Bilai";
// catName = "Daku Bilai"; this can't be happen beacause if we write a variable through const it can't be changed like let.
// console.log(catName);

//  the difference between let and const is let can be changed later, but const can't be changed, const's variable is locked in a box, and it can't be changed.

// On the other hand we can change the variable of let in a block, that means we can reassign the variable of let in a block.

/*
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। 

একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/

const cat = {
  name: "jacky bilai",
  age: 2,
};
const dynamic = `
  Hello I am ${cat.name}.
  I am ${cat.age} years old.
  To visit me you have to pay ${ticketPrice} BDT.
  Ashba mia dekhte?
`;
// console.log(dynamic);

/* ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। 
এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।
 */

dividedByFive = (number) => number / 5;
const number1 = dividedByFive(100);
// console.log(number1);

/*৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। 
প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
*/

sum = (n, n2) => n + 2 * n2 + 2;
const number2 = sum(2, 4);
// console.log(number2);

/*  ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। 
যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।    
----------*/
multiply = (num1, num2, num3) => num1 * num2 * num3;
const number3 = multiply(2, 5, 3);
// console.log(number3);

/*৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। 
ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
 */

sumAndMultiply = (x, y) => {
  const firstSum = x + 2;
  const secondSum = y + 2;
  const multiplyResult = firstSum * secondSum;
  return multiplyResult;
};
const result = sumAndMultiply(3, 3);
// console.log(result); // Output: 35

/*
৫. অনেকগুলা সংখ্যার একটা array হবে। 
তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। 
পুরা কাজটা এক লাইনে হবে। 
*/

let kolas = [2, 3, 4, 5, 6, 7, 8, 9];
const kolas2 = kolas.map((num) => num * 5);
// console.log(kolas);
// console.log(kolas2);
/*
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/
const onekGulaShonkha = [21, 56, 41, 23, 32, 44, 45];
const oddNumbers = onekGulaShonkha.filter((num) => num % 2 === 1);
// console.log(oddNumbers);

/*
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা,
সেই অবজেক্টকে find দিয়ে বের করো। 
 */
const products = [
  { name: "pencil", price: 10 },
  { name: "ball point pen", price: 20 },
  { name: "notebook", price: 200 },
  { name: "laptop", price: 5000 },
  { name: "mouse", price: 300 },
];
const foundProduct = products.find((product) => product.price === 5000);
console.log(foundProduct);

/*
৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
*/
/*৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
 */
const { name, price } = products[0];
console.log(name);
console.log(price);
/*
 ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/
const array = [2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, three, ...rest] = array;
// console.log(three);
