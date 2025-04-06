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

const stringToNumber = z.string().transform((val) => val.length);

type input = z.infer<typeof stringToNumber>  //default output

type output = z.output<typeof stringToNumber>
type input1 = z.input<typeof stringToNumber>

