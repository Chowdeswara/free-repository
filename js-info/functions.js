let user = {
  name: "John",
  surname: 'Smith',
};
user.name = "Pete";
delete user.name;

for (let prop in user) {
  console.log(prop + ': ' + user[prop]);
  // console.log();
}

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+91": "India",
  // ..,
  "+1": "USA",
  "+4": "France"
};

for (let prop in codes) {
  console.log(prop + ': ' + codes[prop]);
}

console.log('***********************');

let schedule = {};

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  } 
  return true;
}

console.log('Is schedule empty?', isEmpty(schedule));

let salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130
}

let sum = 0;

for (let prop in salaries) {
  sum += salaries[prop];
}

console.log('Sum of salaries:', sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for (let prop in menu) {
  if (typeof menu[prop] === "number") {
    menu[prop] = 2 * menu[prop];
  }
}
console.log(menu);