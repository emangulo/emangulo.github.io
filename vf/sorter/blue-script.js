let skuListC = [];

// Initital settings
var count = 0;

document.getElementById("input").focus(); //Initial focus
document.getElementById("scanUPCDisplay").innerHTML = `Scan UPC - BLUE`;

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    getGroupLocation();
  }
});

// When UPC is scanned
function getGroupLocation() {
  var inputValue = Number(document.getElementById("input").value);
  var location;
  var backgroundColor;
  document.getElementById("skuDisplay").innerHTML = inputValue;

  // Get group and location
  if (skuListC.includes(inputValue)) {
    location = skuListC.indexOf(inputValue) + 1;
  } else {
    skuListC.push(inputValue);
    location = skuListC.indexOf(inputValue) + 1;
  }

  count += 1;

  document.getElementById("location").innerHTML = location;
  document.getElementById("counter").innerHTML = `Count: ${count}. Locations: ${skuListC.length}`;

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("settingsDisplay").style.color = backgroundColor;

  // Reset input
  document.getElementById("input").value = "";
}
