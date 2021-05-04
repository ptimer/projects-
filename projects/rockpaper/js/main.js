/* args: score, rules, textwin, textlose */
var GameObj = new Game(0, ["paper rock","rock scissors","scissors paper"],"You win","You lose");
var InterfaceObj = new Interface();

/* open modal rules */
    InterfaceObj.openModalRules();
    
/* close modal rules */ 
    InterfaceObj.closeModalRules();


/* THE WAY IT BEHAVES WHEN CLICKING AT PAPER SCISSORS OR ROCK */

		listenerPickBlock(pickBlock__paper, "paper");
		listenerPickBlock(pickBlock__scissors, "scissors");
		listenerPickBlock(pickBlock__rock, "rock");
		
		function listenerPickBlock(pickBlockId, clientPicked)
		{
			pickBlockId.addEventListener("click", function(){
				/* game */
				let clientPC = GameObj.PcIntelligent(clientPicked);

				let resultOfTheGame = GameObj.game(clientPicked + " " + clientPC);

				/* styles */
				InterfaceObj.showYouPickedBlock();

				/*show Player card */
				InterfaceObj.showPlayer(clientPicked);

				/*show PC card and score */
				setTimeout(function(){
					InterfaceObj.showPcPlayer(clientPC);
					InterfaceObj.showScore(GameObj.getScore());
				}, 0);

				/* show text */
				setTimeout(function(){
					InterfaceObj.showFinalWindow(resultOfTheGame);
				}, 0);
			});
		}

/* play again clicked button */

		playAgain.addEventListener("click", function(){
			/* reverse all changes on step 2, 3, 4 */
			InterfaceObj.hidePcPlayer();
			InterfaceObj.hidePlayer();
			InterfaceObj.hideFinalWindow();
			
			/* show step 1 */
			InterfaceObj.showPickBlock();
		});
