		$( document).ready(function() {

		$('a').click(function(event) {
			alert('apple pies');
		});

		var red = document.createElement('div');
		var redText = document.createTextNode('red');
		red.setAttribute('id', 'red');
		red.appendChild(redText);

		
		$('#apple').append(red);
		$('#red').last().addClass('red');
		

		var green = document.createElement('div');
		var greenText= document.createTextNode('green');
		green.appendChild(greenText);
		green.setAttribute('id', 'green');
		green.appendChild(greenText);

		$('#apple').append(green);
		$('#green').last().addClass('green');
		
		var poisined = document.createElement('div');
		var poisinedText = document.createTextNode('poisined');
		poisined.appendChild(poisinedText);
		poisined.setAttribute('id', 'poisined');
		poisined.appendChild(poisinedText);

		$('#apple').append(poisined);
		$('#poisined').last().addClass('poisined');

		$('#poisined').click(function() {
			$('#red:first').fadeToggle('slow');
		});
		$('#poisined').click(function() {
			console.log('banana');
			$('#green:last').fadeToggle('slow');
		});

	});



