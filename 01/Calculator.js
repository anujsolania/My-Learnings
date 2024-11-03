class Calculator {
    constructor() {
        this.result = 0
    }
    add(num) {
        this.result += num
        return this
    }
    subtract(num) {
        this.result -= num
        return this
    }
    multiply(num) {
        this.result *= num
        return this
    }
    divide(num) {
        if (num == 0) {
            throw new Error("Invalid divisor");
        }
        this.result /= num
        return this
    }
    getResult() {
        return this.result
    }
    calculate(expression) {
        const cleanExpression = expression.split(" ").join("")
        const validExpression = "0123456789+-*/()."

        for (let char of cleanExpression) {
            if (!validExpression.includes(char)) {
                throw new Error("!!only no.s & operators are allowed 1");   
            }
        }
            this.result = eval(cleanExpression)
            return this.result

    }
}

const calc = new Calculator()

try {
    console.log("Result: "+ calc.add(5).multiply(2).divide(0).getResult())
} catch (err) {
    console.error(err.message)
}


const expression = '10 +   2 * a   (   6 - (4 + 1) / 2) + 7';

try {
    console.log("Result of expression: "+ calc.calculate(expression))
} catch (error) {
    console.error(error.message)
}
