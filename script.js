let computerMove='';
let humanMove='';
let humanScore=0;
let computerScore=0;
let result='';
const span1=document.querySelector('.span-1');
const yourResult=document.createElement('span');
const span2=document.querySelector('.span-2');
const computerResult=document.createElement('span');
const insider=document.querySelector('.insider');
const theResult=document.createElement('h3');

function getComputerChoice(){
    
    let RandomNumber=(Math.random())*10;
    if (RandomNumber<=3){
        computerMove='rock';
    }
    else if(RandomNumber>3 && RandomNumber<7){
        computerMove='paper';
    }
    else if(RandomNumber>=7){
        computerMove='sissor';
    }
    
   
   
}

function scoreCalculator(){
    getComputerChoice();
    if (humanMove==='rock'){
        if (computerMove==='rock'){
            humanScore+=1;
            
        }
        else if(computerMove==='paper'){
            computerScore+=1;
            
        }
        else if(computerMove==='sissor'){
            computerScore+=1;
        }
    }
    if (humanMove==='paper'){
        if (computerMove==='rock'){
            computerScore+=1;
        }
        else if(computerMove==='paper'){
            humanScore+=1;
        }
        else if(computerMove==='sissor'){
            computerScore+=1;
        }
    }
    if (humanMove==='sissor'){
        if (computerMove==='rock'){
            computerScore+=1;
        }
        else if(computerMove==='paper'){
            computerScore+=1;
        }
        else if(computerMove==='sissor'){
            humanScore+=1;
        }
    }
  
    if (humanScore>computerScore){
        result='you win'
    
    }
    else if(humanScore<computerScore){
        result='computer wins';
    }
    else{
        result='both of u are the same';
    }
    
    yourResult.textContent=humanScore;
    span1.appendChild(yourResult);

   
    computerResult.textContent=computerScore;
    span2.appendChild(computerResult);

    theResult.textContent=result;
    insider.appendChild(theResult);

    
    
    
}
function theReset(computerScore,humanScore){
    computerScore=0;
    humanScore=0;
}



