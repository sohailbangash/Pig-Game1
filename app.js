/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

  
   var scores, roundScore, activePlayer, gamePlaying;

     init(); // function

    var lastDice;

  

 
    document.querySelector('.btn-roll').addEventListener('click', function() {

        if(gamePlaying){
          
              // 1. Randome number
      var  dice1 = Math.floor(Math.random() * 6) + 1; // IF you want one dice game you delete dice here random
      var  dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. display the result


      document.getElementById('dice1').style.display = 'block';
      document.getElementById('dice2').style.display = 'block';
      document.getElementById('dice1').src = 'Images/dice-' + dice1 + '.png';
      document.getElementById('dice2').src = 'Images/dice-' + dice2 + '.png';

          
         

        /******************* This code is for only 1 dice ***********************/
        // var diceDOM =  document.querySelector('.dice');
        //     diceDOM.style.display = 'block';
        //     diceDOM.src = 'Images/dice-' + dice + '.png';


        // 3. update the round score IF the round number  was NOT  a 1
        
         if(dice1 !== 1 && dice2 !== 1){
            //add scores
            roundScore += dice1 + dice2;  // roundScore = roundScore + dice;
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            // Next player
               nextplayer();
             }




 /******************* This code is for only 1 dice   ****************************************/

        //  if(dice === 6 && lastDice === 6){
        //     // player loose score
        //     scores[activePlayer] = 0;
        //    document.querySelector('#score-' + activePlayer).textContent = '0';
        //  }else if(dice !== 1){
        //     //add scores
        //     roundScore += dice;  // roundScore = roundScore + dice;
        //    document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // }else{
        //     // Next player
        //        nextplayer();
        //      }
        // }

        //  lastDice = dice;
         }
    });


    // for holding data

    document.querySelector('.btn-hold').addEventListener('click', function(){
         
         if(gamePlaying){
                  // Add current score  Global score
         scores[activePlayer] += roundScore;

         // Update the UI

         document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer];

           var input = document.querySelector('.final-score').value;
           var winningSocre;

           // undefined, 0 , null, "" are coerced false;
           // Anthing else COERCED true;

           if(input){
              winningSocre = input;
           }else{
            winningSocre = 100;
           }



         // Check if player won the game

           if(scores[activePlayer] >=  winningSocre){
               document.querySelector('#name-' + activePlayer).textContent = '!WINNER';
               document.getElementById('dice1').style.display = 'none';
               document.getElementById('dice2').style.display = 'none';
               document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
               document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
               gamePlaying = false;

               // document.querySelector('.btn-roll').disabled = true;
               // document.querySelector('.btn-hold').disabled = true;
               // document.querySelector('.btn-hold').innerHTML = 'Finish';

           }else{
                // Next player
                 nextplayer();

           } 
         }


        
    });


    function nextplayer(){
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';


            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            //hide dice
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
    }

        document.querySelector('.btn-new').addEventListener('click', init); //call init function

    
     function init(){
         // var scores = 0;
         // var scores = 0;
         scores = [0,0];
         roundScore = 0;
         activePlayer = 0;
         gamePlaying = true;

        document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
         document.querySelector('.player-0-panel').classList.remove('winner');
         document.querySelector('.player-1-panel').classList.remove('winner');
         document.querySelector('.player-0-panel').classList.remove('active');
         document.querySelector('.player-1-panel').classList.remove('active');

         document.querySelector('.player-0-panel').classList.add('active');

    
     }





   //document.querySelector('#current-' + activePlayer).textContent = dice; // value setter
    // document.querySelector('#current-' + activePlayer).innerHTML =  '<em>' + dice + '</em>';
    //var x = document.querySelector('#score-0').textContent; // value getter










// var scores, roundScore, activePlayer, gamePlaying;

// init();

// document.querySelector('.btn-roll').addEventListener('click', function () {

//     if(gamePlaying){
        
  
    
//     // 1. Random number
//     var dice = Math.floor(Math.random() * 6) + 1;

//     // 2. Display Result

//     var diceDOM = document.querySelector('.dice');
//     diceDOM.style.display = 'block';
//     diceDOM.src = 'Images/dice-' + dice + '.png';

//     // 2. Update the round score If the rolled number was not 1


//     if (dice !== 1) {
//         // add score

//         roundScore += dice;
//         document.querySelector('#current-' + activePlayer).textContent = roundScore;

//     } else {
//         // Next Player
//          nextPlayer();
//     }
        
//   }

// });


// document.querySelector('.btn-hold').addEventListener('click', function() {
     
//     if(gamePlaying){
        
    
//     // Add CURRENT score to GLOBAL score
//      scores[activePlayer] += roundScore;

//     // Update UI
//       document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//     // Check if player won the game

//      if(scores[activePlayer] >= 20){
//           document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//           document.querySelector('.dice').style.display = 'none';
//           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//           document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
//           gamePlaying = false;
     
//      }else{

          
//     // Next player
//         nextPlayer();
//      }
    
//     }
    
// });


// function nextPlayer() {

//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;

//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     //document.querySelector('.player-0-panel').classList.remove('active');
//     //document.querySelector('.player-0-panel').classList.add('active');

//     document.querySelector('.dice').style.display = 'none';

// }


// document.querySelector('.btn-new').addEventListener('click', init)
   
//     function init(){
//         scores = [0][0];
//         roundScore = 0;
//         activePlayer = 0;
//         gamePlaying = true;

//         document.querySelector('.dice').style.display = 'none';
//         document.getElementById('score-0').textContent = '0';
//         document.getElementById('score-1').textContent = '0';
//         document.getElementById('current-0').textContent = '0';
//         document.getElementById('current-1').textContent = '0';
//         document.getElementById('name-0').textContent = 'player 1';
//         document.getElementById('name-1').textContent = 'player 2';

//         document.querySelector('.player-0-panel').classList.remove('winner');
//         document.querySelector('.player-1-panel').classList.remove('winner');
//         document.querySelector('.player-0-panel').classList.remove('active');
//         document.querySelector('.player-0-panel').classList.add('active');
//         document.querySelector('.player-1-panel').classList.remove('active');
    
//     }





// //document.querySelector('#current-' + activePlayer).textContent = dice;
// //document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>' ;

// //var x = document.querySelector('#score-0').textContent;