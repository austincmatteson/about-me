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
var userName, currentAnswer, allAnswers, realAnswers, questionTries, cousins, countries, i;
i = 0;
questionTries = 4;
cousins = 3;
allAnswers = [];
realAnswers = [];
countries = ['canada', 'mexico', 'portugal'];

function person() {
  userName = prompt('But first, what is your name?');
  console.log('The user entered', userName);
  alert('Great name, ' + userName + ', let\'s begin the test!');
}

//question 1
function placeOfBirth() {
  while (i < 1) {
    currentAnswer = prompt('Was I born in Washington?');
    currentAnswer = currentAnswer.toLowerCase();
    if (currentAnswer === 'y') {
      currentAnswer = 'yes';
    } else if (currentAnswer === 'n') {
      currentAnswer = 'no';
    }
    if (currentAnswer === 'yes' || currentAnswer === 'no') {
      console.log('The user entered', currentAnswer);
      allAnswers.push(currentAnswer);
      console.log('Current answer history', allAnswers);
      i++;
    } else {
      alert('Please answer with a yes or no response.');
    }
  }
  if (allAnswers[0] === 'no') {
    alert('Correct!');
    realAnswers.push('Correct');
    console.log('Current user grade', realAnswers);
  } else {
    alert('Incorrect.');
    realAnswers.push('Incorrect');
    console.log('Current user grade', realAnswers);
  }
  i--;
}

//question 2
function skydiving() {
  while (i < 1) {
    currentAnswer = prompt('Have I been skydiving?');
    currentAnswer = currentAnswer.toLowerCase();
    if (currentAnswer === 'y') {
      currentAnswer = 'yes';
    } else if (currentAnswer === 'n') {
      currentAnswer = 'no';
    }
    if (currentAnswer === 'yes' || currentAnswer === 'no') {
      console.log('The user entered', currentAnswer);
      allAnswers.push(currentAnswer);
      console.log('Current answer history', allAnswers);
      i++;
    } else {
      alert('Please answer with a yes or no response.');
    }
  }
  if (allAnswers[1] === 'no') {
    alert('Correct!');
    realAnswers.push('Correct');
    console.log('Current user grade', realAnswers);
  } else {
    alert('Incorrect.');
    realAnswers.push('Incorrect');
    console.log('Current user grade', realAnswers);
  }
  i--;
}

//question 3
function pond() {
  while (i < 1) {
    currentAnswer = prompt('Did I actually fall through the ice of a frozen pond?');
    currentAnswer = currentAnswer.toLowerCase();
    if (currentAnswer === 'y') {
      currentAnswer = 'yes';
    } else if (currentAnswer === 'n') {
      currentAnswer = 'no';
    }
    if (currentAnswer === 'yes' || currentAnswer === 'no') {
      console.log('The user entered', currentAnswer);
      allAnswers.push(currentAnswer);
      console.log('Current answer history', allAnswers);
      i++;
    } else {
      alert('Please answer with a yes or no response.');
    }
  }
  if (allAnswers[2] === 'yes') {
    alert('Correct!');
    realAnswers.push('Correct');
    console.log('Current user grade', realAnswers);
  } else {
    alert('Incorrect.');
    realAnswers.push('Incorrect');
    console.log('Current user grade', realAnswers);
  }
  i--;
}

//question 4
function favBand() {
  while (i < 1) {
    currentAnswer = prompt('Is Queens of the Stone Age my favorite band?');
    currentAnswer = currentAnswer.toLowerCase();
    if (currentAnswer === 'y') {
      currentAnswer = 'yes';
    } else if (currentAnswer === 'n') {
      currentAnswer = 'no';
    }
    if (currentAnswer === 'yes' || currentAnswer === 'no') {
      console.log('The user entered', currentAnswer);
      allAnswers.push(currentAnswer);
      console.log('Current answer history', allAnswers);
      i++;
    } else {
      alert('Please answer with a yes or no response.');
    }
  }
  if (allAnswers[3] === 'yes') {
    alert('Correct!');
    realAnswers.push('Correct');
    console.log('Current user grade', realAnswers);
  } else {
    alert('Incorrect.');
    realAnswers.push('Incorrect');
    console.log('Current user grade', realAnswers);
  }
  i--;
}

//question 5
function bravo() {
  while (i < 1) {
    currentAnswer = prompt('Do I watch Real Housewives shows?');
    currentAnswer = currentAnswer.toLowerCase();
    if (currentAnswer === 'y') {
      currentAnswer = 'yes';
    } else if (currentAnswer === 'n') {
      currentAnswer = 'no';
    }
    if (currentAnswer === 'yes' || currentAnswer === 'no') {
      console.log('The user entered', currentAnswer);
      allAnswers.push(currentAnswer);
      console.log('Current answer history', allAnswers);
      i++;
    } else {
      alert('Please answer with a yes or no response.');
    }
  }
  if (allAnswers[4] === 'yes') {
    alert('Correct!');
    realAnswers.push('Correct');
    console.log('Current user grade', realAnswers);
  } else {
    alert('Incorrect.');
    realAnswers.push('Incorrect');
    console.log('Current user grade', realAnswers);
  }
  i--;
}

//question 6, multiple chance guess the number
function relatives() {
  while (i < questionTries) {
    currentAnswer = parseInt(prompt('Try and guess how many first cousins I have.'));
    console.log('The user entered', currentAnswer);
    if (currentAnswer === cousins) {
      alert('Correct, 3. And it only took you ' + (i + 1) + ' attempt(s).');
      allAnswers.push(currentAnswer);
      console.log('Current answer history', allAnswers);
      realAnswers.push('Correct');
      console.log('Current user grade', realAnswers);
      i = 0;
      break;
    } else if (currentAnswer > cousins) {
      i++;
      alert('That is too high. You have ' + (questionTries - i) + ' attempt(s) left.');
    } else if (currentAnswer < cousins) {
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
    console.log('Current user grade', realAnswers);
    allAnswers.push('not 3');
    console.log('Current answer history', allAnswers);
    i = 0;
  }
}

//question 7
function travel() {
  questionTries = 6;
  while (i < questionTries) {
    var x = 0;
    currentAnswer = prompt('Name a country I\'ve been to that is not the United States. You have six tries for this one.');
    currentAnswer = currentAnswer.toLowerCase();
    console.log('The user entered', currentAnswer);
    for (x = 0; x < countries.length; x++) {
      if (currentAnswer === countries[x]) {
        alert('Correct!');
        allAnswers.push(currentAnswer);
        console.log('Current answer history', allAnswers);
        realAnswers.push('Correct');
        console.log('Current user grade', realAnswers);
        break;
      }
    }
    if (x < countries.length) {
      break;
    }
    i++;
    alert('Unfortunately not. You have ' + (questionTries - i) + ' attempt(s) left.');
    if (i === questionTries) {
      allAnswers.push('not canada, mexico, or portugal');
      console.log('Current answer history', allAnswers);
      realAnswers.push('Incorrect');
      console.log('Current user grade', realAnswers);
    }
  }
  alert('I have been to the following: ' + countries);
  i = 0;
}

//user scorecard
function scoreCard() {
  var score = 0;
  for (; i < realAnswers.length; i++) {
    if (realAnswers[i] === 'Correct') {
      score++;
    }
  }
  alert(userName + ', you\'re answers (' + allAnswers + ') mean you got ' + score + ' out of 7 right. Enjoy the site!');
}

alert('Hey, welcome to my site. My name is Austin Matteson but you may already know that. In fact, let\'s find out just how much you do know about me.');

person();
placeOfBirth();
skydiving();
pond();
favBand();
bravo();
relatives();
travel();
scoreCard();
