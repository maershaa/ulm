import { useTranslation } from 'react-i18next';
import { Title } from '@/components';
import { ProductsList } from './ProductsContent.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';

const ProductsContent = ({ productsData }) => {
  const { t } = useTranslation('products');

  return (
    <>
      <Title title={t('title')} />
      <ProductsList>
        {productsData.map((product) => (
          <ProductsItem product={product} key={product.id} />
        ))}
      </ProductsList>
    </>
  );
};

export { ProductsContent };
