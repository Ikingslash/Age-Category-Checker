// Prompt the user to enter their age
let age = prompt("Please enter your age to check your category:");
// Check if input is not a valid number or empty
if (age === "" || isNaN(age)) {
  alert("Please enter a valid number for your age.");
  // Age Category Check
} else if (age < 0) {
  alert("Age cannot be negative.");
} else if (age < 13) {
  alert("You are a child.");
} else if (age < 20) {
  alert("You are a teenager.");
} else if (age < 65) {
  alert("You are an adult.");
} else {
  alert("You are an Old Person.");
}
