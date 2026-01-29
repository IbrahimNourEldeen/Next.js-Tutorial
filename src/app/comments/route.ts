import { comments } from "./data";

export async function GET(){
    return Response.json(comments)    
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
