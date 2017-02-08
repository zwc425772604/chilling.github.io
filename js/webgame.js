$(document).ready(function () {
  //your code here
    //$('.game1').hide();
   // $('.game2').hide();
    $('.container').hide();
    $('#game1Button').click(function(){
        $('.container').show();
        $('.game1').show();
        $('.game2').hide();
    });
    
    $('#game2Button').click(function(){
         $('.container').show();
        $('.game1').hide();
        $('.game2').show();
       
    });
    
    
});


function changeNum(){
   
    $('.game1').show();
   var time = 3;
            
            document.getElementById("rollingNums").innerHTML = time + "s";
            var x = setInterval(function() {
               time--;
               if (time == 0) {
                clearInterval(x);
                document.getElementById("GeneratedMarquee").stop();
                //document.getElementById("remaining").innerHTML = "";
               }

               //document.getElementById('remaining').stop();
                document.getElementById("rollingNums").innerHTML = time + "s";
                if (time == 0){
                    document.getElementById("rollingNums").innerHTML = "";
                    $('.rollingMarquee').fadeOut();
                    time = 3;
                }
            }, 2000);

        
}