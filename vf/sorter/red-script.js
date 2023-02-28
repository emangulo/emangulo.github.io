
// Input UPC numbers and the numbers of SKUs per person to sort in each group here
let skuData = [
  196244904928,
  196244872159,
  196244874115,
  196245114319,
  196245967519,
  700053804722,
  700053803947,
  658100946690,
  658100946706,
  658100946720,
  658100946737,
  706420455948,
  887682620913,
  637439878797,
  191165040694,
  191476132637,
  191163545627,
  191164661333,
  193391232690,
  196244853431,
  192828066167,
  196014429552,
  193391319643,
  193391749792,
  196244856333,
  194902229901,
  196244783929,
  196010272237,
  194901130048,
  196244555182,
  196244870360,
  194905589828,
  195438352040,
  194901421764,
  196015340320,
  195436818708,
  196014235948,
  196244842534,
  196244871428,
  196244898234,
  196244973733,
  196244905239,
  196244873507,
  196244946973,
  196244921420,
  196244922908,
  196244907646,
  706421388108,
  196570576837,
  196571176081,
  658100946713,
  888654802191,
  196244869685,
  196014429576,
  194905539137,
  196244787088,
  192363877211,
  195438342850,
  194903673727,
  196244794017,
  195436425265,
  195436453275,
  196014236020,
  196014236082,
  196244895981,
  196244897725,
  196014239212,
  196244872043,
  700053333925,
]

let groupSize = 8;



// Initital settings
document.getElementById("settingsDisplay").innerHTML = `SKUs: ${skuData.length}. Group Size: ${groupSize} Groups: ${Math.ceil(skuData.length / groupSize)}`// Display settings
document.getElementById("input").focus(); //Initial focus

var previousGroup = "INITIAL"

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
    
    group = String.fromCharCode(Math.floor(index/groupSize) + 110).toUpperCase();
    location = index % groupSize + 1;
    
    if (group == previousGroup || previousGroup == "INITIAL") {  // Makes screen a different color at group change
      backgroundColor = "white";
    } else {
      backgroundColor = "orange";
    }
    previousGroup = group;

  } else {
    group = 'N/A';
    location = '';
    backgroundColor = "green";
  }
  
  document.getElementById("group").innerHTML = group;
  document.getElementById("location").innerHTML = location;

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("settingsDisplay").style.color = backgroundColor;

  // Reset input
  document.getElementById("input").value = '';
}

