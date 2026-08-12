import { useTranslation } from 'react-i18next';
import {
  ProductsWrapper,
  SectionDescription,
  ProductsList,
  ButtonWrapper,
  ButtonLink,
} from './ProductsSection.styled';
import { Title } from '@/components';
import { ProductsItem } from '@/features/products/ProductsItem/ProductsItem';
import { topProductsData } from '@/constants/topProductsData';
import { FaArrowRight } from 'react-icons/fa6';

const ProductsSection = () => {
  const { t } = useTranslation('products');
  return (
    <ProductsWrapper>
      <Title title={t('title')} />

      <SectionDescription>{t('description')}</SectionDescription>

      <ProductsList>
        {topProductsData.map((product) => (
          <ProductsItem product={product} key={product.id} />
        ))}{' '}
      </ProductsList>

      <ButtonWrapper>
        <ButtonLink to="/products">
          <span>{t('button')}</span> <FaArrowRight />
        </ButtonLink>
      </ButtonWrapper>
    </ProductsWrapper>
  );
};

export { ProductsSection };
