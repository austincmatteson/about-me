'use strict';

/* 
define variables for use 
alert that questions will start 
ask, save, covert to correct case, log, respond (5x)
*/

//define variable array to store inputted user answers to yes/no questions
var currentAnswer, allAnswers, i;
i = 0;
allAnswers = [];

//start questions
while (i < 1) {
  alert('Hey, welcome to my site. My name is Austin Matteson but you may already know that. In fact, let\'s find out just how much you do know about me with five yes or no questions.');
  currentAnswer = prompt('Was I born in Washington?');
  currentAnswer = currentAnswer.toLowerCase();
  if (currentAnswer === 'yes') {
    currentAnswer = 'y';
  } else if (currentAnswer === 'no') {
    currentAnswer = 'n';
  }
  
  if (currentAnswer === 'y' || currentAnswer === 'n') { 
    console.log(currentAnswer);
    allAnswers.push(currentAnswer);
    console.log(allAnswers);
    i++;
  } else {
    alert('Please answer with a yes or no response.')
  }
}
if (allAnswers[0] === 'y') {
  alert('Correct!');
} else {
  alert('Incorrect.');
}
i--;
