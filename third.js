
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    

}
const drawGame = ()=>
{
  
    msg.innerText="Game was Draw.play again";
    msg.style.backgroundColor="#081b31"
}

const showinner=(userWin,userChoice,CompChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`you Lost.${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const CompChoice=genCompChoice();
    console.log("comp choice=",CompChoice);


    if(userChoice==CompChoice)
    {
drawGame();
    }
else{
    let userWin=true;
    if(userChoice=="rock")
    {
        //scissors,paper
        userWin==CompChoice=="paper"?false:true;
    }
    else if(userChoice=="paper")
    {
        //rock scissors
        userWin=CompChoice=="scissors"?false:true;
    }
    else
    {
        //rock paper
        CompChoice=="rock"? false:true;
    }
    showinner(userWin,userChoice,CompChoice);
}

}

choices.forEach((choice)=>
{

    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});