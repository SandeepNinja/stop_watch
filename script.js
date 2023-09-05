console.log("I am Script");
var stopWatchTime = document.getElementById("countDown");
// stopWatchTime.innerHTML = "1";
var minuteCount = document.getElementById("minuteDisplay");
var secondCount = document.getElementById("secondDisplay");
var milliSecondCount = document.getElementById("milliSecondDisplay");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");
var lapButton = document.getElementById("lap");
var visibilityStart = document.querySelectorAll(".startReset");
var visibilityPause = document.querySelectorAll(".lapPause");
var Interval;

var stopWatchMinute = 0;
var stopWatchSecond = 0;
var stopWatchMilliSecond = 0;

// lap variables
var lapMinute = 0;
var lapSecond = 0;
var lapMilliSecond = 0;
var lapDisplayMinute = "00";
var lapDisplaySecond = "00";
var lapDisplayMilliSecond = "00";
var lapCount = 0;

// start
startButton.addEventListener("click", function () {
  clearInterval(Interval);
  Interval = setInterval(function () {
    startTimer();
    startLap();
  }, 10);
});

// reset
resetButton.addEventListener("click", function () {
  clearInterval(Interval);
  stopWatchMinute = 0;
  stopWatchSecond = 0;
  stopWatchMilliSecond = 0;
  minuteCount.innerHTML = "0" + stopWatchMinute;
  secondCount.innerHTML = "0" + stopWatchSecond;
  milliSecondCount.innerHTML = "0" + stopWatchMilliSecond;
  //   lap
  lapMinute = 0;
  lapSecond = 0;
  lapMilliSecond = 0;
  lapDisplayMinute = "00";
  lapDisplaySecond = "00";
  lapDisplayMilliSecond = "00";

  var table = document.getElementById("tableBody");
  table.innerHTML = "";
  lapCount = 0;
});

// pause
pauseButton.addEventListener("click", function () {
  clearInterval(Interval);
  visibilityStart.forEach((element) => {
    element.style.display = "inline-block";
  });
  visibilityPause.forEach((element) => {
    element.style.visibility = "hidden";
  });
});

// lap
lap.addEventListener("click", function () {
  console.log(
    stopWatchMinute,
    " : ",
    stopWatchSecond,
    " : ",
    stopWatchMilliSecond
  );
  lapCount++;
  var table = document.getElementById("tableBody");
  var row = table.insertRow(0);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  cell0.innerHTML = lapCount;
  cell1.innerHTML = `${lapDisplayMinute}:${lapDisplaySecond}:${lapDisplayMilliSecond}`;
  cell2.innerHTML = `${minuteCount.innerHTML}:${secondCount.innerHTML}:${milliSecondCount.innerHTML}`;
  lapMinute = 0;
  lapSecond = 0;
  lapMilliSecond = 0;
  lapDisplayMinute = "00";
  lapDisplaySecond = "00";
  lapDisplayMilliSecond = "00";
});

function startTimer() {
  visibilityStart.forEach((element) => {
    element.style.display = "none";
  });
  visibilityPause.forEach((element) => {
    element.style.visibility = "visible";
  });
  stopWatchMilliSecond++;
  //   console.log(stopWatchMilliSecond);

  if (stopWatchMilliSecond < 10) {
    milliSecondCount.innerHTML = "0" + stopWatchMilliSecond;
  } else if (stopWatchMilliSecond < 100) {
    milliSecondCount.innerHTML = stopWatchMilliSecond;
  } else {
    stopWatchSecond++;
    stopWatchMilliSecond = 0;
    milliSecondCount.innerHTML = "0" + stopWatchMilliSecond;
    // secondCount.innerHTML = stopWatchSecond;
    if (stopWatchSecond < 10) {
      secondCount.innerHTML = "0" + stopWatchSecond;
    } else if (stopWatchSecond < 60) {
      secondCount.innerHTML = stopWatchSecond;
    } else {
      stopWatchMinute++;
      stopWatchSecond = 0;
      secondCount.innerHTML = "0" + stopWatchSecond;
      if (stopWatchMinute < 10) {
        minuteCount.innerHTML = "0" + stopWatchMinute;
      } else {
        minuteCount.innerHTML = stopWatchMinute;
      }
    }
  }
}

// lap
function startLap() {
  //  lapMinute = 0;
  //  lapSecond = 0;
  //  lapMilliSecond = 0;
  //    lapDisplayMinute = "00";
  //    lapDisplaySecond = "00";
  //    lapDisplayMilliSecond = "00";
  console.log(
    lapDisplayMinute,
    ":",
    lapDisplaySecond,
    ":",
    lapDisplayMilliSecond
  );
  lapMilliSecond++;
  console.log("lap: ", lapMilliSecond);
  if (lapMilliSecond < 10) {
    lapDisplayMilliSecond = "0" + lapMilliSecond;
  } else if (lapMilliSecond < 100) {
    lapDisplayMilliSecond = lapMilliSecond;
  } else {
    lapSecond++;
    lapMilliSecond = 0;
    lapDisplayMilliSecond = "0" + lapMilliSecond;
    // secondCount.innerHTML = stopWatchSecond;
    if (lapSecond < 10) {
      lapDisplaySecond = "0" + lapSecond;
    } else if (lapSecond < 60) {
      lapDisplaySecond = lapSecond;
    } else {
      lapMinute++;
      lapSecond = 0;
      lapDisplaySecond = "0" + lapSecond;
      if (lapMinute < 10) {
        lapDisplayMinute = "0" + lapMinute;
      } else {
        lapDisplayMinute = lapMinute;
      }
    }
  }
}
