function reverseNumbers(number) {

    number += ''; // alternative .toString() method
    
    let negative = false;
    let reverseString = [];
    let reverseNumber = '';

    for (let index = number.length-1, i = 0; index >= 0; index--, i++) { // alternative .split('').reverse() method
        reverseString[i] = number[index];
    }

    if (reverseString[reverseString.length-1] === '-') { // is negative number
        reverseString[reverseString.length-1] = '';
        negative = true;
    }

    for (let i = 0; i < reverseString.length; i++) { // alternative .join('') method
        reverseNumber += reverseString[i];
    }

    reverseNumber = +reverseNumber; // alternative .parseInt() method

    if (negative) { 
        reverseNumber = -reverseNumber; 
    }

    return reverseNumber;
}

reverseNumbers(123);
