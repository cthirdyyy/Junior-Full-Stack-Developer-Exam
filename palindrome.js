// TODO: rename this file from '.txt' to '.js'

function isPalindrome(str) {
    // Check input if string.
    if (typeof str !== "string") {
      console.log(`The given value: "${str}" is not a string! The expected data type of the value is string.`);
      return false;
    }
  
    // Remove all non-alphanumeric characters and convert the string to lowercase.
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    // Get length of the given string.
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
  
  const string = "madam";
  
  for (const str of stringsToCheck) {
    if (isPalindrome(str)) {
      const reversedString = str.split('').reverse().join('');
      console.log(`The given string: '${str}' is an example of a palindrome, the reversed value is: '${reversedString}'`);
    } else {
      console.log(`The given string: '${str}' is not an example of a palindrome`);
    }
  }
  