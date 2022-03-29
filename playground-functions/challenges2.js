// Challenge 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (countNumbers(phone) === true || valid(phone) == true) {
    return 'não é possível gerar um número de telefone com esses valores';
  };
  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;

  // Essa função me tomou mais tempo do que todo o resto do projeto somado.
  function countNumbers(phone) {
    let repeated = false;
    let ordered = [];
    for (i of phone) {
      ordered.push(i);
    }
    for (index = 0; index <= phone.length - 2; index += 1) {
      if (ordered.sort()[index] === ordered.sort()[index + 2]) {
        repeated = true;
      }
    }
    return repeated;
  }

  function valid(phone) {
    hiLow = false;
    for (index of phone) {
      if (index > 9) {
        hiLow = true;
      } else if (index < 0) {
        hiLow = true;
      }
    }
    return hiLow;
  }
}
// Challenge 12
function triangleCheck(lineA, lineB, lineC) {
  function isPossible(lineA, lineB, lineC) {
    let check1 = false;

    if (lineA + lineB < lineC) {
      check1 = true;
    } else if (lineC + lineB < lineA) {
      check1 = true;
    } else if (lineA + lineC < lineB) {
      check1 = true;
    }
    return check1;
  }

  function absolutPossible(lineA, lineB, lineC) {
    check2 = false;
    if (Math.abs(lineA - lineB) > lineC) {
      check2 = true;
    } else if (Math.abs(lineB - lineC) > lineA) {
      check2 = true;
    } else if (Math.abs(lineC - lineA) > lineB) {
      check2 = true;
    }
    return check2;
  }

  if (isPossible(lineA, lineB, lineC) === true) {
    return false;
  } if (absolutPossible(lineA, lineB, lineC) === true) {
    return false;
  }
  return true;
}

// Challenge 13
function hydrate(string) {
  let drinks = (string.match(/\d+/g));
  let agua = 0;
  for (index of drinks) {
    agua += parseInt(index);
  }
  return agua > 1 ? `${agua} copos de água` : `${agua} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
