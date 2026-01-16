export default async function DocsPage({
    params,
}:{
    params: Promise<{slug:string[]}>
}){
    const {slug} = await params;
    return(<>
        <h1>Docs Page for slug: {slug ? slug.join('/') : 'home'}</h1>
    </>)
}