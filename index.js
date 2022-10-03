var readlineSync = require("readline-sync");

var score = 0

console.log("Hello! ");
var userName = readlineSync.question("What's your name? ")
console.log();
console.log("Welcome " + userName);

console.log("Lets's play a fun short quiz to see how well do you know Breaking Bad?.")
console.log("(Type only the options, example a,b,c,or d and press enter.)");
console.log();

console.log("Let's Break Bad!!!")

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log("right!")
    score = score + 1
  } else {
    console.log("Wrong!")
  }

  console.log("current score: ", score)
  console.log("--------")
}

var questions = [{
  question: "1. What distracts Walt from absorbing the news of his cancer diagnosis? a. The doctor has mustard on his coat. b. The doctor has a lazy eye. c. Walt is stressing about money. d. Walt’s second cell phone is buzzing in his pocket. ",
  answer: "a"
}, {
  question: "2. Spot the phrase that DID NOT come out of Jesse’s mouth: a. “Yeah bitch, magnets!” b. “Alright, bitch — let’s cook.” c. “So roll me further, bitch.” ",
  answer: "b"
},
{
  question: "3. What primitive weapon do Tuco’s murderous cousins favor? a. Hammer b.Whip c. Axe d. Sword ",
  answer: "c"
},
{
  question: "4. What is Marie’s favorite color? a. Purple b. Pink c. Plum d. Peach ",
  answer: "a"
},
{
  question: "5. Frustrated after failing to get into his family’s house with a mealtime peace-offering, Walt throws this on the roof: a. A bag of burritos b. Fried Chicken c. Pasta d. A Pizza ",
  answer: "d"
}

]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}


console.log("Thank you for playing the game, You Scored: ", score)