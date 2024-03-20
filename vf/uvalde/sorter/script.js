// Input Core Classic UPC list

import { UPCList } from "./upc-list";

let categoriesList = {
  1: "Core Classic",
  2: "KD Lifestyle Classics Boots",
  3: "KD Lifestyle Classics Plus Shoes",
  4: "KD Lifestyle Classics Sandals",
  5: "KD Lifestyle Classics Shoes",
  6: "MN Action Sports Surf Sandals",
  7: "MN Action Sports Surf Shoes",
  8: "MN Boardshorts",
  9: "MN Jackets",
  10: "MN Lifestyle Classics Plus Shoes",
  11: "MN Lifestyle Classics Shoes",
  12: "MN LS T-Shirts",
  13: "MN LS Woven",
  14: "MN Pants",
  15: "MN Shorts",
  16: "MN SS Knits",
  17: "MN SS T-Shirts",
  18: "MN Sweatshirts",
  19: "WM Action Sports Surf Sandals",
  20: "WM Action Sports Surf Shoes",
  21: "WM Lifestyle Classics Plus Shoes",
  22: "WM Lifestyle Classics Shoes",
};

// ---------- PROGRAM START. DO NOT CHANGE BELOW ----------

// Initital settings

let count = 0;

document.getElementById("settingsDisplay").innerHTML = ""; // Display settings
document.getElementById("input").focus(); //Initial focus

// When "Enter" is pressed
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    if (document.getElementById("input").value != "") {
      getGroupLocation(Number(document.getElementById("input").value));
    }
  }
});

// When UPC is scanned
function getGroupLocation(inputValue) {
  let group;
  let backgroundColor;
  document.getElementById("skuDisplay").innerHTML = inputValue;

  // Get group and location
  if (UPCList[inputValue] != undefined) {
    group = UPCList[inputValue];
    groupLabel = `GROUP - ${categoriesList[group]}`;
    backgroundColor = "limegreen";
  } else {
    group = "OTHER";
    groupLabel = "GROUP";
    backgroundColor = "white";
  }

  count += 1;

  document.getElementById("group").innerHTML = group;
  document.getElementById("group-label").innerHTML = groupLabel;
  document.getElementById("counter").innerHTML = `Count: ${count}`;
  document.body.style.backgroundColor = backgroundColor;

  // Reset input
  document.getElementById("input").value = "";
}
