class car {
    constructor(name,year) {
        this.name = name
        this.year = year
    }
    age(year) {
        let date = new Date()
        return date.getFullYear() - this.year
    }
}

const car1 = new car("thar","2014")
const car2 = new car("scorpio","3627")

console.log(car1)
console.log("This is "+ car1.age() + " years old")

