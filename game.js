const playerdisplay=document.getElementById("userchoice");
const comdisplay=document.getElementById("comchoice");
const result1=document.getElementById("result");
const player2=document.getElementById("play1");
const computer3=document.getElementById("computer1");
const comchoice=["stone","paper","sicer"];
let comcount=0;
let playercount =0;


function gameplay(choice){
    let result=0;
    let computer=comchoice[Math.floor(Math.random()*3)];
    
    if(choice===computer){
       result="IT'S tie!";

    }
    else{
        switch(choice){
            case "stone":
                result=(computer==="sicer")?"you win!":"you lose!";
                break;
            case "paper":
                result=(computer==="stone")?"you win!":"you lose!";
                break; 
            case "sicer":
                result=(computer==="paper")?"you win!":"you lose!";
        }
       
    }
    
    playerdisplay.textContent=`player choice: ${choice}`;
    comdisplay.textContent=`Computer choice:${computer}`;
    result1.textContent=`${result}`;
    result1.classList.remove("win","lose","tie")
    switch(result){
        case "you win!":
            result1.classList.add("win");
            playercount++;  
           player2.textContent=`player win rate:${playercount}`;
            break;
        case "you lose!":
            result1.classList.add("lose");
            comcount++;
            computer3.textContent=`computer win rate:${comcount}`;
    }
    

}