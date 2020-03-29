var countDownTime = new Date("Mar 28, 2020 21:02:30").getTime();

var x = setInterval(function(){
	var now = new Date().getTime();
	var distance = (countDownTime - now) ;
	console.log("working")
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	console.log(distance)

	
	$('.timer').text(`${minutes} MINUTES ${seconds} SECONDS UNTIL FILM BEGINS`) 

	//when countdown is over
	if(distance <= 0){
		$('.showTime').html(`<div>ENGAGE FULL SCREEN IMMEDIATELY</div`) ;
		$('.movie').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/B70CDj_y3ik?&autoplay=1&start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
		clearInterval(x);
		console.log("out of time");
		//hide voting block
		//document.querySelector('.voteContainer').style.display = 'none';
		//show film block
		//show chat
		//start film
	}

});1000

