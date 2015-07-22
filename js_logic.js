//Users can see the sum of all prices
var sumAll = function(options) {
  var total = 0;
    while (total < options.length) {
    total += options;
    }
    return total;
  };
sumAll();

//Users can see the number of prices that are selected (the count)
var numPrices = function(options) {
  var count = 0
    while (count < options.length) {
    count += options;
  }
  return count;
};
numPrices();

//Users can see the sum of the selected prices
var selectedSum = function(options) {
  var totalSelected = 0;
  while (i < options.length) {
    totalSelected += options;
    }
    return totalSelected;
  };
selectedSum();

//Users can see the average of all of the prices
var averagePrice = function(options) {
  var total = 0;
  var average = 0;
  while (i < options.length) {
    total += options;
    average = total/options.length;
    }
  return average;
};
averagePrice();


//Rewrite all functions in js/logic.js to not use any for or while loops.
