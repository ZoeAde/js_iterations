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




var sumButtonClick = document.getElementsByTagName("sumSelectedBtn").addEventListener("click", selectedSum(select))
selectedNums = document,getElementsByTagName("select")[0].selectedOptions;
sumSelectAnswer = answerbox.innerhtm(selectedSum(selectedSums)








//SumSelect Values
function countButtonClick() {
  answerBtn.innerHTML = numPrices(prices);
}
countSelectedBtn.addEventListener("click", numPrices(prices));
countSelectedBtn.onclick = countButtonClick;

function sumSelectedClick() {
  answerBtn.innerHTML = selectedSum(prices);
}
sumSelectedBtn.addEventListener("click", selectedSum(prices));
sumSelectedBtn.onclick = sumSelectedClick;

