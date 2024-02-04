// Input Core Classic UPC list
let locationList = [
  {location: 'A', UPC: 123456789123},
  {location: 'B', UPC: 321654987321},
];

// ---------- PROGRAM START. DO NOT CHANGE BELOW ----------

let count = 0;
document.getElementById("input").focus(); //Initial focus

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    let inputValue = document.getElementById("input").value;

    if ((inputValue != "") & (inputValue.length == 12)) {
      getLocation(Number(inputValue));
    } else {
      setLocationDisplay("Not UPC");
    }
    setUPCDisplay(inputValue);
    resetInputBox();
  }
});


function getLocation(inputValue) {
  let location;
  let backgroundColor;

  // Get location
  if (locationList.includes(inputValue)) {
    location = "CORE CLASSIC";
  } else {
    location = "OTHER";
  }

  increaseCountBy(1);

  setLocationDisplay(location);
  setBackgroundColor(backgroundColor);
}


//HELPER FUNCTIONS
function setLocationDisplay(location) {
  document.getElementById("location").innerHTML = location;
}

function setUPCDisplay(UPC) {
  document.getElementById("skuDisplay").innerHTML = UPC;
}

function resetInputBox() {
  document.getElementById("input").value = "";
}

function increaseCountBy(increaseBy) {
  count += increaseBy;
  document.getElementById("counter").innerHTML = `Count: ${count}`;
}

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
