/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- If the current player scores two 6s in a row, they loose their entire score
*/

// create the most important variables in the game
var scores, roundScore, activePlayer, dice, prevScore, gamePlaying; 

init();



document.querySelector('.btn-roll').addEventListener('click', function (){
	if (gamePlaying) {
		//1. Random Number
		var dice = Math.ceil((Math.random() * 6));

		/*2. Display the result.
		We previously had the display = 'none',
		We need to change that. */
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		//How do we change an img element?
		diceDOM.src = 'dice-' + dice + '.png';
		//3. Update the round score, IF the rolled number was NOT a 1
		if (dice !== 1) {
			//add score
			roundScore += dice; //first get the round score 
			// score[activePlayer] += dice
			// roundSCore = roundScore + dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore; // display the round score
			winnerCheck();

		} else {
			
			document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
			// next player
			nextPlayer();
		}
	};
});


document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// add CURRENT score to GLOBAL score
		score[activePlayer] += roundScore;
		// update the UI
		document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
		// Check if player won the game
		winnerCheck();
		// next player
		nextPlayer();
	};
});

function nextPlayer() {
	if (gamePlaying) {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.querySelector('#current-0').textContent = 0;
		document.querySelector('#current-1').textContent = 0;

		//removing and adding classes in JS
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice').style.display = 'none';

		};
};


function winnerCheck() {
	if (score[activePlayer] >= 10) {
		gamePlaying = false;
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
		document.querySelector('#current-' + activePlayer).textContent = 0;
		
	} else {

		document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

	}

};

function init() {
	gamePlaying = true;
	score = [0, 0]; // score for each player
	roundScore = 0; // score for the active player 
	activePlayer = 0; // first player = 0, second = 1
	prevScore = 0;


	// hide the dice and set all values to zero
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
};

document.querySelector('.btn-new').addEventListener('click', init);















