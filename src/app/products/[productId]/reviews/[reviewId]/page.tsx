import { notFound } from "next/navigation";
export default async function ReviewDetails({
    params,
}:{
    params: Promise<{reviewId:string, productId:string}>
}) {
    const {reviewId,productId} = await params;
    if(reviewId === '0'){
        notFound();
    }
    return <h1>revew {reviewId} for  product {productId}</h1>;
}