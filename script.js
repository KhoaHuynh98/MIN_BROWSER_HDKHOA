// Lấy các button group
let result = document.getElementById("result");
let btnGroups = document.getElementsByClassName("btn-group");
let btnWindows = btnGroups[0].children;
let btnScreens = btnGroups[1].children;
let btnLocations = btnGroups[2].children;
let btnHistories = btnGroups[3].children;
let btnNavigators = btnGroups[4].children;
let btnTimings = btnGroups[5].children;

// Thử nghiệm các hàm xử lý window
// ========================================================================

// width x height
btnWindows[0].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "w x h của window =" + window.innerWidth + "x" + window.innerHeight;
}
);

let myWindow;

// open
btnWindows[1].addEventListener("click", function () {
  let width = window.prompt("Nhập chiều ngang của cửa sổ.");
  let height = window.prompt("Nhập chiều cao của cửa sổ.");
  myWindow = window.open(
    "",
    "New Window",
    "width=" + width + ",height=" + height
  );
  myWindow.document.write("Kmin Academy");
});

// close
btnWindows[2].addEventListener("click", function () {
  // code here...
  myWindow = window.close();
});

// move to
btnWindows[3].addEventListener("click", function () {
  // code here...
  myWindow = window.moveTo()
});

// resize to
btnWindows[4].addEventListener("click", function () {
  // code here...
  myWindow = window.resizeTo(200, 400);
});

// Thử nghiệm các hàm xử lý screen
// ========================================================================

// width x height
btnScreens[0].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "w x h của screen =" + window.innerWidth + "x" + window.innerHeight;
});

// availWidth x availHeight
btnScreens[1].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "availW x availH của screen =" + window.availWidth + "x" + window.availHeight;
});

// colorDepth
btnScreens[2].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "color depth =" + screen.colorDepth;

});

// Thử nghiệm các hàm xử lý location
// ========================================================================

// href
btnLocations[0].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "href =" + window.location.href;
});

// hostname
btnLocations[1].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "hostname =" + window.location.hostname;
});

// pathname
btnLocations[2].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "pathname =" + window.location.pathname;
});

// protocal
btnLocations[3].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "protocol =" + window.location.protocol;
});

// port
btnLocations[4].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "port =" + window.location.port;
});

// Thử nghiệm các hàm xử lý history
// ========================================================================

// back
btnHistories[0].addEventListener("click", function () {
  // code here...
  window.history.back();
});

// forward
btnHistories[1].addEventListener("click", function () {
  // code here...
  window.history.forward();
});

// Thử nghiệm các hàm xử lý navigator
// ========================================================================

// language
btnNavigators[0].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "language =" + window.navigator.language;
});

// onLine
btnNavigators[1].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "onLine =" + window.navigator.onLine;
});

// cookieEnabled
btnNavigators[2].addEventListener("click", function () {
  // code here...
  document.getElementById("result").innerHTML = "cookieEnabled =" + window.navigator.cookieEnabled;
});

// Thử nghiệm các hàm xử lý Timing
// ========================================================================

let timeoutId;
btnTimings[0].addEventListener("click", function () {
  // code here...
});
btnTimings[1].addEventListener("click", function () {
  // code here...
});

let intervalId;
btnTimings[2].addEventListener("click", function () {
  // code here...
});
btnTimings[3].addEventListener("click", function () {
  // code here...
});
