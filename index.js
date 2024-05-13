function isPalindrome(word) {
  // Initialize two pointers, one at the start of the word and one at the end
  let left = 0;
  let right = word.length - 1;
  
  // Loop while the left pointer is less than the right pointer
  while (left < right) {
    // If characters at the left and right pointers are not equal, return false
    if (word[left] !== word[right]) {
      return false;
    }
    // Move the left pointer one step to the right and the right pointer one step to the left
    left++;
    right--;
  }
  // If the loop completes without finding any unequal characters, return true
  return true;
}

/* 
  Add your pseudocode here
  1. Initialize two pointers, one at the start of the word (left pointer) and one at the end (right pointer).
  2. Loop while the left pointer is less than the right pointer.
  3. Inside the loop, compare the characters at the left and right pointers.
  4. If they are not equal, return false.
  5. If they are equal, move the left pointer one step to the right and the right pointer one step to the left.
  6. If the loop completes without finding any unequal characters, return true.
*/

/*
  Add written explanation of your solution here:
  This function checks if a given word is a palindrome by comparing characters from the beginning and the end of the word. It iterates through the word using two pointers, moving towards the center of the word. If at any point the characters at the current positions of the pointers are not equal, the function returns false, indicating that the word is not a palindrome. If the loop completes without finding any unequal characters, the function returns true, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
