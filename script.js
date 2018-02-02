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
createBoard();

function flipCard(e){
	console.log('the event --> ', e.target);
	this.setAttribute('src', 'Images/goat'+this.id+'.jpeg')
	goatArray.push(this.id)
	window.setTimeout(function() {
		console.log('tiemout')
		if (goatArray.length === 2){
			checkMatch();
		}
	}, 100)
	// 	debugger
}

function checkMatch(){

console.log('checkMatch')
if ( goatArray[0] - goatArray[1] === 10){
alert('baaaaHHHHH');
}else if ( goatArray[0] - goatArray[1] === -10) {
	alert('baaaaHHHHH')
} else {
	alert('no match found');
	let tile = document.getElementById(goatArray[0]);
	tile.setAttribute('src', 'Images/goatlogo.jpg');
	let tile2 = document.getElementById(goatArray[1]);
	tile2.setAttribute('src', 'Images/goatlogo.jpg');
}
	goatArray = [];
}




