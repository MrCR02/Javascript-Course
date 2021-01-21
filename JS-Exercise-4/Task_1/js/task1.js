const timer = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let stoptime = true;

function startTimer() {

    document.getElementById("resume").disabled = true;
    document.getElementById("resume").style.cursor = 'not-allowed';
    document.getElementById("start").disabled = true;
    document.getElementById("start").style.cursor = 'not-allowed';
    document.getElementById("stop").disabled = false;
    document.getElementById("stop").style.cursor = 'pointer';
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.cursor = 'pointer';
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
    document.getElementById("start").disabled = true;
    document.getElementById("start").style.cursor = 'not-allowed';
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").style.cursor = 'not-allowed';
    document.getElementById("resume").disabled = false;
    document.getElementById("resume").style.cursor = 'pointer';
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.cursor = 'pointer';
    if (stoptime == false) {
        stoptime = true;
    }
}

function resumeTimer(){
    document.getElementById("start").disabled = true;
    document.getElementById("start").style.cursor = 'not-allowed';
    document.getElementById("stop").disabled = false;
    document.getElementById("stop").style.cursor = 'pointer';
    document.getElementById("resume").disabled = true;
    document.getElementById("resume").style.cursor = 'not-allowed';
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.cursor = 'pointer';
    stoptime = true;
    startTimer();
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    ms = parseInt(ms);

    ms = ms + 1;

    if(ms == 99){
        sec += 1;
        ms = 0;
    }

    if (sec == 60) {
        min = min + 1;
        sec = 0;
    }
    if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }

    if (ms < 10 || ms == 0) {
        ms = '0' + ms;
    }

    if (sec < 10 || sec == 0) {
        sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
        min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
        hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec + ':' + ms;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {

    document.getElementById("start").disabled = false;
    document.getElementById("start").style.cursor = 'pointer';
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").style.cursor = 'not-allowed';
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.cursor = 'not-allowed';
    document.getElementById("resume").disabled = true;
    document.getElementById("resume").style.cursor = 'not-allowed';
    
    hr = sec = min = ms = 0;
    timer.innerHTML = '00:00:00:00';
    if (stoptime == false) {
        stoptime = true;
    }
}

window.onload = function (){

    // for disabeling stop, resume and reset buttons
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").style.cursor = 'not-allowed';
    document.getElementById("resume").disabled = true;
    document.getElementById("resume").style.cursor = 'not-allowed';
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.cursor = 'not-allowed';

    // for displaying Date

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let date = new Date();
    date = date.getDate()+"-"+monthNames[date.getMonth()]+"-"+date.getFullYear();
    document.getElementById("date").innerHTML = `Date: ${date}`;

    // date end

    // for displaying current time
    setInterval(showTime, 1000); 
        function showTime() { 
            let time = new Date(); 
            let hour = time.getHours(); 
            let min = time.getMinutes(); 
            let sec = time.getSeconds(); 
  
            hour = hour < 10 ? "0" + hour : hour; 
            min = min < 10 ? "0" + min : min; 
            sec = sec < 10 ? "0" + sec : sec; 
  
            const currentTime = `${hour}:${min}:${sec}`; 
            document.getElementById("watch") .innerHTML = `Time: ${currentTime}`; 
        } 
    showTime(); 
}