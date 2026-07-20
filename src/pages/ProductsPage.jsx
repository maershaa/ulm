import { productsData } from '@/constants';

import { ProductsContent } from '@/features';

const ProductsPage = () => {
  return <ProductsContent productsData={productsData} />;
};

export default ProductsPage;
