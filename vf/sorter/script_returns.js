let count = 0;
let locationList = [];

document.getElementById("input").focus(); //Initial focus

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    let input = document.getElementById("input").value;
    checkInput(input) ? main(input) : null;  
  } 
});

main = (input) => {
  if (input.slice(0,2) == 'CL') {
    clearLocation(input.slice(2));
  } else {    
    if (locationList.includes(Number(input))) {
      setLocation(locationList.indexOf(Number(input)) + 1);
    } else {
      pushSku(Number(input));
    }
    addToCount(1);
  }
  setDisplay(input);
  resetFocus();
}

checkInput = (input) => {
  if (input.slice(0,2) != 'CL' && isNaN(input)) {
    setDisplay('NOT VALID INPUT');
    setLocation('ERR');
    resetFocus();
    return false;
  } else {
    return true;
  }
  
}

pushSku = (sku) => {
  if (locationList.includes(null)) {
    locationList[locationList.indexOf(null)] = sku;
    setLocation(locationList.indexOf(sku) + 1);
  } else {
    setLocation(locationList.push(sku));
  }
}

clearLocation = (locationToClear) => {
  setLocation('');
  locationList[locationToClear - 1] = null;
}

setLocation = (value) => {
  document.getElementById("location").innerHTML = value;
}

setDisplay = (input) => {
  document.getElementById("display").innerHTML = input;
}

addToCount = (addNum) => {
  count += addNum;
  document.getElementById("counter").innerHTML = `Count: ${count}`;
}

resetFocus = () => {
  document.getElementById("input").value = "";
  console.log(locationList);
}

/* TODO:
  add UPC input validation
  add background color change

*/
