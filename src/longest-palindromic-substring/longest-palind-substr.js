/**
 * @param {string} s
 * @return {string}
 */

/*
  Loop string and try to get the longest palindrome on the current character
  If s.charAt(i-1) === s.charAt(i+1), s.substring(i-1, i+2) is palindrome
*/

var longestPalindrome = function (s) {
  const extendPal = (s, m, n) => {
    while (m >= 0 && n < s.length && s.charAt(m) === s.charAt(n)) {
      m--;
      n++;
    }
    return s.substring(m + 1, n);
  };

  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    const str = extendPal(s, i, i);
    const str2 = extendPal(s, i, i + 1);
    const pal = str.length > str2.length ? str : str2;
    maxStr = pal.length > maxStr.length ? pal : maxStr;
  }

  return maxStr;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("bbbbbbbb"));
console.log(longestPalindrome("aacabdkacaa"));
