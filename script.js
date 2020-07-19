
let currentTime = ''
var currentdateNorm;
var distance;
let countCheck1 = false;
let countCheck2 = false;

$('.playIn').hide()


$.ajax({

    url: "https://worldtimeapi.org/api/timezone/Etc/GMT",
    method: "GET"
}).then(function(data){
    
    //console.log('data ',data.datetime)
    //console.log("current time: ",currentTime);
    var countDownTime = 1595129460000;
    currentTime = (data.datetime)
    // console.log("current time: ",currentTime)
    // console.log("countDownTime : ", countDownTime);
    var currentdateNorm = new Date(currentTime).getTime();
    var distance = (countDownTime - currentdateNorm) ;
   
    countDown(distance);
})

function countDown(distance){
    var x = setInterval(function(){
        distance = (distance - 1000);
        
        
        //var now = new Date().getTime();
        
        
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
        $('.timer').text(`${hours} HOUR ${minutes} MINUTES ${seconds} SECONDS UNTIL FILM BEGINS`) 
        //console.log(distance);
        $('.playIn').text(`PRESS PLAY IN ${seconds}`) 
        //when countdown is over
        if(distance <= 20000 && !countCheck1){
            $('.headLineText').hide();
            $('.timer').hide();
            $('.playIn').show();
            countCheck1 = true;
            //$('.showTime').html(`<div>ENGAGE FULL SCREEN IMMEDIATELY</div`) ;
            var playIn = document.querySelector('.playIn');
            playIn.style.display = "block"
            
            $('.movie').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/uBXdJLSP6_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

            
        }
        if (distance <= 1000){
            $('.playIn').text(`PRESS PLAY NOW`)
            $('.timer').hide();
            // clearInterval(x);
            //console.log("old timer ", x)
            var upDist = distance *-1
            var catchHours = Math.floor((upDist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var catchMinutes = Math.floor((upDist % (1000 * 60 * 60)) / (1000 * 60));
            var catchSeconds = Math.floor((upDist % (1000 * 60)) / 1000);
            catchHours > 9 ? (catchHours = `${catchHours}`) : (catchHours =`0${catchHours}` )
            catchMinutes > 9 ? (catchMinutes = `${catchMinutes}`) : (catchMinutes =`0${catchMinutes}` )
            catchSeconds > 9 ? (catchSeconds = `${catchSeconds}`) : (catchSeconds =`0${catchSeconds}` )

            if(catchSeconds > 10){
                $('.playIn').hide()
            }

    
        $('.catchUp').text(`${catchHours}:${catchMinutes}:${catchSeconds} CATCH UP TIME STAMP`) 

            // upCount();
        }
        
    
    },1000);

}
