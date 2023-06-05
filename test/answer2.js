
// Answer 2
function uniqChar(s) {
    const charCount = {};
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char] === 1) {
        return i;
      }
    }
  
    return -1;
  }
  
  console.log(uniqChar("leetcode"));      // 0
  console.log(uniqChar("loveleetcode"));  // 2
  console.log(uniqChar("aabb"));           // -1
  