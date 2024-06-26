let score=JSON.parse(localStorage.getItem('score'));
if(!score)
{
    score={
        Wins:0,
        Loses:0,
        Ties:0

    };
}
updateScore();
function playGame(playerMove)
{
    if(playerMove==='Rock')
    {
        const computerMove = pickComputeMove();
        let result='';
        if(computerMove==='Rock')
        {
            result='Tie...';
        }
        else if(computerMove==='Paper')
        {
            result='You lose...';
        }
        else
        {
            result='You won';
        }
        if(result==='You lose...')
        {
            score.Loses+=1;
        }
        else if(result==='You won')
        {
            score.Wins+=1;
        }
        else if(result==='Tie...')
        {
            score.Ties+=1;
        }
        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-move').innerHTML=`You 
<img src="images/${playerMove}-emoji.png" class="game-move">
Computer
<img src="images/${computerMove}-emoji.png" class="game-move">`;
        updateScore();
    
    }
    else if(playerMove==='Paper')
    {
        const computersMove=pickComputeMove();
        if(computersMove==='Rock')
        {
            result='You Won';
        }
        else if(computersMove==='Paper')
        {
            result='Tie';
        }
        else
        {
            result='You lose...';
        }
        if(result==='You lose...')
        {
            score.Loses+=1;
        }
        else if(result==='You Won')
        {
            score.Wins+=1;
        }
        else if(result==='Tie')
        {
            score.Ties+=1;

        }
        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-move').innerHTML=`You 
<img src="images/${playerMove}-emoji.png" class="game-move">
Computer
<img src="images/${computersMove}-emoji.png" class="game-move">`;
        updateScore();
     
    }
    else if(playerMove==='Scissor')
    {
        const computeMove=pickComputeMove();
        if(computeMove==='Rock')
        {
            result='You lose...';
        }
        else if(computeMove==='Paper')
        {
            result='You won';
        }
        else
        {
            result='Tie...';
        }
        if(result==='You lose...')
        {
            score.Loses+=1;
        }
        else if(result==='You won')
        {
            score.Wins+=1;
        }
        else if(result==='Tie...')
        {
            score.Ties+=1;
        }
        
        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-move').innerHTML=`You 
<img src="images/${playerMove}-emoji.png" class="game-move">
Computer
<img src="images/${computeMove}-emoji.png" class="game-move">`;
        localStorage.setItem('score',JSON.stringify(score));
        updateScore();
     
    }
    

}
function updateScore()
{
    document.querySelector('.js-score').innerHTML=`Wins:${score.Wins},Loses:${score.Loses},Ties:${score.Ties}`;
}

function pickComputeMove()
{
    const randomNumber=Math.random();
    let computeMove='';
    if(randomNumber>=0 && randomNumber<=1/3)
    {  computeMove='Rock';}
    else if(randomNumber>=1/3 &&randomNumber<=2/3)
    {
        computeMove='Paper';
    }
    else
    {
        computeMove='Scissor';
    }
    return computeMove;
}
