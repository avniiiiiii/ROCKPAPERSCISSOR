let userScore = 0; //A.variables create to track scores
let compScore = 0;
const choices = document.querySelectorAll(".choice"); //B.access all choices
//J.
const msg = document.querySelector("#msg");
//M.
const userScorePara = document.querySelector("#yourscore");
const compScorePara = document.querySelector("#compscore");
//E.generation of random option / choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //we can store our choice in an array
  const randomIdx = Math.floor(Math.random() * 3); //convert decimal into whole  and we can treat random no. as our array index
  return options[randomIdx]; //options ke andar koi bhi random index
};
//G.
const drawGame = () => {
  console.log("game was a draw");
  msg.innerText = "game drawn. play again!"; //k.
  msg.style.backgroundColor = "#444b6e";
};
//I.
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    //userWin===true
    //L.score update when userwin
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you won!");
    //K.
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    //userWin===false
    //L.SCORE UPDATE WHEN COMP WINS
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose!");
    //k.
    msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
//D.
const playGame = (userChoice) => {
  console.log("userchoice =", userChoice); //a function that logs the userChoice to the console.
  //generate random comp choice
  //F.generated choice will be passed to playgame func
  const compChoice = genCompChoice();
  console.log("compchoice =", compChoice);
  if (userChoice === compChoice) {
    //G.draw
    drawGame();
  } else {
    //h.in this case we will create a variable userWin to track if user is winning
    let userWin = true;
    if (userChoice === "rock") {
      //either scissors or paper.comp choice can't be rock bcz if that was the case toh game draw hojata
      userWin = compChoice === "paper" ? false : true; //if paper then user will win(true)if scissors user will not win(false)
    } else if ((userChoice = "paper")) {
      //rock or scissors
      userWin = compChoice === "scissors" ? false : true; //paper wins from rock bcz paper can cover rock
    } else {
      //rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    //now our userWin has decided so we can show our winner
    showWinner(userWin, userChoice, compChoice);
  }
};

//C.The forEach function ensures that the same event listener setup (in this case, a click event listener)
//is applied to each choice element in the choices array. This is a concise and efficient
//way to attach event listeners to multiple elements without having to manually write separate
// event listener setup code for each element.
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    //event listner
    const userChoice = choice.getAttribute("id");
    console.log(userChoice); //after click , print what was clicked
    playGame(userChoice);
  });
});
