// Template literals
let tempStrings = "Template Literals";
console.log(`I like the ${tempStrings}`);

// For-of & For-in iterators

const myValues = [1, 2, 3, 4, 5];
const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

for (const value of students) {
  document.write(`<p>${value}</p>`);
}

const myObj = {
  name: "John",
  age: 30,
  city: "New York"
};

document.write("---- For-in loop iteration method ----")
for (const key in myObj) {

  document.write(`<p>${key}: ${myObj[key]}</p>`)
}

// Rest operator
document.write("---- Rest operator ----")
const restFunction = (...nums) => {
  console.log('Nums: ', nums);
  let sum = 0;
  for (let data in nums) {
    console.log(data, nums[data])
    sum += nums[data];
  }
  document.write(`<p>Sum is: ${sum}</p>`);
}

restFunction(10, 20, 30, 40, 50);

// Spread operator

const fruits = ["apple", "banana", "cherry"];
const veggies = ["carrot", "broccoli", "spinach"];

const allFoods = [...fruits, ...veggies];
console.log('All foods: ', allFoods);

const useCars = {
  name: "Toyota",
  modal: "Camry"
};

const newCar = {
  ...useCars,
  year: 2020
};
console.log('New car: ', newCar);

// Destructuring

const datas = [0, 1, 2, 3, 4];
const [zero, one, two] = datas;
console.log('Zero: ', zero);

const objDestru = {
  firstName: "John",
  lastName: "Doe",
  age: 33
};

const { firstName, lastName, age = 32 } = objDestru;
console.log('First Name: ', firstName);
console.log('Last Name: ', lastName);
console.log('Age: ', age);


const Register = (urlData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Please register');
      if (urlData) {
        resolve("Successfully registered");
      } else {
        reject("Failed to register");
      }
    }, 3000);
  })
}
url = '';
Register(url).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

// String reverse

let str_original = "Apple";
let str_reversed = str_original.split("").reverse().join("")
console.log(str_reversed)

// using with loops

let str_text = "";

for (let i = 0; i < str_original.length; i++) {
  str_text = str_original[i] + str_text;
}
console.log(str_text);

// Largest number in the sequence

let array_originals = [5, 140, 3, 8, 2];
console.log(Math.max(...array_originals));

// Check palindrom

let palindrome_text = "Racecare";

let palindrome_reversed = palindrome_text.split("").reverse().join('');

if (palindrome_text.toLowerCase() === palindrome_reversed.toLowerCase()) {
  console.log("It's a palindrome!");
} else {
  console.log("It's not a palindrome.");
}

// Change background color of body of the document whenever event happened in the page

function changeBackgroundColor() {
  let body = document.body;
  let colorStr = "0123456789ABCDEF";
  let randomStr = "#";
  for (let i = 0; i < 6; i++) {
    randomStr += colorStr[Math.floor(Math.random() * 16)];
  }
  body.style.backgroundColor = randomStr;
}