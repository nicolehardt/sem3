$(document).ready(function(){

/*Burgermenu */
  $('#open').click (function() {
    $('nav').show('slow');
    $('#close').show('slow');
    $('#open').hide();

  });
  $('#close').click (function() {
    $('nav').hide('slow');
    $('#open').show('slow');
    $('#close').hide();
  });



/*Chatfunktionen */
  $('#live-chat section').on('click', function() {

		$('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').fadeOut(300);

	});
  });
