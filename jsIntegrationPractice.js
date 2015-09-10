var apple;
function apples() {

	console.log('snowman')
	var apple = document.getElementById('apple');
	var red = document.createElement('div');
	red.setAttribute('id', 'red');

	var green = document.createElement('div');
	green.setAttribute('id', 'green');

	var poisined = document.createElement('div');
	poisined.setAttribute('id', 'poisined');

	apple.appendChild(red);
	red.classList.add('red');

}

window.onload = apple;