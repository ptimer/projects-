/* game logic */

class Game{
	constructor(score, rules, textWin, textLose){
		this.score = score;
		this.rules = rules;
		this.textWin = textWin;
		this.textLose = textLose;
	}


	game(whoWin){
		let res = this.rules.filter(function(rule){
			return rule == whoWin;
		});

		if(res != ""){
			this.scoreUp();
			return this.textWin;
		}else{
			this.scoreDown();
			return this.textLose;
		}
	}

	PcIntelligent(clientPlayer){
		let statesPc = ["paper", "scissors", "rock"];
		let clientPc = statesPc[this.getRandomValue(statesPc.length)];
		if(clientPlayer == clientPc)
		{
			return this.PcIntelligent(clientPlayer);
		}
		else
		{
			return clientPc;
		}
	}

	/* random function */

	getRandomValue(v){
		return Math.floor(Math.random() * v);
	}

	/* score number manipulation*/

	scoreUp(){
		this.score += 1;
	}

	scoreDown(){
		if(this.score <= 0){
			this.score = 0;
		}else{
			this.score -= 1;
		}
	}

	getScore(){
		return this.score;
	}
};