// Input Core Classic UPC list
let coreSkuList = [
  123, 456, 789,
]

// ---------- PROGRAM START. DO NOT CHANGE BELOW ----------

// Initital settings
let previousGroup = "i";
let previousGroupNum = "i";

let count = 0;

document.getElementById("settingsDisplay").innerHTML = ''; // Display settings
document.getElementById("input").focus(); //Initial focus

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    if (document.getElementById("input").value != "") {
      getGroupLocation();
    }
  }
});

// When UPC is scanned
function getGroupLocation() {
  let inputValue = Number(document.getElementById("input").value);
  let group;
  let backgroundColor;
  document.getElementById("skuDisplay").innerHTML = inputValue;

  // Get group and location
  if (coreSkuList.includes(inputValue)) {
    group = "CORE CLASSIC";
    backgroundColor = "limegreen";
  } else {
    group = "OTHER";
    backgroundColor = "white";
  }

  count += 1;

  document.getElementById("group").innerHTML = group;
  document.getElementById("counter").innerHTML = `Count: ${count}`;
  document.body.style.backgroundColor = backgroundColor;

  // Reset input
  document.getElementById("input").value = "";
}
