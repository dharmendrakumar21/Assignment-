// JavaScript Variables
let userName = "John";
const age = 25;
console.log(`User: ${userName}, Age: ${age}`);

// JavaScript Functions
function greetUser(name) {
  alert(`Hello, ${name}!`);
}
greetUser(userName);

// JavaScript Objects
const user = {
  name: "Jane",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  },
};
user.greet();

// JavaScript Arrays
const colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log(colors);

// JavaScript Loops
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// JavaScript Conditionals
if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Interactive Example
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  const name = document.getElementById("name").value;
  alert(`Form submitted! Hello, ${name}`);
});
