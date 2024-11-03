function isanagram(str1, str2) {
    let str3 = str1.split("").sort().join("")
    let str4 = str2.split("").sort().join("")
    if (str3 == str4) {
        return true
    }
    else {
        return false
    }
}

const ans = isanagram("cork","rock" )
console.log(ans)

