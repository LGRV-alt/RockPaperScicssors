

// Rock Paper Scissors 

// 1. set values 
let playerChoice = ""  
let playerWins = 0
let compWins = 0

//PLAYER CHOICE - 
while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
    playerChoice = prompt("Please pick rock, paper or scissors").toLowerCase();
} if (playerChoice === "rock"){
    alert("Player chose rock");
}  else if (playerChoice === "paper"){
    alert("Player chose paper");
} else if (playerChoice === "scissors"){
    alert("Player chose scissors");
} 


// COMPUTER CHOICE - 
let choice = ["rock", "paper", "scissors"]
let compChoice = choice[Math.floor(Math.random() * choice.length)];

// PLAY ONE ROUND FUNCTION
function playRound(playerChoice, compChoice){
    if (playerChoice == compChoice){
        alert("Tie , both players played " + playerChoice); 
    } else if (playerChoice == "rock" & compChoice =="scissors") {
        alert("Player Wins, rock beats scissors!!");
        playerWins += 1;
    } else if (playerChoice == "scissors" & compChoice =="paper") {
        alert("Player Wins, scissors beats rock!!");
        playerWins += 1;
    } else if (playerChoice == "paper" & compChoice == "rock") {
        alert("Player Wins, paper beats rock!!");
        playerWins += 1;
    } else if (compChoice == "rock" & playerChoice =="scissors") {
        alert("Computer Wins, rock beats scissors!!");
        playerWins += 1;
    } else if (compChoice == "scissors" & playerChoice =="paper") {
        alert("Computer Wins, scissors beats rock!!");
        playerWins += 1;
    } else if (compChoice == "paper" & playerChoice == "rock") {
        alert("Computer Wins, paper beats rock!!");
        playerWins += 1;
    }
}


// INITIATES CODE FOR ONE ROUND
playRound(playerChoice, compChoice)





console.log("comp Choice -" + compChoice)
console.log(playerChoice)
console.log(playerWins)
console.log(compWins)







// 3. compare it to the computer













