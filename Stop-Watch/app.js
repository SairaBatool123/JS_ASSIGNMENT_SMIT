var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function stopWatch() {
    if (timer == true) {
        count++
        setTimeout(stopWatch, 10)
        document.getElementById('count').innerHTML = count

        if (count == 100) {
            sec++
            document.getElementById('sec').innerHTML = sec
            count = 0
        }
        if (sec == 60) {
            min++
            document.getElementById('min').innerHTML = min
            sec = 0
        }
        if (min == 60) {
            hr++
            document.getElementById('hr').innerHTML = hr
            min = 0
        }
        // if(count<10){
        //     document.getElementById('sec').innerHTML = "0" + count
        // }
        if (hr < 10) {
            document.getElementById('hr').innerHTML = "0" + hr
        } if (min < 10) {
            document.getElementById('min').innerHTML = "0" + min
        } if (sec < 10) {
            document.getElementById('sec').innerHTML = "0" + sec
        }
    }
}

function start() {
    timer = true;
    stopWatch();
}
function stop() {
    timer = false;
}
function restart() {
    // timer=true;
    // watchAction();

    // OR 

    timer = true;
    hr = 0
    min = 0
    sec = 0
    count = 0
    document.getElementById('hr').innerHTML = "00"
    document.getElementById('min').innerHTML = "00"
    document.getElementById('sec').innerHTML = "00"
    document.getElementById('count').innerHTML = "00"
    stopWatch();
}