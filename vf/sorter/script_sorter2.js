// Input UPC list and the group size
let skuList = [];

let groupSize = 10;


// ---------- PROGRAM START. DO NOT CHANGE BELOW ----------

// Initital settings
let previousGroup = "i";
let previousGroupNum = "i";

let count = 0;

document.getElementById("settingsDisplay").innerHTML = `SKUs: ${skuList.length}. Group Size: ${groupSize}. Groups:${Math.ceil(skuList.length / groupSize)}`; // Display settings
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
  let groupNum;
  let backgroundColor;
  document.getElementById("skuDisplay").innerHTML = inputValue;

  // Get group and location
  if (skuList.includes(inputValue)) {
    let index = skuList.indexOf(inputValue);
    group = String.fromCharCode(Math.floor(index / groupSize) + 65);
    groupNum = (index % groupSize) + 1;
  } else {
    skuList.push(inputValue);
    let index = skuList.indexOf(inputValue);
    group = String.fromCharCode(Math.floor(index / groupSize) + 65);
    groupNum = (index % groupSize) + 1;      
  }

  // Update backgound colors if group changes
  if (group != previousGroup) {
    backgroundColor = "orange";
  } else {
    backgroundColor = "white";
  }
  previousGroup = group;
  previousGroupNum = groupNum;

  count += 1;

  document.getElementById("group").innerHTML = group;
  document.getElementById("location").innerHTML = groupNum;
  document.getElementById("counter").innerHTML = `Count: ${count}`;

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("settingsDisplay").style.color = backgroundColor;

  // Reset input
  document.getElementById("input").value = "";
}
