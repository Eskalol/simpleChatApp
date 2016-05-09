$(document).foundation();

//var stickyOptions = {}

//var elem = new Foundation.Sticky($('#nav'), stickyOptions);
/**
 * scroll animate
 */

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

});
var socket = io.connect('http://localhost');

$('#sendMsg').submit(function() {
	socket.emit('chat message', $('#m').val());
	$('#m').val('');
	return false;
});

socket.on('chat message', function(msg) {
	$('#messages').append($('<li>').text(msg));
});