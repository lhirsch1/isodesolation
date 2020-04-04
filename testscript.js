var countDownTime = new Date("Apr 04, 2020 12:48:30").getTime();

var x = setInterval(function(){
	var now = new Date().getTime();
	var distance = (countDownTime - now) ;
	console.log("working")
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	$('.timer').text(`${minutes} MINUTES ${seconds} SECONDS UNTIL FILM BEGINS`) 

	//when countdown is over
	if(distance <= 20000){
		
		//$('.showTime').html(`<div>ENGAGE FULL SCREEN IMMEDIATELY</div`) ;
		$('.timer').text(`PRESS PLAY IN ${seconds}`) 
		$('.movie').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/Xb5DPV-iC6k?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
		
		
		//hide voting block
		//document.querySelector('.voteContainer').style.display = 'none';
		//show film block
		//show chat
		//start film
		if (distance <= 0001){
			$('.timer').text(`PRESS PLAY`) 
			clearInterval(x);
			console.log(distance)
		}
	}
	

});1000

