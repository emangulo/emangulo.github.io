
let count = 0;
document.getElementById("input").focus(); //Initial focus

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    let inputValue = document.getElementById("input").value;

    if ((inputValue != "") & (inputValue.length == 12) & (Number.isInteger(Number(inputValue)))) {
      getLocation(Number(inputValue));
    } else {
      setLocationDisplay("INVALID UPC");
    }
    setUPCDisplay(inputValue);
    resetInputBox();
  }
});


async function getLocation(upc) {
  const response = await fetch(`http://localhost:3000/location/${upc}`, {method: "PUT"})
  var data = await response.json()

  setLocationDisplay(formatOutput(data[0].location));
  increaseCountBy(1);
}

function formatOutput(input) {
  let result = input.slice(0,1) + " " + input.slice(1,3) + "- " + input.slice(3,5) + "- " + input.slice(5,6) + input.slice(6,8)
  return result
}

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
