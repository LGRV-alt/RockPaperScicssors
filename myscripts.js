

// Rock Paper Scissors 

// 1. set values 
let playerChoice = ""  
let compChoice = ""
let playerWins = 0
let compWins = 0

// //PLAYER CHOICE - 

function player(){
    playerChoice = ""
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        playerChoice = prompt("Please pick rock, paper or scissors").toLowerCase();
    } if (playerChoice === "rock"){
        alert("Player chose rock");
    }  else if (playerChoice === "paper"){
        alert("Player chose paper");
    } else if (playerChoice === "scissors"){
        alert("Player chose scissors");
    } return playerChoice
}

// COMPUTER CHOICE - 
let choice = ["rock", "paper", "scissors"]
function computer(){    
    compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice
}


// PLAY ONE ROUND FUNCTION
function playRound(playerChoice, compChoice){
    if (playerChoice == compChoice){
        alert("Tie , both players played " + playerChoice); 
    } else if (playerChoice == "rock" & compChoice =="scissors") {
        alert("Player Wins, rock beats scissors!!");
        playerWins += 1;
        playerChoice = "reset"
    
    } else if (playerChoice == "scissors" & compChoice =="paper") {
        alert("Player Wins, scissors beats paper!!");
        playerWins += 1;
    
    } else if (playerChoice == "paper" & compChoice == "rock") {
        alert("Player Wins, paper beats rock!!");
        playerWins += 1;
        
    } else if (compChoice == "rock" & playerChoice =="scissors") {
        alert("Computer Wins, rock beats scissors!!");
        compWins += 1;
    
    } else if (compChoice == "scissors" & playerChoice =="paper") {
        alert("Computer Wins, scissors beats paper!!");
        compWins += 1;
        
    } else if (compChoice == "paper" & playerChoice == "rock") {
        alert("Computer Wins, paper beats rock!!");
        compWins += 1;
        
    }
}

// GAME OF FIVE ROUNDS-
for (let i = 0; i < 5; i++){
    player();
    computer();
    playRound(playerChoice, compChoice);
    alert("Player Wins - " + playerWins + " Computer Wins - " + compWins);
    if (i == 4){
        if (playerWins > compWins){
            alert("Player is the Winner!!");
        } else if (playerWins == compWins){
            alert("Game was a tie!!")
        }else{
            alert("Unlucky, the computer beat you!!");
        }
    }
} 



// // INITIATES CODE FOR ONE ROUND
// player();
// computer();
// playRound(playerChoice, compChoice)
// console.log(playerChoice)





console.log("comp Choice -" + compChoice)
console.log(playerChoice)
console.log(playerWins)
console.log(compWins)







// 3. compare it to the computer













