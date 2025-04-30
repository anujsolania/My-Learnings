
import { NextRequest, NextResponse } from "next/server"
import  prisma  from "../../dbglobal";


export async function GET() {
    const user = await prisma.user.findFirst()
    
    return NextResponse.json({
        user
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    const user = await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return NextResponse.json({
        mssg: `user created ${user.id}`,
        body
    })
}