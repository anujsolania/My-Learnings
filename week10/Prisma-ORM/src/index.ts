import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string,email: string,password:string) {
    const res = await prisma.users.create({
        data: {
            username,
            email,
            password
        }
    })
    console.log(res)
}

interface update {
    username: string
    password: string
}

async function updateUser(email: string,{username,password}: update) {
    const res = await prisma.users.update({
        where: {email},
        data: {
            username,
            password
        }
    })
    console.log(res)
}

async function getUser(username: string) {
    const res = await prisma.users.findFirst({
        where: {username}
    })
    console.log(res)
}

// insertUser("anuj","anuj@gmail.com","haleluya")
getUser("jaiii")