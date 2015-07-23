var sumAllBtn = document.getElementById('sum-all');

var countSelectedBtn = document.getElementById('count-selected');

var sumSelectedBtn = document.getElementById('sum-selected');

var averageAllBtn = document.getElementById('average-all');

var averageSelectedBtn = document.getElementById('average-selected');

var answerBtn = document.getElementById('answer-box');

var prices = document.getElementsByClassName('all-prices text-right');

sumAllBtn.onclick = function(prices) {
  //add all values together
  var pricesArray = prices[0][0].value;
  var sumAllTotal = sumAll(prices);
  //return answer to answerbox
  answerBtn.innerHTML = "sumAllTotal";
  return sumAllTotal;
};
