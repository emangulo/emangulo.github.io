
let maxGroupSize = 10; // How many different SKUs to sort

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
  if (!skuList.includes(input) && input != 0) {
    skuList.push(input);
  }
  let index = skuList.findIndex( x => x === input);
  document.getElementById("location").innerHTML = index + 1;

  count += 1;
  document.getElementById("counter").innerHTML = `Count: ${count}`;

  // Reset input
  document.getElementById("input").value = "";
  console.log(skuList);
}



/* ROADMAP:

- Create the correct sized ordered data bank based on the maxGroupSize
- Add UPC to the first available slot

*/