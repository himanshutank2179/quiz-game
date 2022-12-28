const q = [
  {
    "q": "How many letters are there in the English alphabet?",
    "options": [26, 50, 30, 28],
    "ans": 26
  },
  {
    "q": "How many legs do Elephant have?",
    "options": [5, 2, 6, 4],
    "ans": 4
  },
  {
    "q": "What is the capital of India?",
    "options": ["Mumbai", "Ahmedabad", "Indor", "Delhi"],
    "ans": "Delhi"
  },
  {
    "q": "What is the currency of India?",
    "options": ["USD", "AUD", "INR", "EUR"],
    "ans": "INR"
  },
];

// Picking up random question 
const question = q[parseInt(Math.random() * 4)];
// console.log(question);
console.log(question.q);
console.log('Options => ', question.options.join(','));
const userAns = prompt("Enter Your Answer ");
if (userAns == question.ans) {
  console.log("Congratulations! You Won the game.");
} else console.log('Sorry! Try again latter');