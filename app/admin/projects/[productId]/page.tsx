import prismadb from "@/lib/db";
import ProductsForm from "./components/productForm";

const ProductPage = async ({
  params,
}: {
  params:Promise <{
    productId: string;
    
  }>;
}) => {
  const {productId}=await params
  const product = await prismadb.project.findUnique({
    where: {
      id:productId,
    },
    include: {
      images: true,
  
    },
  });


  return (
    <div className="flex-col w-[80%] mx-auto">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsForm
         initialData={product} />
      </div>
    </div>
  );
};
export default ProductPage;
