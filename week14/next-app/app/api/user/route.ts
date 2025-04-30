import { NextRequest, NextResponse } from "next/server"

export function GET() {
    return NextResponse.json({
        name: "anujjjj",
        email: "anuj@gmail.com"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json()

    return NextResponse.json({
        mssg: "routee hittt",
        body
    })
}