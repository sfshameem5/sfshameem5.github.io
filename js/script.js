// Set up typing 

var options = {
	strings: [
	"Web Applications", 
	"Web Sites", 
	"User Interfaces"
	],
	typeSpeed: 70,
	loop: true,
	backDelay: 1500,
	backSpeed: 50
}

var typed = new Typed("#typer", options);


// Set up project sorting through buttons. 

$('#completed').on('click', () => {
	$('.completed').show();
	$('.progress').hide();
})

$('#progress').on('click', () => {
	$('.completed').hide();
	$('.progress').show();
})