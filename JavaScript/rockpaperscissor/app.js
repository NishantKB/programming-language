let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getcompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const draw = () => {
    console.log("draw");
    msg.innerText = "Draw.";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("You win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
        userScore++
        userScorePara.innerText = userScore;
    }
    else{
        console.log("Computer Win");
        msg.innerText = `You lost. Your ${userChoice} lost to ${compChoice}` ;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;

    }
};

const playGame = (userChoice) =>{
    const compChoice = getcompChoice();
    console.log(compChoice);
    console.log(userChoice);
    if(compChoice === userChoice){
        draw();
    }
    else{
        let userWin;
        if(userChoice === "rock"){
        userWin= compChoice === "scissor" ? true: false;
        }
        else if(userChoice === "paper"){
        userWin= compChoice === "scissor" ?false : true;
        }
        else{
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice)

    }
};

choices.forEach(
    (choice) =>{
        choice.addEventListener("click", ()=> {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
    });
    });
