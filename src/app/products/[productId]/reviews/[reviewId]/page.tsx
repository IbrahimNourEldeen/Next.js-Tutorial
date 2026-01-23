import { notFound } from "next/navigation";

function gerRandomInt(count:number){
    return Math.floor(Math.random()*count);
}

export default async function ReviewDetails({
    params,
}:{
    params: Promise<{reviewId:string, productId:string}>
}) {
    const {reviewId,productId} = await params;
    const random = gerRandomInt(2);

    if (random == 1) throw new Error('error loading review');

    if(reviewId >= '1000'){
        notFound();
    }

    return <h1>revew {reviewId} for  product {productId}</h1>;
}