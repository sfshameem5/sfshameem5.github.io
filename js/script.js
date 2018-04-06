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
	$('.completed').fadeIn();
	$('.progress').fadeOut();
})

$('#progress').on('click', () => {
	$('.completed').fadeOut();
	$('.progress').fadeIn();
})

$('#all').on('click', () => {
	$('.project-container').show();
})


// Make progress buttons disabled on document load. 

$(window).on('load', function() {
	$('.progress a').removeAttr("href").css({backgroundColor: "#eee", cursor: "not-allowed"});
});
