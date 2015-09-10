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

	// var typeApple = [red, green, poisined];

	// for (i = 0; i < typeApple.length; i++){
	// 	console.log(apple.appendChild(i));
	

	apple.appendChild(red);
	red.classList.add('red');

	apple.appendChild(green);
	green.classList.add('green');

	apple.appendChild(poisined);
	poisined.classList.add('poisined');

	red.innerHTML="red";
	green.innerHTML="green";
	poisined.innerHTML="poisined";

	poisined.onclick=function() {
		red.classList.add('hidden');
		green.classList.add('hidden');
		console.log('banana');
	}
}

window.onload = apples;