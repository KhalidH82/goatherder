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
//createBoard();

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
		tiles.addEventListener('click', flipCard);
		doc.appendChild(tiles);	

	}
}
createBoard2();


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

function checkMatch(){
	if ( goatArray[0] - goatArray[1] === 10){
		console.log(goatArray[0]);
		checkWin.push(goatArray[0]);
		checkWin.push(goatArray[1]);
		alert('baaaaHHHHH');
	}else if ( goatArray[0] - goatArray[1] === -10) {
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

function winner() {
	let blank = document.querySelector('div');
	blank.innerHTML = '';
	let body = document.querySelector('body');
 	let end = document.createElement('h1');
 	end.innerHTML = "Winner!";
 	(body).appendChild(end);
 	console.log(end);
 	(blank).appendChild(end);
}	




