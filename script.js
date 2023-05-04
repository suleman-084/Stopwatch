var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  document.getElementById("count").innerText = "00";
  document.getElementById("sec").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("hr").innerText = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
    }
    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
      hrString = "0" + hrString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (hr < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerText = countString;
    setTimeout("stopwatch()", 10);
    // console.log(count);
  }
}
