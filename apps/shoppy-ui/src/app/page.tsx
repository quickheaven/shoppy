import getProducts from "./products/actions/get-products";
import CreateProductFab from "./products/create-product/create-product-fab";
import Products from "./products/products";

export default async function Home() {
  const products = await getProducts();

  console.log({ products });
  return (
    <>
      <Products />
      <CreateProductFab />
    </>
  );
}
