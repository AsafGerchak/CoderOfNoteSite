/*
=========================
FAQ SECTION
=========================
*/

faq1App = {};

faq1App.init = function(){
	console.log('FUUCCCCKK')
	$('#answer1').addClass('answerIn');
	$('#qButton1').on('click', function(){	
		console.log('What')
		$('#answer1').removeClass('answerIn');
	});
};


faq2App = {};

faq2App.init = function(){
	console.log('FUUCCCCKK')
	$('#answer2').addClass('answerIn');
	$('#qButton2').on('click', function(){	
		console.log('What')
		$('#answer2').removeClass('answerIn');
	});
};


faq3App = {};

faq3App.init = function(){
	console.log('FUUCCCCKK')
	$('#answer3').addClass('answerIn');
	$('#qButton3').on('click', function(){	
		console.log('What')
		$('#answer3').removeClass('answerIn');
	});
};

/*
=========================
DOCUMENT READY
=========================
*/

$('#qButton1').on('click', function(){
	faq1App.init();
});

$('#qButton2').on('click', function(){
	faq2App.init();
});

$('#qButton3').on('click', function(){
	faq3App.init();
});