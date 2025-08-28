//variable declaration and conditionals
let name = "Josphat";
let age = 20;
let isStudent = true;
let personName = name; // Assigning the value of 'name' to 'personName'

if (age >= 18) {
  // You can put your code here, for example:
  console.log(personName + " is an adult.");

} else {
  console.log(personName + " is a minor.");
}

//custom function
let userName = "Alice";
function greetUser(userName) {
  return "Hello, " + userName + "!";//returns (Hello, Alice!)
  
}
console.log(greetUser(personName));//

function calculateSum(a, b, c) {
  return a + b + c;//returns the sum of three numbers
}
console.log(calculateSum(5, 10, 15));// Output: 30

//loops
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++)//iterates through the array 
    {
  console.log("Number at index " + i + ": " + numbers[i]);
}

let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

//DOM
let change = function() {
  //select the element with id "myElement"
  let intro = document.getElementById("intro");
  let para = document.getElementById("para");
  let body = document.getElementById("body");

//modify the elements
intro.textContent = "Welcome to JavaScript!";
intro.style.color = "blue";
para.textContent = "JavaScript is fun!";
para.style.fontSize = "18px";
para.style.color = "purple";
body.style.backgroundColor = "beige";
para.style.fontFamily = "Arial, sans-serif";
para.style.margin = "20px";
para.style.padding = "10px";
para.style.border = "2px solid black";

//add a new element to the body
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph added by JavaScript.";
newPara.style.color = "green";
body.appendChild(newPara);

}


  
