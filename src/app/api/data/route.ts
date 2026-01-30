import { headers } from "next/headers";

export async function GET(request:Request){
    const headerList = await headers()
    const token = headerList.get('authorization')
    if (!token || token!=='my-secret-token'){
        return new Response(JSON.stringify({"message":"unauthorized user"}),{
            status:401,
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    return new Response(JSON.stringify({"message":"welcome authorized user"}),{
        status:200,
        headers:{
            'Content-Type':'application/json',
            'X-Custom-Header': 'NextJs-Is-Awesome',
        }
    })
}
