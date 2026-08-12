import { useTranslation } from 'react-i18next';
import { Title } from '@/components';
import { Wrapper, ProductsList, Description } from './ProductsContent.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';

import {
  ProductsList as ProductsListType,
  Product as ProductType,
} from '@/types/index';

interface ProductsContentProps {
  productsData: ProductsListType;
}

const ProductsContent = ({ productsData }: ProductsContentProps) => {
  const { t } = useTranslation('products');

  return (
    <Wrapper>
      <Title title={t('title')} />
      <Description>{t('description')}</Description>
      <ProductsList>
        {productsData.map((product: ProductType) => {
          return <ProductsItem product={product} key={product.id} />;
        })}
      </ProductsList>
    </Wrapper>
  );
};

export { ProductsContent };
