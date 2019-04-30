// //jquery stuff
// $(document).ready(function () {
// $('#content').hide().fadeIn(3000);

// // IIFE

// (function() {
// 	initVars();
// 	setText('greeting', welcome, false);
// 	setText('userSign', sign, false);
// 	setText('tiles', tiles, false);
// 	setText('subTotal', subTotal, true);
// 	setText('shipping', shipping, true);
// 	setText('grandTotal', grandTotal, true);
// })();

// // Global var define

// var greeting = '[not initialized]';
// var name = '[not initialized]';
// var message = '[not initialized]';
// var welcome;

// var sign = '[not initialized]';
// var tiles;
// var subTotal;
// var shipping;
// var grandTotal;

// // Init variables

// function initVars() {
	
// 	// Greeting vars
// 	greeting = 'Aye yo, '
// 	name = 'Will'
// 	message = ', let\'s roll.'
// 	welcome = greeting + name + message;
	
// 	// Other vars
// 	sign = 'Montague House';
// 	tiles = sign.length;
// 	subTotal = tiles * 5;
// 	shipping = 7;
// 	grandTotal = subTotal + shipping;
	
// }

// // Update the greeting

// function setText(getId, setMsg, isMoney) {
	
// 	if (isMoney) {
// 		var temp = document.getElementById(getId);
// 		temp.textContent = '$' + setMsg;
// 	} else {
// 		var temp = document.getElementById(getId);
// 		temp.textContent = setMsg;
// 	}
	
// }

// })
// 
// OLD JS^


$(function () {

	$('#signInput').on('keyup', function (e){

		var signLength = $(this).val().length;
		$('#tiles').text(signLength);
		updatePrice(signLength);

	})

	$('#fontInput').on('click', function (e){

		var signLength = $('#signInput').val().length;
		var inputFont = $(this).is(':checked');
		updatePrice(signLength, inputFont);

	})

	$('#colorInput').on('click', function (e){

		var signLength = $('#signInput').val().length;
		var inputFont = $('#fontInput').is(':checked');
		var inputColor = $(this).is(':checked');
		updatePrice(signLength, inputFont, inputColor);

	})

	$('#confirmOrder').on('click', function (e){

		e.preventDefault();
		
		var previewMessage = $('#signInput').val();

		// This was supposed to check if the color checkbox was checked, and then change the font. Couldn't get it to work.
		//  
		// if ($('#colorInput').is(':checked')) {
		// 	$('#previewScreen').prepend('<p style="font-family: impact">' + previewMessage + '</a>');
		// } else {
		// 	$('#previewScreen').prepend(previewMessage);
		// }
		// 

		$('#previewScreen').prepend(previewMessage);
		$('#previewScreen').animate({ 'right': '20px' }, 400);

	})

	$('#cancelButton').on('click', function (e){

		e.preventDefault();

		$('#previewScreen').animate({ 'right': '-360px' }, 400);

	})

})

function updatePrice(signLength, isUpgrade, isColored){

	var costPerTile = 5;
	var shipping = 7;

	if (isUpgrade) { costPerTile = 6; }
	else { costPerTile = 5; }

	if (signLength != 0) { shipping = 7; }
	else { shipping = 0; }

	var subTotal = signLength * costPerTile;
	var grandTotal = subTotal + shipping;

	if (isColored) {
		var subTotal = signLength * costPerTile;
		subTotal += 5;
		var grandTotal = subTotal + shipping;
	}

	$('#subTotal').text('$'+subTotal);
	$('#shipping').text('$'+shipping);
	$('#grandTotal').text('$'+grandTotal);

	return grandTotal;
}
