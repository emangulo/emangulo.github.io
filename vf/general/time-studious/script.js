// Initital settings

let count = 0;
let prevTime;
let cycleTime;

let log = [];

document.getElementById("settingsDisplay").innerHTML = ""; // Display settings
document.getElementById("input").focus(); //Initial focus

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    addCount(Number(document.getElementById("input").value));
  }
});

function addCount(input) {
  cycleTime = (Date.now() - prevTime) / 1000;
  prevTime = Date.now();

  log.unshift(count + 1 + " - " + input + " - " + cycleTime);

  count += 1;

  document.getElementById("group").innerHTML = log.join("<br />");
  document.getElementById("counter").innerHTML = `Count: ${count}`;

  // Reset input
  document.getElementById("input").value = "";
}
