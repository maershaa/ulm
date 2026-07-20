import { useTranslation } from 'react-i18next';
import { Title } from '@/components';
import { Wrapper, ProductsList, Description } from './ProductsContent.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';

const ProductsContent = ({ productsData }) => {
  const { t } = useTranslation('products');

  return (
    <Wrapper>
      <Title title={t('title')} />
      <Description>{t('description')}</Description>
      <ProductsList>
        {productsData.map((product) => (
          <ProductsItem product={product} key={product.id} />
        ))}
      </ProductsList>
    </Wrapper>
  );
};

export { ProductsContent };
