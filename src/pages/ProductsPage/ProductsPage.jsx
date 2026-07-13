import { Wrapper } from './ProductsPage.styled';
import { productsData } from '@/constants';

import { ProductsContent } from '@/features';

const ProductsPage = () => {
  return (
    <Wrapper>
      <ProductsContent productsData={productsData} />
    </Wrapper>
  );
};

export default ProductsPage;
