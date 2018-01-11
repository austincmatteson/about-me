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
var userName, currentAnswer, allAnswers, realAnswers, questionTries, i;
i = 0;
questionTries = 4;
allAnswers = [];
realAnswers = [];

//start questions
alert('Hey, welcome to my site. My name is Austin Matteson but you may already know that. In fact, let\'s find out just how much you do know about me.');
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
    alert('Please answer with a yes or no response.');
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
    alert('Please answer with a yes or no response.');
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
    alert('Please answer with a yes or no response.');
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
    alert('Please answer with a yes or no response.');
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
    alert('Please answer with a yes or no response.');
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

//question 6, multiple chance guess the number
while (i < questionTries) {
  currentAnswer = parseInt(prompt('Try and guess how many first cousins I have.'));
  console.log(currentAnswer);
  if (currentAnswer === 3) {
    alert('Correct, 3. And it only took you ' + (i + 1) + ' attempt(s).');
    allAnswers.push(currentAnswer);
    console.log(allAnswers);
    realAnswers.push('Correct');
    console.log(realAnswers);
    i = 0;
    break;
  } else if (currentAnswer > 3) {
    i++;
    alert('That is too high. You have ' + (questionTries - i) + ' attempt(s) left.');
  } else if (currentAnswer < 3) {
    i++;
    alert('That is too low. You have ' + (questionTries - i) + ' attempt(s) left.');
  } else {
    i++;
    alert('Answer with a number. You have ' + (questionTries - i) + ' attempt(s) left.');
  }
}
if (i === questionTries) {
  alert('Too many failed attempts. The correct answer was 3.');
  realAnswers.push('Incorrect');
  console.log(realAnswers);
  allAnswers.push('not 3');
  i = 0;
}

//user scorecard
var score = 0;
for (; i < realAnswers.length; i++) {
  if (realAnswers[i] === 'Correct'){
    score++;
  }
}
alert(userName + ', you\'re answers (' + allAnswers + ') mean you got ' + score + ' out of 7 right. Enjoy the site!');