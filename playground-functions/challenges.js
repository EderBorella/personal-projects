// Challenge 1
function compareTrue(value1, value2) {
  if (value1 && value2 == true) {
    return true;
  }
  return false;
}

// Challenge 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Challenge 3
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Challenge 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Challenge 5
function footballPoints(wins, ties) {
  winsPoints = wins * 3;

  return winsPoints + ties;
}

// Challenge 6
function highestCount(numbers) {
  let hiNumber = numbers[0];
  let counter = 0;
  for (number of numbers) {
    if (number > hiNumber) {
      hiNumber = number;
    }
  }
  for (number2 of numbers) {
    if (number2 === hiNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Challenge 7
function catAndMouse(mouse, cat1, cat2) {
  function rule(a, b) {
    return Math.abs(a - b);
  }

  if (rule(cat1, mouse) > rule(cat2, mouse)) {
    return 'cat2';
  } if (rule(cat1, mouse) === rule(cat2, mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Challenge 8
function fizzBuzz(array) {
  let fizzBuzzBug = [];
  for (number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      fizzBuzzBug.push('fizzBuzz');
    } else if (number % 5 === 0) {
      fizzBuzzBug.push('buzz');
    } else if (number % 3 === 0) {
      fizzBuzzBug.push('fizz');
    } else {
      fizzBuzzBug.push('bug!');
    }
  }
  return fizzBuzzBug;
}

// Challenge 9
function encode(string) {
  return string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4')
    .replace(/u/g, '5');
}

function decode(string2) {
  return string2.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
}

// Challenge 10
function techList(array, nome) {
  let list = [];
  let orderedTechs = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (i of orderedTechs) {
    list.push({ tech: i, name: nome });
  }

  return list;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
