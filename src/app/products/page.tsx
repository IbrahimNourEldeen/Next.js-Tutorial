import Link from "next/link";

export default function Products() {
    const ID = 10;
    return <>
        <h1>all products here Products</h1>
        <Link href='products/1'>product 1</Link>    
        <Link href='products/2'>product 2</Link>
        <Link href='products/3'>product 3</Link>
        <Link href={`products/${ID}`}>product {ID}</Link>
    </>;
}