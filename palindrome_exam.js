// TODO: rename this file from '.txt' to '.js'

function isPalindrome(str) {
  // Check input if string.
  if (typeof str !== "string") {
    console.log(`The given string: "${str}" is not a string! The expected data type of the value is string.`);
    return false;
  }

  // Get length of given string.
  const len = str.length;

  // compare the first and last character.
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  // If the string is a palindrome
  return true;
}

// Call the function and pass an argument.
const str = 123;

// Check if the string is a palindrome.
if (isPalindrome(str)) {
  console.log(`The given string: "${str}" is an example of a palindrome.`);
} else {
  console.log(`The given string: "${str}" is not an example of a palindrome.`);
}

