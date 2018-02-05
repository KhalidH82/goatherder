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
let checkWinPlay1 = [];
let checkWinPlay2 = [];
let play1 = [];
let play2 = [];
let whoseTurn = 1;

startGame();

function startGame() {
	let start = document.querySelector('div').style.display = 'none';
}

function randomNumber() {
	random = Math.random();
	random2 = Math.floor(random * 20);
	return random2;
}
function createRandArray() {
	let randNum = [];
	while(randNum.length < 20) {
		let random = randomNumber();
		if (randNum.includes(random) === false) {
			randNum.push(random);
		}
	}
	console.log(randNum)
	return randNum;

}

function createBoard(){
	let logo = document.querySelector('.logo').style.display = 'none';
	let head = document.querySelector('.head').style.display = 'none';
	let button = document.querySelector('.button').style.display = 'none';
	let button2 = document.querySelector('.button2').style.display = 'none';
	let mapArray = createRandArray();
	console.log('createboard');
	let picArray = 20;
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

function createBoard2(){
	let logo = document.querySelector('.logo').style.display = 'none';
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
	
	console.log(gameComplete);
	gameCompletePlay1();
}

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

function checkMatch(){
	if ( goatArray[0] - goatArray[1] === 15){
		console.log(goatArray[0]);
		checkWin.push(goatArray[0]);
		checkWin.push(goatArray[1]);
		alert('baaaaHHHHH');
	}else if ( goatArray[0] - goatArray[1] === -15) {
		console.log(goatArray[0]);
		checkWin.push(goatArray[0]);
		checkWin.push(goatArray[1]);
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
	gameComplete();
}

function gameComplete() {
	if ( checkWin.length === 2 ) {
		winner();
	}
}

function gameCompletePlay1() {
	if ( play1.length === 2 ) {
		winner2();

	} else if (play1.length !== 2) {
		alert('Player 2 turn!');
		whoseTurn = 2;
	}
}

function gameCompletePlay2() {
	if ( play2.length === 2 ) {
		winner3();
	} else if (play2.length !== 2) {
		alert('Player 1 turn!');
		whoseTurn = 1;
	}
}

function winner() {
	let blank = document.querySelector('div');
	blank.innerHTML = '';
	let body = document.querySelector('body');
 	let end = document.createElement('h1');
 	end.innerHTML = "Winner!";
 	body.appendChild(end);
 	console.log(end);
 	blank.appendChild(end);
}	

function winner2() {
	let blank = document.querySelector('div');
	blank.innerHTML = '';
	let body = document.querySelector('body');
 	let end = document.createElement('h1');
 	end.innerHTML = "Winner1!";
 	body.appendChild(end);
 	console.log(end);
 	blank.appendChild(end);
}	

function winner3() {
	let blank = document.querySelector('div');
	blank.innerHTML = '';
	let body = document.querySelector('body');
 	let end = document.createElement('h1');
 	end.innerHTML = "Winner2!";
 	body.appendChild(end);
 	console.log(end);
 	blank.appendChild(end);
}	




