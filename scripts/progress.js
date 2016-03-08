var progressBar = document.getElementById("progress");

function openWin() {
  progressWindow = window.open("bar.html", "", "width=900, height=75");
}

var fillProgressBar = function(time) {
  progressBar.style.transition= "all " + time + "s" + " ease-in-out";
  progressBar.style.width = "100%";
};

var resetProgressBar = function() {
  progressBar.style.width = "0%";
};

window.onload = function() {
  var userTime = prompt("How long would you like?");
  resetProgressBar();
  fillProgressBar(userTime);
}
