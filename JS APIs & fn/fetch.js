

// https://sum-server.100xdevs.com/todos
// fetch("https://httpdump.app/dumps/1e734ba2-15fa-464a-9df9-a30a811fd517")

//using .then() syntax
// fetch("https://sum-server.100xdevs.com/todos")
// .then((response) => {
//     return response.json()
// })
// .then((json) => {
//     return console.log(json.todos)
// })

//using async-await syntax
// async function main() { 
//     const response = await fetch("https://sum-server.100xdevs.com/todos")
//     const json = await response.json()
//     console.log(json.todos)
// }
// main()

//fetch methods(post,get....)
async function main() { 
    const response = await fetch("https://httpdump.app/dumps/1e734ba2-15fa-464a-9df9-a30a811fd517?a=b",{
        method: "POST",
        headers: {
            authorization: "Bearer 123"
        }
    })
}
main()
