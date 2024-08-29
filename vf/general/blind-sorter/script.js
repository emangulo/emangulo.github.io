let skuList = [];

// Initital settings

let count = 0;

document.getElementById("settingsDisplay").innerHTML = ""; // Display settings
document.getElementById("input").focus(); //Initial focus

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    if (document.getElementById("input").value != "") {
      getGroupLocation(Number(document.getElementById("input").value));
    }
  }
});

// When UPC is scanned
function getGroupLocation(inputValue) {
  let group;
  let backgroundColor = "white";
  document.getElementById("skuDisplay").innerHTML = inputValue;

  let index = skuList.indexOf(inputValue);

  if (index == -1) {
    skuList.push(inputValue);
    group = skuList.indexOf(inputValue) + 1;
  } else {
    group = index + 1;
    backgroundColor = "limegreen";
  }

  count += 1;

  document.getElementById("group").innerHTML = group;
  document.getElementById("counter").innerHTML = `Count: ${count}`;
  document.body.style.backgroundColor = backgroundColor;
  // Reset input
  document.getElementById("input").value = "";
}
