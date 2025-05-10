import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, {params} : {params : {authroutes : string[]}}) {
    return NextResponse.json({params: params.authroutes})
}