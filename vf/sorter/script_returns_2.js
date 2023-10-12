
let locationList = [1,'x',3,'x'];

let input = '3';
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
  } else {    
    if (locationList.includes(Number(input))) {
      console.log(locationList.indexOf(Number(input)));
    } else {
      console.log(pushSku(Number(input)));
    }
  }
}

function pushSku(sku) {
  if (locationList.includes('x')) {
    locationList[locationList.indexOf('x')] = sku;
  } else {
    locationList.push(sku);
  }
  console.log(`pushed ${sku}`)
}

function clearLocation(locationToClear) {
  locationList[locationToClear] = 'x';
  console.log(`manually cleared ${locationToClear}`)
}


// debugging area
console.log(locationList);
