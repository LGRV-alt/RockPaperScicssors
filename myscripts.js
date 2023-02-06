// Adding Event listeners 


const playerResults = document.getElementById("playerResults");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");

let playerWins = 0
let compWins = 0
let playerChoice = ""
let compChoice = ""

document.getElementById("playerScore").innerHTML = playerWins
document.getElementById("compScore").innerHTML = compWins

document.getElementById("playerChoice").innerHTML = playerChoice

paper.addEventListener("click", function(){
    playerChoice = "paper";
    document.getElementById("playerChoice").innerHTML = playerChoice
    playRound(playerChoice, computer());
    document.getElementById("compChoice").innerHTML = compChoice
    winner(playerWins);
});

rock.addEventListener("click", function(){
    playerChoice = "rock";
    document.getElementById("playerChoice").innerHTML = playerChoice
    playRound(playerChoice, computer());
    document.getElementById("compChoice").innerHTML = compChoice
    winner(playerWins);
});

scissors.addEventListener("click", function(){
    playerChoice = "scissors";
    document.getElementById("playerChoice").innerHTML = playerChoice
    playRound(playerChoice, computer());
    document.getElementById("compChoice").innerHTML = compChoice
    winner(playerWins);
});

// OPENS THE MODAL TO RESET AND PLAY AGAIN
function winner(playerWins){
    if(playerWins === 5){
        openModal()
        document.getElementById("winnerResult").innerHTML = "Well done, you beat the computer"
        document.getElementById("rpScore").innerHTML = "+244RP"
    }else if(compWins === 5){
        openModal();
        // document.getElementById("winnerResult").innerHTML = "You lost, skynet is one step closer"
        // score.classList.add("lose")
    }
}


// FUNCTION TO RESET THE VALUES OF THE GAME
const resetGame = function(){
    playerWins = 0;
    compWins = 0;
    document.getElementById("playerScore").innerHTML = playerWins;
    document.getElementById("compScore").innerHTML = compWins;
}


function playRound(playerChoice, compChoice){
        if (playerChoice == compChoice){
            document.getElementById("roundResult").innerHTML= ("Tie , both players played " + playerChoice); 
        } else if (playerChoice == "rock" & compChoice =="scissors") {
            document.getElementById("roundResult").innerHTML=("Player Wins, rock beats scissors!!");
            playerWins += 1;
            console.log(playerWins)
            document.getElementById("playerScore").innerHTML = playerWins

        } else if (playerChoice == "scissors" & compChoice =="paper") {
            document.getElementById("roundResult").innerHTML=("Player Wins, scissors beats paper!!");
            playerWins += 1;
            document.getElementById("playerScore").innerHTML = playerWins
        
        } else if (playerChoice == "paper" & compChoice == "rock") {
            document.getElementById("roundResult").innerHTML=("Player Wins, paper beats rock!!");
            playerWins += 1;
            document.getElementById("playerScore").innerHTML = playerWins
            
        } else if (compChoice == "rock" & playerChoice =="scissors") {
            document.getElementById("roundResult").innerHTML=("Computer Wins, rock beats scissors!!");
            compWins += 1;
            document.getElementById("compScore").innerHTML = compWins
        
        } else if (compChoice == "scissors" & playerChoice =="paper") {
            document.getElementById("roundResult").innerHTML=("Computer Wins, scissors beats paper!!");
            compWins += 1;
            document.getElementById("compScore").innerHTML = compWins
            
        } else if (compChoice == "paper" & playerChoice == "rock") {
            document.getElementById("roundResult").innerHTML=("Computer Wins, paper beats rock!!");
            compWins += 1;
            document.getElementById("compScore").innerHTML = compWins
            
        }
    }

// COMPUTER CHOICE - 
let choice = ["rock", "paper", "scissors"]
function computer(){    
    compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice
}

// MODAL BUTTON -
const score = document.querySelector(".score")
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open")
const closeModalBtn = document.querySelector(".btn")

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    resetGame();
}


closeModalBtn.addEventListener("click", closeModal)

// // 1. set values 
// let playerChoice = ""  
// let compChoice = ""
// let playerWins = 0
// let compWins = 0

// // //PLAYER CHOICE - 

// function player(){
//     playerChoice = ""
//     while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
//         playerChoice = prompt("Please pick rock, paper or scissors").toLowerCase();
//     } if (playerChoice === "rock"){
//         alert("Player chose rock");
//     }  else if (playerChoice === "paper"){
//         alert("Player chose paper");
//     } else if (playerChoice === "scissors"){
//         alert("Player chose scissors");
//     } return playerChoice
// }

// // COMPUTER CHOICE - 
// let choice = ["rock", "paper", "scissors"]
// function computer(){    
//     compChoice = choice[Math.floor(Math.random() * choice.length)];
//     return compChoice
// }


// // PLAY ONE ROUND FUNCTION
// // function playRound(playerChoice, compChoice){
// //     if (playerChoice == compChoice){
// //         alert("Tie , both players played " + playerChoice); 
// //     } else if (playerChoice == "rock" & compChoice =="scissors") {
// //         alert("Player Wins, rock beats scissors!!");
// //         playerWins += 1;
// //         playerChoice = "reset"
    
// //     } else if (playerChoice == "scissors" & compChoice =="paper") {
// //         alert("Player Wins, scissors beats paper!!");
// //         playerWins += 1;
    
// //     } else if (playerChoice == "paper" & compChoice == "rock") {
// //         alert("Player Wins, paper beats rock!!");
// //         playerWins += 1;
        
// //     } else if (compChoice == "rock" & playerChoice =="scissors") {
// //         alert("Computer Wins, rock beats scissors!!");
// //         compWins += 1;
    
// //     } else if (compChoice == "scissors" & playerChoice =="paper") {
// //         alert("Computer Wins, scissors beats paper!!");
// //         compWins += 1;
        
// //     } else if (compChoice == "paper" & playerChoice == "rock") {
// //         alert("Computer Wins, paper beats rock!!");
// //         compWins += 1;
        
// //     }
// // }

// // GAME OF FIVE ROUNDS-
// // for (let i = 0; i < 5; i++){
// //     player();
// //     computer();
// //     playRound(playerChoice, compChoice);
// //     alert("Player Wins - " + playerWins + " Computer Wins - " + compWins);
// //     if (i == 4){
// //         if (playerWins > compWins){
// //             alert("Player is the Winner!!");
// //         } else if (playerWins == compWins){
// //             alert("Game was a tie!!")
// //         }else{
// //             alert("Unlucky, the computer beat you!!");
// //         }
// //     }
// // } 



// // // INITIATES CODE FOR ONE ROUND
// // player();
// // computer();
// // playRound(playerChoice, compChoice)
// // console.log(playerChoice)





// console.log("comp Choice -" + compChoice)
// console.log(playerChoice)
// console.log(playerWins)
// console.log(compWins)







// // 3. compare it to the computer













