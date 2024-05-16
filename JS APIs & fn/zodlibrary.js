const zod = require("zod")

function validateinput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj)
    console.log(response)
}
    validateinput({
        email: "anujsolania@mail.cmo",
        password: "17087018018170"
})

 