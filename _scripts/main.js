window.addEventListener('load', function() {

	
	var printCron = function(cron) {
	  $('#results').innerHTML +=
	    '<li>Cron expression: <code>' + cron + '</code><br/>'
	    + 'Human readable: ' + prettyCron.toString(cron) + '<br/>'
	    + 'Next run: ' + prettyCron.getNext(cron) + '</li>';
	}

	$("#bfCaptchaEntry").click(function(){
    	myFunction();
	});

      document.getElementById('results').innerHTML = '';
      printCron('0 * * * *');
      printCron('30 * * * 1');
      printCron('15,45 9,21 * * *');
      printCron('18,19 7 5 * *');
      printCron('* * 25 12 *');
      printCron('0 * 1,3 * *');
      printCron('0 17 * 1,4,7,10 *');
      printCron('15 * * * 1,2');
      printCron('* 8,10,12,14,16,18,20 * * * ');
      printCron('0 12 15,16 1 3');
      printCron('0 4,8,12,4 * * 4,5,6');
      printCron('0 2,16 1,8,15,22 * 1,2');
      printCron('15 3,8,10,12,14,16,18 16 * *');
      printCron('2 8,10,12,14,16,18 * 8 0,3 ');
    });