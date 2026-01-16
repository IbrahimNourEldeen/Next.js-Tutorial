export default async function ReviewDetails({
    params,
}:{
    params: Promise<{reviewId:string, productId:string}>
}) {
    const {reviewId,productId} = await params;
    return <h1>revew {reviewId} for  product {productId}</h1>;
}