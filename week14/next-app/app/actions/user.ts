"use server"

import { NextResponse } from "next/server"
import prisma from "../dbglobal"

export async function signup(username: string, password: string) {
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    })

    return `user created ${user.id}`
}