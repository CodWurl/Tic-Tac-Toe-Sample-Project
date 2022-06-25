let gameBoard = document.getElementById('board');
console.log(gameBoard);

let player1 = { player: 0, value: 'X' };
let player2 = { player: 1, value: 'O' };

let turn = true;

gameBoard.addEventListener('click', function (e) {
	console.log(e.target);
	if (turn) {
		e.target.innerText = player1.value;
	} else {
		e.target.innerText = player2.value;
	}
	turn = !turn;
})

/*function myfunc() {

    box1 = document.getElementById("box 1").value='';
    box2 = document.getElementById("box 2").value='';
    box3 = document.getElementById("box 3").value='';
    box4 = document.getElementById("box 4").value='';
    box5 = document.getElementById("box 5").value='';
    box6 = document.getElementById("box 6").value='';
    box7 = document.getElementById("box 7").value='';
    box8 = document.getElementById("box 8").value='';
    box9 = document.getElementById("box 9").value='';

}*/

	// Function to reset game
	function myfunc_2() {
		location.reload();
		document.getElementById('box 1').value = '';
		document.getElementById("box 2").value = '';
		document.getElementById("box 3").value = '';
		document.getElementById("box 4").value = '';
		document.getElementById("box 5").value = '';
		document.getElementById("box 6").value = '';
		document.getElementById("box 7").value = '';
		document.getElementById("box 8").value = '';
		document.getElementById("box 9").value = '';

	}

	