
let maxGroupSize = 3; // How many different SKUs to sort

let count = 0;
let skuList = [];


document.getElementById("input").focus(); //Initial focus

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    getLocation();
  } 
});


function getLocation() {
  let input = Number(document.getElementById("input").value);
  document.getElementById("skuDisplay").innerHTML = input;

  

  // Get location
  if (skuList.includes(input)) {
    let index = skuList.findIndex( x => x === input);
    document.getElementById("location").innerHTML = index + 1;
    document.body.style.backgroundColor = 'white';
  } else {
    addToList(input);
  }
  
  count += 1;
  document.getElementById("counter").innerHTML = `Count: ${count}`;

  // Reset input
  document.getElementById("input").value = "";
  console.log(skuList);
}

function addToList(input) {
  if (skuList.length >= maxGroupSize) {
    let mostFilledLocation = 2;
    document.getElementById("location").innerHTML = `CL#`;
    document.body.style.backgroundColor = 'orange';
  } else {
    skuList.push(input)
    let index = skuList.findIndex( x => x === input);
    document.getElementById("location").innerHTML = index + 1;
    document.body.style.backgroundColor = 'white';
  }
}

function clearLocation() {

}