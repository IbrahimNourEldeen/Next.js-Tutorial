export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
    const { productId } = await params;
  return (
    <h1>
      Product Details for product ID: {productId}
    </h1>
  );
}
