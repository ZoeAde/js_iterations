var sumAllBtn = document.getElementById('sum-all');

var countSelectedBtn = document.getElementById('count-selected');

var sumSelectedBtn = document.getElementById('sum-selected');

var averageAllBtn = document.getElementById('average-all');

var averageSelectedBtn = document.getElementById('average-selected');

var answerBtn = document.getElementById('answer-box');

var prices = document.getElementsByTagName('option');

// // //SumAll Values
// var sumAllClick = sumAllBtn.addEventListener("click", function(){
// var totalNums = document.getElementsByTagName("select")[0];
// var totalAnswer = sumAll(totalNums);
// answerBtn.innerHTML = totalAnswer;
// });

// //CountSelected
// var countSelectedClick = countSelectedBtn.addEventListener("click", function(){
// var selectedNums = document.getElementsByTagName("select")[0];
// var getSelectedOptions = selectedNums.selectedOptions;
// console.log(getSelectedOptions);
// var selectedAnswer = countPrices(getSelectedOptions);
// console.log(selectedAnswer);
//   answerBtn.innerHTML = selectedAnswer;
// });

// //SumSelected
// var sumSelectedClick = sumSelectedBtn.addEventListener("click", function(){
// var selectedNums = document.getElementsByTagName("select")[0];
// var getSelectedOptions = selectedNums.selectedOptions;
// console.log(getSelectedOptions);
// var selectedAnswer = selectedSum(getSelectedOptions);
// console.log(selectedAnswer);
//   answerBtn.innerHTML = selectedAnswer;
// });

// //AverageAll
// var averageAllClick = averageAllBtn.addEventListener("click", function(){
// var allNums = document.getElementsByTagName("select")[0];
// console.log(allNums);
// var averageAnswer = averagePrice(allNums);
// console.log(averageAnswer);
//   answerBtn.innerHTML = averageAnswer;
// });

// //AverageSelected
// var averageSelectedClick = averageSelectedBtn.addEventListener("click", function(){
// var selectedNums = document.getElementsByTagName("select")[0];
// var getSelectedOptions = selectedNums.selectedOptions;
// console.log(getSelectedOptions);
// var selectedAnswer = averagePrice(getSelectedOptions);
// console.log(selectedAnswer);
//   answerBtn.innerHTML = selectedAnswer;
// });




/////////////////////////NAMES//////////////////////

var printAllBtn = document.getElementById('all-names');

var printFirstBtn = document.getElementById('first-names');

var printLastBtn = document.getElementById('last-names');

var printLengthBtn = document.getElementById('names-with-lengths');






//Converting Names To Array
var textAreaNames= document.getElementsByTagName("textarea");
var innerTextArea = textAreaNames[0].value;
var textArray = innerTextArea.split("\n");


//Printing all names
var printAllClick = printAllBtn.addEventListener("click", function() {
  for (var i = 0; i < textArray.length; i++) {
    var answerUL = document.getElementById('answer-ul');
    var li = document.createElement("li");
    answerUL.appendChild(li).innerHTML = textArray[i];
  }
});

//Printing First Name
var printFirstClick = printFirstBtn.addEventListener("click", function() {

  var firstWords = [];
  for (var i = 0; i < textArray.length; i++) {
    var textArrayed = textArray[i];
    var firstWord = textArrayed.substr(0, textArrayed.indexOf(" "));
    firstWords.push(firstWord);

    var answerUL = document.getElementById('answer-ul');
    var li = document.createElement("li");
    answerUL.appendChild(li).innerHTML = firstWords[i];
}
});

//Printing Last Name
var printLastClick = printLastBtn.addEventListener("click", function() {

  var lastWords = [];
  for (var i = 0; i < textArray.length; i++) {
    var textArrayed = textArray[i];
    var nameSplit = textArrayed.split(" ");
    var lastWord = nameSplit[1];
    lastWords.push(lastWord);
    var answerUL = document.getElementById('answer-ul');
    var li = document.createElement("li");
    answerUL.appendChild(li).innerHTML = lastWords[i];
}
});

//Printing Name Lengths
var printLengthClick = printLengthBtn.addEventListener("click", function() {
  for (var i = 0; i < textArray.length; i++) {
    var fullName = textArray[i];
    var nameNoSpace = fullName.replace(/\s/g, "");
    var nameLength = nameNoSpace.length;
    var fullAndLength = [];
    fullAndLength.push(fullName, nameLength);
    var answerUL = document.getElementById('answer-ul');
    var li = document.createElement("li");
    answerUL.appendChild(li).innerHTML = fullAndLength;
  }
});






