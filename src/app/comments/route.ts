import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query')
    const filterd = query?comments.filter(comment=>comment.text.includes(query)):comments
    return Response.json(filterd)    
}
export async function POST(request:Request){
    const comment = await request.json();
    const new_comment = {
        id:comments.length+1,
        text : comment.text
    }
    return new Response(
        JSON.stringify(new_comment),{
        headers:{'Content_Type':'application/json'},
        status:201
        }
    )    
}
