
let score = 0;
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click',(event)=>{


 //Player Display Logic   
 const element_id = event.target.id;
 console.log(element_id)
 const element =Number( element_id);
 const player = document.getElementById('cell1');

    if(element === 0){
        player.innerHTML = '<img src="./Rock_.jpg" alt="" >';
    }
    else if(element === 1){
         player.innerHTML = '<img src="./paper.jpg" alt="" >';
    }
    else if(element === 2){
         player.innerHTML = '<img src="./scissor.jpg" alt="" >';
    }
//Computer Display Logic

const index = Math.floor(Math.random()*3);
const computer = document.getElementById('cell2');
if(element_id !== "RESTART" ){
     if(index === 0){
        computer.innerHTML = '<img src="./Rock_.jpg" alt="" >';
    }
    else if(index === 1){
         computer.innerHTML = '<img src="./paper.jpg" alt="" >';
    }
    else if(index === 2){
         computer.innerHTML = '<img src="./scissor.jpg" alt="" >';
    }
}

//Winner logic 
const winner = document.querySelector('.winning-msg');
if(( element == 0 && index == 2) || (element == 1 && index == 0 ) || (element == 2 && index == 1)){
    winner.textContent = 'You Win';
    score++;
    console.log(score)
    document.querySelector('.score-count').textContent = `${score}`;
}
else if(element == index){
    winner.textContent = 'Draw';
}
else{
    winner.textContent = 'You Lose';
}

//Restart Logic
    if(element_id  === "RESTART"){
    document.querySelector('.score-count').textContent = "";
     winner.textContent = '';
      player.innerHTML='';
      computer.innerHTML='';
    }

})

