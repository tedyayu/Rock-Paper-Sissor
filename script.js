function getComputerChoice(){
    let computerMove='';
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

    console.log(computerMove);
}