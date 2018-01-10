'use strict';

/* 
define variables for use 
alert that questions will start 
ask question
must receive yes or no response
convert to checkable answer
save answer and if right
ask other questions
reveal how they did
*/

//define variables
var userName, currentAnswer, allAnswers, realAnswers, i;
i = 0;
allAnswers = [];
realAnswers = [];

//start questions
alert('Hey, welcome to my site. My name is Austin Matteson but you may already know that. In fact, let\'s find out just how much you do know about me with five yes or no questions.');
userName = prompt('But first, what is your name?');
console.log(userName);
alert('Great name, ' + userName + ', let\'s begin the test!');

//question 1
while (i < 1) {
  currentAnswer = prompt('Was I born in Washington?');
  currentAnswer = currentAnswer.toLowerCase();
  if (currentAnswer === 'y') {
    currentAnswer = 'yes';
  } else if (currentAnswer === 'n') {
    currentAnswer = 'no';
  }
  
  if (currentAnswer === 'yes' || currentAnswer === 'no') { 
    console.log(currentAnswer);
    allAnswers.push(currentAnswer);
    console.log(allAnswers);
    i++;
  } else {
    alert('Please answer with a yes or no response.')
  }
}
if (allAnswers[0] === 'no') {
  alert('Correct!');
  realAnswers.push('Correct');
  console.log(realAnswers);
} else {
  alert('Incorrect.');
  realAnswers.push('Incorrect');
  console.log(realAnswers);
}
i--;

//question 2
while (i < 1) {
  currentAnswer = prompt('Have I been skydiving?');
  currentAnswer = currentAnswer.toLowerCase();
  if (currentAnswer === 'y') {
    currentAnswer = 'yes';
  } else if (currentAnswer === 'n') {
    currentAnswer = 'no';
  }
  
  if (currentAnswer === 'yes' || currentAnswer === 'no') { 
    console.log(currentAnswer);
    allAnswers.push(currentAnswer);
    console.log(allAnswers);
    i++;
  } else {
    alert('Please answer with a yes or no response.')
  }
}
if (allAnswers[1] === 'no') {
  alert('Correct!');
  realAnswers.push('Correct');
  console.log(realAnswers);
} else {
  alert('Incorrect.');
  realAnswers.push('Incorrect');
  console.log(realAnswers);
}
i--;

//question 3
while (i < 1) {
  currentAnswer = prompt('Did I actually fall through the ice of a frozen pond?');
  currentAnswer = currentAnswer.toLowerCase();
  if (currentAnswer === 'y') {
    currentAnswer = 'yes';
  } else if (currentAnswer === 'n') {
    currentAnswer = 'no';
  }
  
  if (currentAnswer === 'yes' || currentAnswer === 'no') { 
    console.log(currentAnswer);
    allAnswers.push(currentAnswer);
    console.log(allAnswers);
    i++;
  } else {
    alert('Please answer with a yes or no response.')
  }
}
if (allAnswers[2] === 'yes') {
  alert('Correct!');
  realAnswers.push('Correct');
  console.log(realAnswers);
} else {
  alert('Incorrect.');
  realAnswers.push('Incorrect');
  console.log(realAnswers);
}
i--;

//question 4
while (i < 1) {
  currentAnswer = prompt('Is Queens of the Stone Age my favorite band?');
  currentAnswer = currentAnswer.toLowerCase();
  if (currentAnswer === 'y') {
    currentAnswer = 'yes';
  } else if (currentAnswer === 'n') {
    currentAnswer = 'no';
  }
  
  if (currentAnswer === 'yes' || currentAnswer === 'no') { 
    console.log(currentAnswer);
    allAnswers.push(currentAnswer);
    console.log(allAnswers);
    i++;
  } else {
    alert('Please answer with a yes or no response.')
  }
}
if (allAnswers[3] === 'yes') {
  alert('Correct!');
  realAnswers.push('Correct');
  console.log(realAnswers);
} else {
  alert('Incorrect.');
  realAnswers.push('Incorrect');
  console.log(realAnswers);
}
i--;

//question 5
while (i < 1) {
  currentAnswer = prompt('Do I watch Real Housewives shows?');
  currentAnswer = currentAnswer.toLowerCase();
  if (currentAnswer === 'y') {
    currentAnswer = 'yes';
  } else if (currentAnswer === 'n') {
    currentAnswer = 'no';
  }
  
  if (currentAnswer === 'yes' || currentAnswer === 'no') { 
    console.log(currentAnswer);
    allAnswers.push(currentAnswer);
    console.log(allAnswers);
    i++;
  } else {
    alert('Please answer with a yes or no response.')
  }
}
if (allAnswers[4] === 'yes') {
  alert('Correct!');
  realAnswers.push('Correct');
  console.log(realAnswers);
} else {
  alert('Incorrect.');
  realAnswers.push('Incorrect');
  console.log(realAnswers);
}
i--;

//user scorecard
var score = 0;
for (; i < 5; i++) {
  if (realAnswers[i] === 'Correct'){
    score++;
  }
}
alert(userName + ', you\'re answers of ' + allAnswers + ' mean you got ' + score + ' out of 5 right. Enjoy the site!');