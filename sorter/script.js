
// Input UPC numbers and the numbers of SKUs per person to sort in each group here
let data = [
  9780307279286,
  9780804172707,
  9780525657743,
  4,
  5,
  6,
  7,
  8,
  9,
  9780141037493,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22
]

let groupSize = 10;



// Initital settings
document.getElementById("settings").innerHTML = `SKUs: ${data.length}. Group Size: ${groupSize}` // Display settings

document.getElementById("input").focus(); //Initial focus

document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault;
    if (document.getElementById("input").value != ''){
      document.getElementById("button").click();
    }
  }
});

// This is where the program begins
function getGroup() {
  var input = Number(document.getElementById("input").value);
  var location;
  var group;
  var backgroundColor;
  document.getElementById("sku").innerHTML = input;

  if (data.includes(input)){
    location = data.indexOf(input) + 1;
    group = String.fromCharCode(Math.ceil(location/groupSize) + 96).toUpperCase();
    backgroundColor = "white";
  } else {
    location = 'N/A';
    group = 'N/A';
    backgroundColor = "red";
  }
  
  document.getElementById("group").innerHTML = group;
  document.getElementById("location").innerHTML = location;

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("settings").style.color = backgroundColor;

  // Reset input
  document.getElementById("input").value = '';
}

