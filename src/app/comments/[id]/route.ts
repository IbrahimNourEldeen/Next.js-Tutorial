import { comments } from "../data";

export async function GET(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const comment = comments.find(cmnt=>cmnt.id===parseInt(id))
    return Response.json(comment)
}

export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const {text} = await request.json();
    const index = comments.findIndex(cmnt=>cmnt.id===parseInt(id))
    comments[index].text=text
    return Response.json(comments[index])
}

export async function DELETE(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const new_comments = comments.filter(com=>com.id!==parseInt(id))
    return Response.json(new_comments)
}