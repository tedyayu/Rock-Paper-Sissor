let computerMove='';
let humanMove;
let humanScore=0;
let computerScore=0;
let yourResult;
let computerResult;


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
        console.log(`human score is ${humanScore} the computer score is ${computerScore} so you win!`)
    
    }
    else if(humanScore<computerScore){
        console.log(`computer score is ${computerScore}  and human score is ${humanScore} so computer beates!`)
    }
    else{
        console.log('you are the same!');
    }
    
    
    
}


