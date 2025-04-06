import z from "zod"

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.number()
})

type User = z.infer<typeof schema>

const user: User = {
    name: "anuj",
    email: "anuj@gnakcn",
    age: 30
}