var apples;
function apples() {

	console.log('snowman')
	var apple = document.getElementById('apple');
	var red = document.createElement('div');
	red.setAttribute('id', 'red');

	var green = document.createElement('div');
	green.setAttribute('id', 'green');

	var poisined = document.createElement('div');
	poisined.setAttribute('id', 'poisined');

	// var typeApple = [red, green, poisined];

	// for (i = 0; i < typeApple.length; i++){
	// 	console.log(apple.appendChild(i));
	}

	apple.appendChild(red);
	red.classList.add('red');

	apple.appendChild(green);
	red.classList.add('green');

	apple.appendChild(poisined);
	red.classList.add('poisined');

}

window.onload = apples;