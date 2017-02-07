function changeNum(){
   var time = 3;
            document.getElementById("remaining").innerHTML = time + "s";
            var x = setInterval(function() {
               time--;
               if (time == 0) {
                clearInterval(x);
                document.getElementById("GeneratedMarquee").stop();
                //document.getElementById("remaining").innerHTML = "";
               }

               //document.getElementById('remaining').stop();
                document.getElementById("remaining").innerHTML = time + "s";
                if (time == 0){
                    document.getElementById("remaining").innerHTML = "";
                }
            }, 2000);

            
}