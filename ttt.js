let gameBoard = document.getElementById('board');
console.log(gameBoard);

let player1 = { player: 0, value: 'X' };
let player2 = { player: 1, value: 'O' };

let matrix = [
	['0', '1', '2'],
	['3', '4', '5'],
	['6', '7', '8'],
]

let turn = true;

gameBoard.addEventListener('click', function (e) {
	if (e.target.innerText) {
		return;
	}
	else {
		if (turn) {
			e.target.innerText = player1.value;
		} else {
			e.target.innerText = player2.value;
		}
	}
	turn = !turn;
})


// Checking if Player X won or not and after
// that disabled all the other fields
/*if ((box == 'x' || box == 'X') && (box == 'x' ||
	box == 'X') && (b3 == 'x' || b3 == 'X')) {
	document.getElementById('print')
		.innerHTML = "Player X won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player X won');
}
else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
	b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
	document.getElementById('print')
		.innerHTML = "Player X won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;

	window.alert('Player X won');
}
else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
	b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
	document.getElementById('print')
		.innerHTML = "Player X won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player X won');
}
else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
	b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
	document.getElementById('print')
		.innerHTML = "Player X won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player X won');
}
else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
	b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
	document.getElementById('print')
		.innerHTML = "Player X won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player X won');
}
else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
	b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
	document.getElementById('print')
		.innerHTML = "Player X won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player X won');
}
else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
	b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
	document.getElementById('print')
		.innerHTML = "Player X won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player X won');
}
else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
	b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
	document.getElementById('print')
		.innerHTML = "Player X won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player X won');
}

// Checking of Player X finish
// Checking for Player 0 starts, Is player 0 won or
// not and after that disabled all the other fields
else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
	b2 == '0') && (b3 == '0' || b3 == '0')) {
	document.getElementById('print')
		.innerHTML = "Player 0 won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player 0 won');
}
else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
	b4 == '0') && (b7 == '0' || b7 == '0')) {
	document.getElementById('print')
		.innerHTML = "Player 0 won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player 0 won');
}
else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
	b8 == '0') && (b9 == '0' || b9 == '0')) {
	document.getElementById('print')
		.innerHTML = "Player 0 won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player 0 won');
}
else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
	b6 == '0') && (b9 == '0' || b9 == '0')) {
	document.getElementById('print')
		.innerHTML = "Player 0 won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player 0 won');
}
else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
	b5 == '0') && (b9 == '0' || b9 == '0')) {
	document.getElementById('print')
		.innerHTML = "Player 0 won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player 0 won');
}
else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
	b5 == '0') && (b7 == '0' || b7 == '0')) {
	document.getElementById('print')
		.innerHTML = "Player 0 won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player 0 won');
}
else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
	b5 == '0') && (b8 == '0' || b8 == '0')) {
	document.getElementById('print')
		.innerHTML = "Player 0 won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player 0 won');
}
else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
	b5 == '0') && (b6 == '0' || b6 == '0')) {
	document.getElementById('print')
		.innerHTML = "Player 0 won";
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	document.getElementById("box").disabled = true;
	window.alert('Player 0 won');
}

// Checking of Player 0 finish
// Here, Checking about Tie
else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
	|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
	(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
	(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
	document.getElementById('print')
		.innerHTML = "Match Tie";
	window.alert('Match Tie');
}
else {

	// Here, Printing Result
	if (flag == 1) {
		document.getElementById('print')
			.innerHTML = "Player X Turn";
	}
	else {
		document.getElementById('print')
			.innerHTML = "Player 0 Turn";
	}
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




