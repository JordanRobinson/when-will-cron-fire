window.addEventListener('load', function() {
	var resultsBox = $('#results');

	var printCron = function(cron, resultsBox) {
		resultsBox.html('');
		resultsBox.html(
			'<li>Cron expression: <code>' + cron + '</code><br/>'
			+ 'Human readable: ' + prettyCron.toString(cron) + '<br/>'
			+ 'Next run: ' + prettyCron.getNext(cron) + '</li>'
		);
	}

	$("#run-button").click(function(){
		printCron($('#input').val(), resultsBox);
	});

	$("#example-one").click(function(){
		printCron($("#example-one").html(), resultsBox);
	});

	$("#example-two").click(function(){
		printCron($("#example-two").html(), resultsBox);
	});

	$("#example-three").click(function(){
		printCron($("#example-three").html(), resultsBox);
	});

	$("#example-four").click(function(){
		printCron($("#example-four").html(), resultsBox);
	});	
});
