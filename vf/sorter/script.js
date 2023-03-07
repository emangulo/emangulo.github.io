// Input UPC numbers and the numbers of SKUs per person to sort in each group here
let skuListA = [
  700053843400, 700053843417, 700053843479, 700053843486, 700053843493,
  700053843509, 700053843516, 700053843523, 700053843530, 700053843547,
  700053843554, 700053843561, 700053843578, 700053843585, 700053843592,
  700053843608, 700053843677, 700053843684, 191930202395, 700053630116,
  700053630123, 700053630130, 700053630147, 700053630758, 700053630765,
  700053630772, 700053630789, 700053630796, 700053630802, 700053630819,
  700053630826, 700053630833, 700053630857, 700053630871, 700053630888,
  700053630901, 700053630918, 700053288645, 700053288652, 700053288669,
  700053288676, 700053288683, 700053288690, 700053288706, 700053288713,
  700053288720, 700053288737, 700053288744, 700053288751, 700053288768,
  700053288775, 700053288782, 191476702618, 191476702793, 191476702977,
  191476703134, 191476703271, 191476703417, 191476703653, 191476703943,
  191476704254, 191476704575, 191476704889, 191476705183, 191476705480,
  191476705787, 191476706081, 191476706326, 191476706807, 191476707040,
];

let skuListB = [
  196244904928, 196244872159, 196244874115, 196245114319, 196245967519,
  700053804722, 700053803947, 658100946690, 658100946706, 658100946720,
  658100946737, 706420455948, 887682620913, 637439878797, 191165040694,
  191476132637, 191163545627, 191164661333, 193391232690, 196244853431,
  192828066167, 196014429552, 193391319643, 193391749792, 196244856333,
  194902229901, 196244783929, 196010272237, 194901130048, 196244555182,
  196244870360, 194905589828, 195438352040, 194901421764, 196015340320,
  195436818708, 196014235948, 196244842534, 196244871428, 196244898234,
  196244973733, 196244905239, 196244873507, 196244946973, 196244921420,
  196244922908, 196244907646, 706421388108, 196570576837, 196571176081,
  658100946713, 888654802191, 196244869685, 196014429576, 194905539137,
  196244787088, 192363877211, 195438342850, 194903673727, 196244794017,
  195436425265, 195436453275, 196014236020, 196014236082, 196244895981,
  196244897725, 196014239212, 196244872043, 700053333925,
];

let skuListC = [];

let groupSize = 8;

// Initital settings
var previousGroup = "INITIAL";
var count = 0;
let skuListSelection = "A"; // Defult SKU list
let skuListSelectionName = 'MAIN'; // Defult SKU list name

document.getElementById("settingsDisplay").innerHTML = `SKU List A: ${skuListA.length}. SKU List B: ${skuListB.length}. Group Size: ${groupSize}`; // Display settings
document.getElementById("input").focus(); //Initial focus
document.getElementById("scanUPCDisplay").innerHTML = `Scan UPC - ${skuListSelection == 'B' ? 'RED' : 'MAIN'}`;

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    if (document.getElementById("input").value == "r") {
      
      if (skuListSelection == 'A') {
        skuListSelection = 'B';
        skuListSelectionName = 'RED';
      } else if (skuListSelection == 'B') {
        skuListSelection = 'C';
        skuListSelectionName = 'BLUE';
      } else {
        skuListSelection = 'A';
        skuListSelectionName = 'MAIN';
      }

      document.getElementById("input").value = "";
      document.getElementById("scanUPCDisplay").innerHTML = `Scan UPC - ${skuListSelectionName}`;

    } else if (document.getElementById("input").value != "" && skuListSelection == 'C') {
      getLocation();
    } else if (document.getElementById("input").value != "") {
      getGroupLocation();
    }
  }
});

// When UPC is scanned
function getGroupLocation() {
  var inputValue = Number(document.getElementById("input").value);
  var group;
  var location;
  var backgroundColor;
  document.getElementById("skuDisplay").innerHTML = inputValue;

  // Select correct SKU list
  let skuList = skuListA;
  let startingLetterNum = 65; // Letter A
  let noSkuMessage = 'RED';
  let noSkuColor = 'red';
  
  if (skuListSelection == "B") {
    skuList = skuListB;
    startingLetterNum = 78; // Letter N
    noSkuMessage = 'BLUE';
    noSkuColor = 'blue';
  }

  // Get group and location
  if (skuList.includes(inputValue)) {
    var index = skuList.indexOf(inputValue);

    group = String.fromCharCode(Math.floor(index / groupSize) + startingLetterNum);
    location = (index % groupSize) + 1;

    if (group == previousGroup || previousGroup == "INITIAL") {
      backgroundColor = "white";
    } else {
      backgroundColor = "orange";
    }
    previousGroup = group;
  } else {
    group = noSkuMessage;
    location = "";
    backgroundColor = noSkuColor;
  }

  count += 1;

  document.getElementById("group").innerHTML = group;
  document.getElementById("location").innerHTML = location;
  document.getElementById("counter").innerHTML = `Count: ${count}`;

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("settingsDisplay").style.color = backgroundColor;

  // Reset input
  document.getElementById("input").value = "";
}

function getLocation() {
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

  document.getElementById("group").innerHTML = '';
  document.getElementById("location").innerHTML = location;
  document.getElementById("counter").innerHTML = `Count: ${count}. Locations: ${skuListC.length}`;

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("settingsDisplay").style.color = backgroundColor;

  // Reset input
  document.getElementById("input").value = "";
}