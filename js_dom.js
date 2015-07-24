var sumAllBtn = document.getElementById('sum-all');

var countSelectedBtn = document.getElementById('count-selected');

var sumSelectedBtn = document.getElementById('sum-selected');

var averageAllBtn = document.getElementById('average-all');

var averageSelectedBtn = document.getElementById('average-selected');

var answerBtn = document.getElementById('answer-box');

var prices = document.getElementsByTagName('option');

//SumAll Values
function sumButtonClick() {
  answerBtn.innerHTML = sumAll(prices);
}
sumAllBtn.addEventListener("click", sumAll(prices));
sumAllBtn.onclick = sumButtonClick;


//SumSelect Values
function countButtonClick() {
  answerBtn.innerHTML = numPrices(prices);
}
countSelectedBtn.addEventListener("click", numPrices(prices);
sumAllBtn.onclick = countButtonClick;



var numPrices = function(options) {
  var count = 0;
    for (var i = 1; count < options.length; i++) {
    count += i;
  }
  return count;
};
