import { Title } from '@/components';
import { ProductsList, ProductsItem } from './ProductsContent.styled';

const ProductsContent = ({ productsData }) => {
  return (
    <>
      <Title title="ПРОДУКЦІЯ" />
      <ProductsList>
        {productsData.map((product) => (
          <ProductsItem key={product.id}>
            <div>
              <img src={product.imageSrc} alt={product.alt} loading="lazy" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </ProductsItem>
        ))}
      </ProductsList>
    </>
  );
};

export { ProductsContent };
