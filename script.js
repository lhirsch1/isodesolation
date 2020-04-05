
let currentTime = ''
let countCheck1 = false;
let countCheck2 = false;

$('.playIn').hide()

// $.ajax({
//     url: "https://worldtimeapi.org/api/timezone/America/Thunder_Bay",
//     method: "GET"
// }).then(function(data){
    
//     //console.log(data.datetime)
//     //console.log("current time: ",currentTime);
//     var countDownTime = 1586052000000;
//     currentTime = (data.datetime)
//     console.log("current time: ",currentTime)
//     console.log("countDownTime : ", countDownTime);
//     var currentdateNorm = new Date(currentTime).getTime();
//     var distance = (countDownTime - currentdateNorm) ;
//     console.log(distance)
//     //console.log("currentdateNorm : ", currentdateNorm)
//     var x = setInterval(function(){
//         distance = (distance - 1000);
        
        
//         //var now = new Date().getTime();
        
        
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//         $('.timer').text(`${hours} HOUR ${minutes} MINUTES ${seconds} SECONDS UNTIL FILM BEGINS`) 
//         console.log(distance);
//         $('.playIn').text(`PRESS PLAY IN ${seconds}`) 
//         //when countdown is over
//         if(distance <= 20000 && !countCheck1){
//             $('.timer').hide()
//             $('.playIn').show();
//             countCheck1 = true;
            
//             console.log("hi")
//             //$('.showTime').html(`<div>ENGAGE FULL SCREEN IMMEDIATELY</div`) ;
//             var playIn = document.querySelector('.playIn');
//             playIn.style.display = "block"
            
//             $('.movie').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/Xb5DPV-iC6k?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
            
            
//             //hide voting block
//             //document.querySelector('.voteContainer').style.display = 'none';
//             //show film block
//             //show chat
//             //start film
            
//         }
//         if (distance <= 1000){
//             $('.playIn').text(`PRESS PLAY NOW`)
//             clearInterval(x);
//             console.log("distance :",distance)
//         }
        
    
//     },1000);
// })

// function timingFunction(){
//     setInterval(function(){
//         console.log(hi);
//     })
// }



