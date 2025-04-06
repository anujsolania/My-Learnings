//PICK
interface User {
    name: string,
    age: number,
    email: string
}

type userProfile = Pick<User,"name"| "email">

function userprofile(user1: userProfile) {
    console.log(`name: ${user1.name} email: ${user1.email}`)
}
const user1 = {
    name: "anuj",
    age: 59,
    email: "anuj@gmail.com"
}
const user2 = {
    name: "bablu",
    age:56,
    email: "bablu@gmail.com"
}
userprofile(user1)

//PARTIAL 
type optional = Partial<User>
const user3 = {
    name: "dabluuuu"
}
function printname(user: optional) {
    console.log(user.name)
}
printname(user3)

//READ-ONLY
interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
//config.apiKey = 'newkey' //not possible

//RECORDS 
interface User1 {
    id : string,
    name: string
}
const user: Record<string,User1> = {
    "a": {id: "vhsv", name: "anuj"},
    "b": {id: "vhfev", name: "anujuwebf"}
}

//MAPS 
const userMap = new Map<string,User1>()
userMap.set("c",{id : "hello", name: "bjdhvbsdjs"}) 
userMap.set("d",{id : "heldwvdlo", name: "bjdhvbdsvdsvssdjs"}) 

console.log(userMap.get("c"))

//EXCLUDE 
type event = "click" | "scroll" | "mousemove"
type excludeEvent = Exclude<event,"mousemove">

function eventfn(event: excludeEvent) {
    console.log(event)
}
// eventfn("mousemove")  //Not possible
eventfn("click")  


