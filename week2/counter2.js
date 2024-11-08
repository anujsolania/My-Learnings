

function print(count) {
    console.clear()
    console.log("count: " + count); // Logs the updated count
    setTimeout(() => {
        print(++count)
    },1000)
}

let count = 0
print(count)




