let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    let secretTargetNumber = Math.floor(Math.random() * 10);
    return (secretTargetNumber);
}

function compareGuesses(userGuess, computerGuess, secretTargetNumber) {
    const userDifference = Math.abs(secretTargetNumber - userGuess);
    const computerDifference = Math.abs(secretTargetNumber - computerGuess);

    return userDifference <= computerDifference;
}

    

function updateScore(winner){
    if(winner === "human"){
        humanScore++;
    }else if(winner ==="computer"){
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++ ;
}