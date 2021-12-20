// Solar Panel Optimization
// Author: Ben Jensen
// License: MIT License
// Date Created 11/10/2021

// Edge case not addressed: Panels nested more than 2 levels
// Would we actually need more than 2? Potentially, but not right now.
// Improvement: Recursive for every level of nesting

var panelPositionsAvailable1 = [
  [96, 43],
  [61, 50],
  [
    [81, 47],
    [66, 39],
  ],
  [37, 27],
];

var panelPositionsAvailable2 = [
  [143, 34],
  [78, 39],
  [
    [75, 39],
    [60, 43],
  ],
  [
    [66, 39],
    [47, 46],
  ],
  [26, 50],
  [37, 27],
];

var availablePanels = [
  [66, 40],
  [65, 27],
  [42, 21],
];

compareDimensions = (dimension1, dimension2) => {
  return Math.floor(dimension1 / dimension2);
};

checkPanelFit = (dimension1, dimension2) => {
  if (dimension1 > 0 && dimension2 > 0 ){
    console.log("                                               ",dimension1, dimension2," Both are greater than 0")
    return true
  }
  return false
}

returnMax = (dimension1, dimension2) => {
  return Math.max(dimension1, dimension2)
}

pickLargerPanel = (maxDimension1, maxDimension2) => {
  let maxDimensionOverall = returnMax(maxDimension1, maxDimension2)
  if (maxDimensionOverall > 0){
    return maxDimensionOverall;
  }
  return "This panel won't fit in any orientation"
}

comparePanels = (panel1, panel2) => {
  console.log("              Compare Panels: ",panel1, panel2);

  // Compare all 4 dimenions
  let firstComparedDimensions = compareDimensions(panel1[0],panel2[0])
  let secondComparedDimensions = compareDimensions(panel1[1],panel2[1])
  let thirdComparedDimensions = compareDimensions(panel1[0],panel2[1])
  let fourthComparedDimensions = compareDimensions(panel1[1],panel2[0])

  // Display all 4 dimensions with comparison
  console.log("                                First Dimensions: ",panel1[0], panel2[0], "Comparison: ",firstComparedDimensions);
  console.log("                                Second Dimensions: ",panel1[1], panel2[1], "Comparison: ",secondComparedDimensions);
  console.log("                                Third Dimensions: ",panel1[0], panel2[1], "Comparison: ",thirdComparedDimensions);
  console.log("                                Fourth Dimensions: ",panel1[1], panel2[0], "Comparison: ",fourthComparedDimensions);


  // Check if Orientation 2 fits & Calculate the largest number of panels that can fit in Orientation 2
  let orientation1CheckPanelFit = checkPanelFit(firstComparedDimensions, secondComparedDimensions)
  if (orientation1CheckPanelFit) {
    var orientation1LargestDimension = returnMax(firstComparedDimensions, secondComparedDimensions)
  }
  else {
    var orientation1LargestDimension = "Orientation 1 does not fit with this panel"
  }
  console.log("                                                                        Orientation 1 Panel Fits?: ",orientation1CheckPanelFit)
  console.log("                                                                        Orientation 1 Largest Dimension: ",orientation1LargestDimension)
  
  // Check if Orientation 2 fits & Calculate the largest number of panels that can fit in Orientation 2
  let orientation2CheckPanelFit = checkPanelFit(firstComparedDimensions, secondComparedDimensions)
  if (orientation2CheckPanelFit) {
    var orientation2LargestDimension = returnMax(firstComparedDimensions, secondComparedDimensions)
  }
  else {
    var orientation2LargestDimension = "Orientation 2 does not fit with this panel"
  }
  console.log("                                                                        Orientation 2 Panel Fits?: ",orientation2CheckPanelFit)
  console.log("                                                                        Orientation 2 Largest Dimension: ",orientation2LargestDimension)
};

loopThroughPanelsAvailable = (currentPanelPosition, panelsAvailable) =>{
      for (var k = 0; k < panelsAvailable.length; k++) {
        comparePanels(currentPanelPosition,panelsAvailable[k])
      }
    // }
}

panelLoop = (panelPositionsArray, panelsAvailable) => {
  // Loop through each Panel Position
  for (var i = 0; i < panelPositionsArray.length; i++) {
    // If there is an extra panel in the position (indicating a comparison)
    if (panelPositionsArray[i][0][0]) {
      // Loop through the extra panels
      for (var j = 0; j < panelPositionsArray[i].length; j++) {
        console.log("           Panel Position Array Level 2: ", panelPositionsArray[i][j])
        // loopThroughPanelsAvailable(panelPositionsArray[i][j],panelsAvailable)
      }
    }
    // All positions who don't have nested panels
    else {
      console.log("Panel Position Array Level 1: ", panelPositionsArray[i])
      // loopThroughPanelsAvailable(panelPositionsArray[i],panelsAvailable)
    }
  }
};

console.log("Panel Positions Available 1\n")
panelLoop(panelPositionsAvailable1, availablePanels);
console.log("\n\nPanel Positions Available 2\n")
panelLoop(panelPositionsAvailable2, availablePanels);

console.log(compareDimensions(143, 42));

