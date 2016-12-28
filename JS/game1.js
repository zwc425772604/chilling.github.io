function startToPause() {
    "use strict";
    var button = document.getElementById("startButton");
    if (button.value === "Start") {
        button.value = "Pause";
    } else {
        button.value = "Start";
    }
   
        
}