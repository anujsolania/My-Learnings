class Todo {
    constructor() {
        this.arr = []
    }
    add(todo) {
        this.arr.push(todo)
        return this
    }
    remove(indexOfTodo) {
        this.arr.splice(indexOfTodo,1)
        return this
    }
    update(index,updatedTodo) {
        this.arr[index] = updatedTodo
        return this
    }
    get(indexOfTodo) {
        console.log(this.arr[indexOfTodo])
        return this
    }
    getAll() {
     console.log(this.arr)
    }
    clear() {
        this.arr = []
        return this
    }
}

const t1 = new Todo()
t1.add("go to Gym").add("do DSA").update(1,"do webd")
// t1.remove(0)
// t1.get(0)
// t1.clear()
// t1.getAll()
