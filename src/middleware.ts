import { NextRequest, NextResponse } from "next/server";

export async function middleware(request:NextRequest){
    const session = request.cookies.get('session')
    if(request.nextUrl.pathname.startsWith('/profile')){
        if(!session){
            return NextResponse.redirect(new URL('/login', request.url))        
        }
    }
    return NextResponse.next();
}
export const config = {
    matcher:['/profile/:path*']
}