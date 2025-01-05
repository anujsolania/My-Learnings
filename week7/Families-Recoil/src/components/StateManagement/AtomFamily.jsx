import { TODOS } from "../TODOS"
import { atomFamily } from "recoil";

export const TodosAtomFamily = atomFamily({
    key: "TodosAtomFamily",
    default: (id) => {
        return TODOS.find((todo) => todo.id === id)    
    }
})