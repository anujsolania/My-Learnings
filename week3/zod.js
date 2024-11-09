const z = require("zod")

const zodschema = z.object({
    name: z.string(),
    age: z.number().min(18)
})

const user = {
    name: "anuj",
    age: 19
}

const result = zodschema.safeParse(user)
if (result.success) {
    console.log("zod VALID")
} else {
    console.error("zod INVALID")
}