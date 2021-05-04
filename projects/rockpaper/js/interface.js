class Interface{

	showPcPlayer(clientPC){
		circle.style.display = "none";
		PCChoosen.style.display = "flex";

			switch (clientPC){
				case "paper":
					PCChoosen.classList.add("pickBlock__paper_step2");
					img_pc_player.src = "images/icon-paper.svg"
					break;
				case "scissors":
					PCChoosen.classList.add("pickBlock__scissors_step2");
					img_pc_player.src = "images/icon-scissors.svg"
					break;
				case "rock":
					PCChoosen.classList.add("pickBlock__rock_step2");
					img_pc_player.src = "images/icon-rock.svg"
					break; 
			}
	}


	hidePcPlayer(){
		circle.style.display = "block";
		PCChoosen.style.display = "none";
		PCChoosen.classList.remove(PCChoosen.classList[2]);
	}

	/* show Player card */

	showPlayer(clientPlayer){
		switch (clientPlayer){
			case "paper":
				PlayerChoosen.classList.add("pickBlock__paper_step2");
				img_player_player.src = "images/icon-paper.svg"
				break;
			case "scissors":
				PlayerChoosen.classList.add("pickBlock__scissors_step2");
				img_player_player.src = "images/icon-scissors.svg"
				break;
			case "rock":
				PlayerChoosen.classList.add("pickBlock__rock_step2");
				img_player_player.src = "images/icon-rock.svg"
				break; 
		}
	}

	hidePlayer(){
		PlayerChoosen.classList.remove(PlayerChoosen.classList[1]);
	}

	/* show final window step 4 win or lose */

	showFinalWindow(text){
		winOrLoseText.innerText = text;
		WinOrLoseBlock.style.display = "block";

		YouPickedBlock.style.gridTemplateColumns = "repeat(3, 1fr)";
		YouPickedBlock.style.opacity = 1;
		YouPickedBlock.classList.add("youPickedBlockLargerGrid");
		YouPickedBlock.classList.remove("youPickedBlockSmallerGrid");
	}

	hideFinalWindow(){
		WinOrLoseBlock.style.display = "none";
		YouPickedBlock.style.opacity = 0;
		YouPickedBlock.style.gridTemplateColumns = "repeat(2, 1fr)";
		YouPickedBlock.classList.add("youPickedBlockSmallerGrid");
		YouPickedBlock.classList.remove("youPickedBlockLargerGrid");
	}


	/* to step one function */

	showPickBlock(){
		YouPickedBlock.style.display = "none";
		pickBlock.style.display = "block";
	}

	/* show score */

	showScore(score){
		scoreState.innerText = score;
	}

	showYouPickedBlock(){
		YouPickedBlock.style.display = "grid";
		pickBlock.style.display = "none";
	}

	openModalRules(){
		rules_button.addEventListener("click", function(){
	      document.getElementById("rules_modal").style.display = "block";
	      document.getElementById("changeContainer").style.opacity = "0.1";
	    });
	}

	closeModalRules(){
		icon_close.addEventListener("click", function(){
	      document.getElementById("rules_modal").style.display = "none";
	      document.getElementById("changeContainer").style.opacity = "1";
	    });
	}

}