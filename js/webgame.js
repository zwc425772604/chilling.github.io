
var numbersList = [];
var correctSum = 0;

$(document).ready(function () {
  //your code here
    //$('.container').hide();
    $('#game1Button').click(function(){
        $('.container').show();
        $('.game1').show();
        //hide the marquee
        $('.rollingMarquee').hide();
        //hide game 2
        $('.game2').hide();
    });
    
    $('#game2Button').click(function(){
         $('.container').show();
        $('.game1').hide();
        $('.game2').show();
        $('.rollingMarquee').hide();
       
    });
    
    $('form.option1').submit(function(){
        	var radioValue = $("input[name='level']:checked").val();
            if (radioValue == undefined){
                alert("empty");
            }
            if(radioValue == 'easy'){
                generateQuestions1(5, 10, 3);
            }
            else if (radioValue == 'medium'){
                generateQuestions1(20, 15, 2.25);
            }
            else{
                generateQuestions1(25, 20, 1.5);
            }
           
        });
   
    
     $('form.option2').submit(function(){
        var num = $("input[name = 'numbers']").val();
         if(num){
                alert("Your entered - " + num);
            }
         var frequency = $("input[name = 'frequency']").val();
         if (frequency.length == 0){
             alert("Please enter a number for frequency");
         }
        
    })
    
   
    $(document).delegate('.game1Start', 'click', changeNum);
    
});


function changeNum(){
     $('.rollingMarquee').fadeIn();
     $('.game1').show();
     document.getElementById("GeneratedMarquee").start();
     var time = 3;
     document.getElementById("rollingNums").innerHTML = time + "s";
            var x = setInterval(function() {
               time--;
               if (time == 0) {
                clearInterval(x);
                document.getElementById("GeneratedMarquee").stop();
                
               }
                document.getElementById("rollingNums").innerHTML = time + "s";
                if (time == 0){
                    document.getElementById("rollingNums").innerHTML = "";
                    $('.rollingMarquee').fadeOut();
                   
                }
            }, 2000);

        
}

function generateQuestions1(number, range, frequency){
    var i;
    
    for (i = 0; i < number; i++){
        var a = Math.ceil((Math.random() * range));
         alert(a);
        correctSum += a;
         
        numbersList[i] = a;
       
    }
    alert(correctSum); //correct
    alert(numbersList); //correct
}


