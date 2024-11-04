let arr = [1,2,3,4,5,6,7]

function myfun(n) {
    if (n%2 != 0) {
        return n
    }
}

// let result = arr.filter(myfun)
// console.log(result)

// using arrow fn
let result = arr.filter(n => n%2 == 0)
console.log(result)