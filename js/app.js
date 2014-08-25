
$(function(){

	// SMOOTH SCROLL

  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });



  //MOBILE NAV

  $('#navToggle').on('click', function(){
  	$('#mobileMenu ul li').toggleClass('showNav');
  	$('#brief').toggleClass('hideBrief')
  });
  
  //FAQ BUTTONS

  $('#qButton1').on('click', function(){
		$('#answer1').toggleClass('answerIn');
	});

	$('#qButton2').on('click', function(){
		$('#answer2').toggleClass('answerIn');
	});

	$('#qButton3').on('click', function(){
		$('#answer3').toggleClass('answerIn');
	});

});