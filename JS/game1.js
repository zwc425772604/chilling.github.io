var myBar;
function startGame() {
    "use strict";
    var button = document.getElementById("startButton");
    if (button.value === "Start") {
        button.value = "Pause";
        timeCount();
    } else {
        button.value = "Start";
    }
   
        
}

function timeCount() {
    "use strict";
    var hou = 0, sec = 60;
    myVar = setInterval(function () {

       
        sec = sec - 1;
        document.getElementById("timer").innerHTML = hou + " : " + sec;
        if (sec === 0) {
          document.getElementById("timer").innerHTML = "Game ends";
            clearInterval(myVar);
        }
         
    }, 1000);
    
}

function stopTime() {
    "use strict";
    document.getElementById("timer").innerHTML = "0:00";
}