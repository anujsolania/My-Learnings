
function print(obj) {
    let n = obj.length
    for (let i = 0; i < n; i++) {
        if (obj[i].gender != "male") {
            console.log(obj[i].name)
        }
    }
}

let obj = [{
    name: "anuj",
    gender: "male"
}, {
    name: "jai",
    gender: "male"
}, {
    name: "shalini",
    gender: "female"
}];

print(obj)