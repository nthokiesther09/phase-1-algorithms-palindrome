function isPalindrome(word) {
  // Write your algorithm here
  const b = word
  const c = b.split('')
  const d = c.reverse()
  const e = d.join('')
  console.log(e)

  return word===e
//   if(word===e){
//     return true
//   }else{
//     return false
//   }
}

console.log(isPalindrome("word"))


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
