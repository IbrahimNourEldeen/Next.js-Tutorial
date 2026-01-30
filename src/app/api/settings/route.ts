import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const { theme } = await request.json();
    
    const cookieStore = await cookies();
    cookieStore.set('user-theme',theme,
        // {
        // httpOnly:true,
        // secure:true,
        // maxAge:60*60*24*7
        // }
    )

    return NextResponse.json({"message":"saved"})
}
export async function GET() {
    const cookieStore = await cookies();
    const theme = cookieStore.get('user-theme')
    return NextResponse.json({currentTheme:theme?theme.value:"default"})
}