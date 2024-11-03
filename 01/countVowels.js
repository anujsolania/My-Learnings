
function countVowels(str) {
    let count = 0
    let vow = ["a","e","i","o","u"]
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vow.length; j++) {
            if (str[i] == vow[j]) {
                count++
                // console.log(str[i])
            }
        }
    }
    console.log(count)
}

countVowels("hello anuj")

