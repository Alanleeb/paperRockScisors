var userScore = 0
var computerScore = 0
var userScore_span = document.getElementById('userScore')
var computerScore_span = document.getElementById('computerScore')
var choiceText_p = document.getElementById('choice')
var winnerText_p = document.getElementById('winOrLose')
var tieCount = document.getElementById('ties')
var rock_btn = document.getElementById('rock')
var paper_btn = document.getElementById('paper')
var scisors_btn = document.getElementById('scisors')

function win(user, computer) {
  userScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  choiceText_p.innerHTML = "You chose " + user + " and the computer chose " + computer
  winnerText_p.innerHTML = user + " beats " + computer + ", YOU WIN! "
}

function lose(user, computer) {
  computerScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  choiceText_p.innerHTML = "You chose " + user + " and the computer chose " + computer
  winnerText_p.innerHTML = computer + " beats " + user + ", YOU LOSE!"
}

function draw(user, computer) {
  choiceText_p.innerHTML = "You chose " + user + " and the computer chose " + computer
  winnerText_p.innerHTML = user + " and " + computer + "are the same, IT'S A DRAW!"
}

function compChoice(){
  var choices = ["rock", "paper", "scisors"]
  var randNum = Math.floor(Math.random() * 3)
  return choices[randNum]
}
function game(choice) {
   var computerChoice = compChoice()
   switch(choice + computerChoice){
   case "rockscisors":
   case "paperrock":
   case "scisorspaper":
   win(choice, computerChoice)
   break;
   case "scisorsrock":
   case "rockpaper":
   case "paperscisors":
   lose(choice, computerChoice)
   break;
   case "scisorsscisors":
   case "rockrock":
   case "paperpaper":
   draw(choice, computerChoice)
   break;
 }

}

function main() {
  rock_btn.addEventListener('click', function() {
    game('rock')
  })
  paper_btn.addEventListener('click', function() {
    game('paper')
  })
  scisors_btn.addEventListener('click', function(){
    game('scisors')
  })
}

main()
