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
    setInterval(function () {

        document.getElementById("timer").innerHTML = hou + " : " + sec;
        sec = sec - 1;
        if (sec === 0) {
            alert("times out");
            stopTime();
        }
        
    }, 1000);
    
}

function stopTime() {
    "use strict";
    document.getElementById("timer").innerHTML = "0:00";
}