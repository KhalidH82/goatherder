// Create landing page with One Player Button to start game
// Create a random board with 5X4 divs containing goat images
// Create a new board function
// Create a flip over card function 
// Create function to flip back if not matched
// Create function to check logic between matches of 2 flipped cards and remain flipped when matched 
// Create function when all cards are matched to a "winner" page

let goatArray = [];
let picValue = [];
let picId = [];
let flipped = 0;
let checkWin = [];
let play1 = [];
let play2 = [];
let whoseTurn = 1;
let checkWinPlay1 = [];
let checkWinPlay2 = [];
let levelUp = 4;
let scoreBoard = document.createElement('p');


//Soundboard
function bah () {
	let sound = document.querySelector('audio');
	sound.play();
}

function bahwin () {
	let sound = document.querySelector('.win');
	sound.play();
}

clearDom();

//Removes elements for landing page
function clearDom() {
	console.log('clear dom');
	let start = document.querySelectorAll('div');
	console.log(start);
	start.forEach(function(element){
		element.remove();
	})
}

//Creates a random board of images for 1 player
function randomNumber() {
	random = Math.random();
	random2 = Math.floor(random * 30);
	return random2;
}
function createRandArray() {
	let randNum = [];
	while(randNum.length < 30) {
		let random = randomNumber();
		if (randNum.includes(random) === false) {
			randNum.push(random);
		}
	}
	console.log(randNum)
	return randNum;

}

function createBoard(){
	bah();
	let head = document.querySelector('.head').style.display = 'none';
	let button = document.querySelector('.button').style.display = 'none';
	let button2 = document.querySelector('.button2').style.display = 'none';
	let mapArray = createRandArray();
	console.log('createboard');
	let picArray = 30;
	let doc = document.createElement('div');
	document.body.appendChild(doc);
	for (let i=0; i < picArray; i++) {
		let tiles = document.createElement('img');
		tiles.setAttribute('class', 'goatPhoto');
		tiles.setAttribute('src', 'Images/goatlogo.jpg');
		tiles.setAttribute('id', mapArray[i]+1);	
		tiles.addEventListener('click', flipCard);
		doc.appendChild(tiles);	

	}

}

//Creates 2 player board
function createBoard2(){
	bah();
	let head = document.querySelector('.head').style.display = 'none';
	let button = document.querySelector('.button').style.display = 'none';
	let button2 = document.querySelector('.button2').style.display = 'none';
	let mapArray = createRandArray2();
	console.log('createboard2');
	let picArray = 30;
	let doc = document.createElement('div');
	document.body.appendChild(doc);
	for (let i=0; i < picArray; i++) {
		let tiles = document.createElement('img');
		tiles.setAttribute('class', 'goatPhoto');
		tiles.setAttribute('src', 'Images/goatlogo.jpg');
		tiles.setAttribute('id', mapArray[i]+1);	
		console.log("id added -> " + i);
		tiles.addEventListener('click', flipCard2);
		doc.appendChild(tiles);	

	}
}

//Creates a random board of images for 2 player
function randomNumber2() {
	random = Math.random();
	random2 = Math.floor(random * 30);
	return random2;
}
function createRandArray2() {
	let randNum = [];
	while(randNum.length < 30) {
		let random = randomNumber2();
		if (randNum.includes(random) === false) {
			randNum.push(random);
		}
	}
	console.log(randNum)
	return randNum;

}

//Performs flip event when card is clicked and checks for match
function flipCard(e){
	console.log('the event --> ', e.target);
	console.log('goat id -->' + this.id);
	this.setAttribute('src', 'Images/goat'+this.id+'.jpeg')
	goatArray.push(this.id)
	window.setTimeout(function() {
		console.log('timeout')
		if (goatArray.length === 2){
			checkMatch();
		}
	}, 100)

}

//Performs flip event when card is clicked and checks for match and keeps track of which players turn it is
function flipCard2(e){
	console.log('the event --> ', e.target);
	console.log('goat id -->' + this.id);
	this.setAttribute('src', 'Images/goat'+this.id+'.jpeg')
	goatArray.push(this.id)
	window.setTimeout(function() {
		console.log('timeout')
		if (goatArray.length === 2){
			if(whoseTurn === 1) {
				checkMatch2();
			}
			else if(whoseTurn === 2) {
				checkMatch3();
			}
			
		}
	}, 100)

}


//Keeps track of player 1 matches
function checkMatch2(){
	if ( goatArray[0] - goatArray[1] === 15){
		console.log(goatArray[0]);
		play1.push(goatArray[0]);
		play1.push(goatArray[1]);
		console.log(checkWinPlay1)
		alert('baaaaHHHHH');
	}else if ( goatArray[0] - goatArray[1] === -15) {
		console.log(goatArray[0]);
		play1.push(goatArray[0]);
		play1.push(goatArray[1]);
		alert('baaaaHHHHH')
	} else {
		alert('no match found');
		let tile = document.getElementById(goatArray[0]);
		tile.setAttribute('src', 'Images/goatlogo.jpg');
		let tile2 = document.getElementById(goatArray[1]);
		tile2.setAttribute('src', 'Images/goatlogo.jpg');
	}
	goatArray = [];
	gameCompletePlay1();
}

//Keeps track of player 2 matches
function checkMatch3(){
	if ( goatArray[0] - goatArray[1] === 15){
		console.log(goatArray[0]);
		play2.push(goatArray[0]);
		play2.push(goatArray[1]);
		console.log(checkWinPlay2)
		alert('baaaaHHHHH');
	}else if ( goatArray[0] - goatArray[1] === -15) {
		console.log(goatArray[0]);
		play2.push(goatArray[0]);
		play2.push(goatArray[1]);
		alert('baaaaHHHHH')
	} else {
		alert('no match found');
		let tile = document.getElementById(goatArray[0]);
		tile.setAttribute('src', 'Images/goatlogo.jpg');
		let tile2 = document.getElementById(goatArray[1]);
		tile2.setAttribute('src', 'Images/goatlogo.jpg');
	}

	goatArray = [];
	
	console.log(gameComplete);
	gameCompletePlay2();
}


//Checks for matches until game is complete foir 1 player game
function checkMatch(){
	if ( goatArray[0] - goatArray[1] === 15){
		console.log(goatArray[0]);
		checkWin.push(goatArray[0]);
		checkWin.push(goatArray[1]);
		alert('baaaaHHHHH');
		scoreBoard.innerHTML = "Matches: " + checkWin.length/2;
		let matchTop = document.querySelector('p');
		matchTop.appendChild(scoreBoard);
	}else if ( goatArray[0] - goatArray[1] === -15) {
		console.log(goatArray[0]);
		checkWin.push(goatArray[0]);
		checkWin.push(goatArray[1]);
		alert('baaaaHHHHH')
		scoreBoard.innerHTML = "Matches: " + checkWin.length/2;
		let matchTop = document.querySelector('p');
		matchTop.appendChild(scoreBoard);
	} else {
		alert('no match found');
		let tile = document.getElementById(goatArray[0]);
		tile.setAttribute('src', 'Images/goatlogo.jpg');
		let tile2 = document.getElementById(goatArray[1]);
		tile2.setAttribute('src', 'Images/goatlogo.jpg');
	}
	goatArray = [];
	console.log(gameComplete);
	gameComplete();
}


//Checks matches to see if game is complete   2-->lvl2  4-->lv3  8-->lvl4 10-->win
function gameComplete() {
	if ( checkWin.length === 4 && checkWin.length === levelUp ) {
		alert('Congratulations...Level 2');
		levelUp += 4;
	}	else if ( checkWin.length === 8 && checkWin.length === levelUp) {
		alert('Congratulations...Level 3')
		levelUp += 8
	}	else if (checkWin.length === 16 && checkWin.length === levelUp) {
		alert ('Congratulations...Level 4')
		levelUp += 4
	}	else if (checkWin.length === 20) {
		winner();
	}
}

//Checks to see which player has won
function gameCompletePlay1() {
	if ( play1.length === 10 ) {
		winner2();

	} else if (play1.length !== 10) {
		alert('Players 2 turn!');
		whoseTurn = 2;
	}
}
function gameCompletePlay2() {
	if ( play2.length === 10 ) {
		winner3();
	} else if (play2.length !== 10) {
		alert('Players 1 turn!');
		whoseTurn = 1;
	}
}


//Creates a winner page when game is complete
function winner() {
	bahwin();
	let blank = document.querySelector('body');
	blank.innerHTML = '';
	let end = document.createElement('h1');
	end.setAttribute('id', 'win1')
	end.innerHTML = "Winner!";
	blank.appendChild(end);
	let body = document.querySelector('body');
 	body.appendChild(end);
	let endPage = document.createElement('h1');
	endPage.setAttribute('id', 'win2')
 	endPage.innerHTML = 'Congratulations you have herded all your goats successfully!'
 	body.appendChild(endPage);
	console.log(end);
 	
}	


function winner2() {
	bahwin();
	let blank = document.querySelector('div');
	blank.innerHTML = '';
	let body = document.querySelector('body');
 	let end = document.createElement('h1');
 	end.innerHTML = "Winner1! You got "+ play1.length/2 + " matches!";
 	body.appendChild(end);
 	console.log(end);
 	blank.appendChild(end);
}	

function winner3() {
	bahwin();
	let blank = document.querySelector('div');
	blank.innerHTML = '';
	let body = document.querySelector('body');
 	let end = document.createElement('h1');
	end.innerHTML = "Winner2! You got "+ play2.length/2 + " matches!" ;
 	body.appendChild(end);
 	console.log(end);
 	blank.appendChild(end);
}	







