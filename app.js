const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const score1 = document.querySelector('#p1Score');
const score2 = document.querySelector('#p2Score');
const winningScoreSelect = document.querySelector('#pointEndOptions');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score = p1Score + 1;
        score1.textContent = `${p1Score}`;
        if(p1Score === winningScore){
            isGameOver = true;
            score1.classList.add('winner');
            score2.classList.add('loser');
        }
    }
});

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score = p2Score + 1;
        score2.textContent = `${p2Score}`;
        if(p2Score === winningScore){
            isGameOver = true;
            score1.classList.add('loser');
            score2.classList.add('winner');
        }
        
    }
});

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove('loser', 'winner');
    score2.classList.remove('winner', 'loser');
   
}

