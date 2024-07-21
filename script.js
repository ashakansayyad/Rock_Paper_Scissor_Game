const ruleContainer = document.querySelector(".rules_container");
const closeRules = document.querySelector(".cancle_btn");
const rulesBtn = document.querySelector(".rule_btn");
const nextBtn = document.querySelector(".next_btn");
const homePage = document.querySelector(".won_btn");
const pointsContainer = document.querySelector(".diOutput");
const mainGameContainer = document.querySelector(".main_Container");
const winnerPage = document.querySelector(".winnerSection");

const lineOne = document.querySelector(".line1");
const lineTwo = document.querySelector(".line2");
const lineThree = document.querySelector(".line3");
const userChoise = document.querySelectorAll(".gameContainer .user");
const computer = document.querySelectorAll(".forComputer .comp");

// document.getElementById("Upoints").textContent =
//   localStorage.getItem("userScore");
// document.getElementById("Cpoints").textContent =
//   localStorage.getItem("compScore");

// console.log(random);
const winText = document.querySelector(".winLoseText");
const againstPcText = document.querySelector("#pctext");
const playAgainBtn = document.querySelector("#playAgain");

const userWinCircle = document.querySelector(".circleContainer .circle");
const comWinCircle = document.querySelector(".circleContainer1 .circle1");
console.log(comWinCircle);

const textContainer = document.querySelector(".textContainer");
const youPickText = document.querySelector(".textContainer .you ");
const pcPickText = document.querySelector(".textContainer .pc ");
const circleCont = document.querySelector(".ResultSection .circleContainer");
const circleContOne = document.querySelector(
  ".ResultSection .circleContainer1"
);
const resultSec = document.querySelector(".ResultSection");

//to append
const remLeft = document.querySelector(".ResultSection .circleContainer .user");
const remRight = document.querySelector(".circleContainer1 .user");

// User and Computer Score On Local Storage

let comScore = document.getElementById("Cpoints");
let userScore = document.getElementById("Upoints");
let uScore = JSON.parse(localStorage.getItem("uSc"));
let cScore = JSON.parse(localStorage.getItem("cSc"));
if(uScore){
  userScore.innerText = uScore;
} if(cScore){
  comScore.innerText = cScore;
}

let userCount = 0;
let comCount = 0;



const genComChoise = (userChoise) => {

    const randomIdx = Math.floor(Math.random() * 3);
    let comChoise = computer[randomIdx];
    // console.log("computer choise: ",comChoise);
    circleContOne.removeChild(remRight);
    setTimeout(()=>{
    circleContOne.appendChild(comChoise);
    comChoise.style.display = "flex";
    pcPickText.style.display = "block";
  },1000)
    
   
    
      playGame(comChoise, userChoise);
 
};

playAgainBtn.addEventListener("click", () => {
  location.reload();
});

userChoise.forEach((element, index) => {
  element.addEventListener("click", () => {
    lineOne.style.display = "none";
    lineTwo.style.display = "none";
    lineThree.style.display = "none";
    userChoise.forEach((item) => {
      item.style.display = "none";
    });
    element.style.display = "flex";
    element.style.margin = "-3.8rem";
    circleCont.removeChild(remLeft);
    circleCont.appendChild(element);
    youPickText.style.display = "flex";
    resultSec.style.display = "flex";
    genComChoise(element);
    // playGame(element);
  });
});

let playGame = (comChoiseElem, userChoiseElem) => {
  let userChoise = userChoiseElem.getAttribute("data-val");
  let comChoise = comChoiseElem.getAttribute("data-val");

  console.log({ userChoise, comChoise });
 
  if (
    (userChoise === "rock" && comChoise === "rock") ||
    (userChoise === "paper" && comChoise === "paper") ||
    (userChoise === "scissor" && comChoise === "scissor")
  ) {
    winText.style.display = "block";
    winText.innerText = "TIE UP";
    playAgainBtn.style.display = "block";
  }else if(userChoise === "rock" && comChoise ==="paper" || 
    userChoise === "paper" && comChoise === "scissor" ||
     userChoise === "scissor" && comChoise === "rock"){
    setTimeout(()=>{
      winText.style.display = "block";
      winText.innerText = "YOU LOST";
      againstPcText.style.display = "block";
      playAgainBtn.style.display = "block";
      comWinCircle.style.display = "flex";
      comCount = cScore;
      comCount++;
      userScore.innerText = comCount ;
      localStorage.setItem("cSc",JSON.stringify(comCount));
    },1000)
 
    
  }else
  {
    setTimeout(()=>{
      winText.style.display = "block";
      winText.innerText = "YOU WIN";
      againstPcText.style.display = "block";
      playAgainBtn.style.display = "block";
      userWinCircle.style.display = "block";
      nextBtn.style.display = "block";
      userCount = uScore;
      userCount++;
      userScore.innerText = userCount ;
      localStorage.setItem("uSc",JSON.stringify(userCount));
    },1000)
    
  }

  // console.log("userchoise:  ", userChoise);
  // const currUserScore = localStorage.getItem("userScore");
  // localStorage.setItem("userScore", Number(currUserScore) + 1);
  // document.getElementById("Upoints").textContent = Number(currUserScore) + 1;

  // console.log("computerchoise:  ", comChoise);

  // const currCompScore = localStorage.getItem("compScore");
  // localStorage.setItem("compScore", Number(currCompScore) + 1);
  // document.getElementById("Cpoints").textContent = Number(currCompScore) + 1;
};

// User Win Page 
nextBtn.addEventListener("click",()=>{
  pointsContainer.style.display = "none";
  mainGameContainer.style.display = "none";
  resultSec.style.display = "none";
  textContainer.style.display = "none";
  winnerPage.style.display = "block";
  nextBtn.style.display = "none";
})

//Go to home page 
homePage.addEventListener("click",()=>{
  location.reload();
})

// Game Rules Function


rulesBtn.addEventListener("click", () => {
  ruleContainer.style.display = "block";
  closeRules.addEventListener("click", () => {
    ruleContainer.style.display = "none";
  });
});
