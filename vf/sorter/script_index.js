// Input UPC list and the group size
let singlesSkuList = [
  123, 456, 789,
]

let skuList = [
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
]

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
  if (singlesSkuList.includes(inputValue)) {
    group = "SINGLE";
    groupNum = "";
    backgroundColor = "lime";
  } else if (skuList.includes(inputValue)) {
    let index = skuList.indexOf(inputValue);
    group = String.fromCharCode(Math.floor(index / groupSize) + 65);
    groupNum = (index % groupSize) + 1;

    // Update backgound colors if group changes
    if (group != previousGroup) {
      backgroundColor = "orange";
    // } else if (groupNum != previousGroupNum) {
    //   backgroundColor = "cyan";
    } else {
      backgroundColor = "white";
    }
    previousGroup = group;
    previousGroupNum = groupNum;
  } else {
    group = "N/A";
    groupNum = "";
    backgroundColor = "red";
  }

  count += 1;

  document.getElementById("group").innerHTML = group;
  document.getElementById("location").innerHTML = groupNum;
  document.getElementById("counter").innerHTML = `Count: ${count}`;

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("settingsDisplay").style.color = backgroundColor;

  // Reset input
  document.getElementById("input").value = "";
}
