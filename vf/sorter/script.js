
// Input UPC numbers and the numbers of SKUs per person to sort in each group here
let skuData = [
  700053843400,
  700053843417,
  700053843479,
  700053843486,
  700053843493,
  700053843509,
  700053843516,
  700053843523,
  700053843530,
  700053843547,
  700053843554,
  700053843561,
  700053843578,
  700053843585,
  700053843592,
  700053843608,
  700053843677,
  700053843684,
  191930202395,
  700053630116,
  700053630123,
  700053630130,
  700053630147,
  700053630758,
  700053630765,
  700053630772,
  700053630789,
  700053630796,
  700053630802,
  700053630819,
  700053630826,
  700053630833,
  700053630857,
  700053630871,
  700053630888,
  700053630901,
  700053630918,
  700053288645,
  700053288652,
  700053288669,
  700053288676,
  700053288683,
  700053288690,
  700053288706,
  700053288713,
  700053288720,
  700053288737,
  700053288744,
  700053288751,
  700053288768,
  700053288775,
  700053288782,
  191476702618,
  191476702793,
  191476702977,
  191476703134,
  191476703271,
  191476703417,
  191476703653,
  191476703943,
  191476704254,
  191476704575,
  191476704889,
  191476705183,
  191476705480,
  191476705787,
  191476706081,
  191476706326,
  191476706807,
  191476707040,
]

let groupSize = 8;



// Initital settings
document.getElementById("settingsDisplay").innerHTML = `SKUs: ${skuData.length}. Group Size: ${groupSize} Groups: ${Math.ceil(skuData.length / groupSize)}`// Display settings
document.getElementById("input").focus(); //Initial focus

var previousGroup = "INITIAL";
var count = 0;

// When "Enter" is pressed
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
  var inputValue = Number(document.getElementById("input").value);
  var group;
  var location;
  var backgroundColor;
  document.getElementById("skuDisplay").innerHTML = inputValue;

  if (skuData.includes(inputValue)){
    var index = skuData.indexOf(inputValue);
    
    group = String.fromCharCode(Math.floor(index/groupSize) + 97).toUpperCase();
    location = index % groupSize + 1;
    
    if (group == previousGroup || previousGroup == "INITIAL") {  // Makes screen a different color at group change
      backgroundColor = "white";
    } else {
      backgroundColor = "orange";
    }
    previousGroup = group;

  } else {
    group = 'RED';
    location = '';
    backgroundColor = "red";
  }
  
  count += 1;

  document.getElementById("group").innerHTML = group;
  document.getElementById("location").innerHTML = location;
  document.getElementById("counter").innerHTML = `Count: ${count}`

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("settingsDisplay").style.color = backgroundColor;


  // Reset input
  document.getElementById("input").value = '';
}

