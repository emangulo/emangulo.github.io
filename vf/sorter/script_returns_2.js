
let locationList = [];

let input = 'CL3'
input != '' ? main(input) : null ;

// // When "Enter" is pressed
// document.getElementById("input").addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault;
    
//     let input = Number(document.getElementById("input").value);
//     if (input != ''){
//       main(input);
//     }  
//   } 
// });

function main(input) {
  if (input.slice(0,2) == 'CL') {
    clearLocation( input.slice(2) );
  } else if (isSkuInLocation(input)) {
    getLocation(input);
  } else {
    console.log('the sku is NOT in the list')
    console.log(pushSku(input));
    console.log(locationList);
  }
}



function isSkuInLocation(sku) {
  return false
}

function getLocation(sku) {
  return 'ok'
}

function pushSku(sku) {
  locationList.push({sku: sku, count: 1});
  return 'sku was pushed'
}

function clearLocation(locationToClear) {
  console.log(`manually cleared ${locationToClear}`)
}
