
import ProductsForm from "./components/productForm";

const ProductPage = async ({
  params,
}: {
  params:Promise <{
    productId: string;
    
  }>;
}) => {
  const {productId}=await params
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productId}`,{cache:"no-store"});
  const project= await data.json()



  return (
    <div className="flex-col w-[80%] mx-auto">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsForm
         initialData={project[0]} />
      </div>
    </div>
  );
};
export default ProductPage;
