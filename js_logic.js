//Users can see the sum of all prices
var sumAll = function(options) {
  var total = 0;
    for (var i = 0; i < options.length; i++) {
    total += options[i];
    }
    return total;
  };
sumAll();

//Users can see the number of prices that are selected (the count)
var numPrices = function(options) {
  var count = 0;
    for (var i = 1; count < options.length; i++) {
    count += i;
  }
  return count;
};
numPrices();

//Users can see the sum of the selected prices
var selectedSum = function(selectedPrices) {
  var totalSelected = 0;
  for (i = 0; i < selectedPrices.length; i++) {
    totalSelected += selectedPrices[i];
    }
    return totalSelected;
  };
selectedSum();

//Users can see the average of all of the prices
var averagePrice = function(options) {
  var total = 0;
  var average = 0;
  for (var i = 0; i < options.length; i++) {
    total += options[i];
    average = total/options.length;
    }
  return average;
};
averagePrice();


//NAMES functions





























//Rewrite all functions in js/logic.js to not use any for or while loops.
