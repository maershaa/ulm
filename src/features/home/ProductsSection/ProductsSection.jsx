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
  return (
    <ProductsWrapper>
      <Title title="Наша продукція" />

      <SectionDescription>
        Виробляємо металеву упаковку для підприємств харчової промисловості,
        поєднуючи якість, надійність та багаторічний досвід.
      </SectionDescription>

      <ProductsList>
        {topProductsData.map((product) => (
          <ProductsItem product={product} key={product.id} />
        ))}{' '}
      </ProductsList>

      <ButtonWrapper>
        <ButtonLink to="/products">
          <span>Переглянути всю продукцію</span>
          <FaArrowRight />
        </ButtonLink>
      </ButtonWrapper>
    </ProductsWrapper>
  );
};

export { ProductsSection };
