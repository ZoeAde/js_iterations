var sumAllBtn = document.getElementById('sum-all');

var countSelectedBtn = document.getElementById('count-selected');

var sumSelectedBtn = document.getElementById('sum-selected');

var averageAllBtn = document.getElementById('average-all');

var averageSelectedBtn = document.getElementById('average-selected');

var answerBtn = document.getElementById('answer-box');

var prices = document.getElementsByTagName('option');

// //SumAll Values
var sumAllClick = sumAllBtn.addEventListener("click", function(){
var totalNums = document.getElementsByTagName("select")[0];
var totalAnswer = sumAll(totalNums);
answerBtn.innerHTML = totalAnswer;
});

//CountSelected
var countSelectedClick = countSelectedBtn.addEventListener("click", function(){
var selectedNums = document.getElementsByTagName("select")[0];
var getSelectedOptions = selectedNums.selectedOptions;
console.log(getSelectedOptions);
var selectedAnswer = countPrices(getSelectedOptions);
console.log(selectedAnswer);
  answerBtn.innerHTML = selectedAnswer;
});

//SumSelected
var sumSelectedClick = sumSelectedBtn.addEventListener("click", function(){
var selectedNums = document.getElementsByTagName("select")[0];
var getSelectedOptions = selectedNums.selectedOptions;
console.log(getSelectedOptions);
var selectedAnswer = selectedSum(getSelectedOptions);
console.log(selectedAnswer);
  answerBtn.innerHTML = selectedAnswer;
});

//AverageAll
var averageAllClick = averageAllBtn.addEventListener("click", function(){
var allNums = document.getElementsByTagName("select")[0];
console.log(allNums);
var averageAnswer = averagePrice(allNums);
console.log(averageAnswer);
  answerBtn.innerHTML = averageAnswer;
});

//AverageSelected
var averageSelectedClick = averageSelectedBtn.addEventListener("click", function(){
var selectedNums = document.getElementsByTagName("select")[0];
var getSelectedOptions = selectedNums.selectedOptions;
console.log(getSelectedOptions);
var selectedAnswer = averagePrice(getSelectedOptions);
console.log(selectedAnswer);
  answerBtn.innerHTML = selectedAnswer;
});
