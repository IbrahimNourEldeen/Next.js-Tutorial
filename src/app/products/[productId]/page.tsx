import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>
}
export const generateMetadata = async({ params }: Props): Metadata => {
  const { productId } = await params;
  return {
    title: `Product ${productId} Details Page`,
  };
} 

export default async function ProductDetails({
  params,
}: Props) {
  const { productId } = await params;
  return (
    <h1>
      Product Details for product ID: {productId}
    </h1>
  );
}
