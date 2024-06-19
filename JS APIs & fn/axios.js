const axios = require("axios")

// async function main() {
//     const response = await axios.get("https://sum-server.100xdevs.com/todos")
//     console.log(response.data.todos)
// }
// main()


//axios methods(post,get,delete,put)
async function main() {
    const response = await axios.post("https://httpdump.app/dumps/1e734ba2-15fa-464a-9df9-a30a811fd517?a=b",{
        username: "anujsolania",
        password: "dabluuu"
    },{
        headers: {
            authorization: "Bearer 56373"
        }
    })
}
main()
