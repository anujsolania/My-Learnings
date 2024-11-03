function isPalindrome(str) {
    let str1 = str.toLowerCase()
    let n = str1.length
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[n-1-i] == str1[i]) {
            count++
        }
        else {
            console.log("Not Palindrome")
            break
        }
        if (count == str1.length) {
            console.log("Palindrome")
        }
    }
  }

  isPalindrome("maDaM")
  