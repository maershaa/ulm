import React from 'react';
import { Container, ProductsList, ProductsItem, ProductsItemContainer, ProductsItemImg,  ProductsItemText, ProductsItemTitle} from './ProductsPage.styled';
import Title from '../../components/Title/Title';
import productsData from './productsData';

const ProductsPage = () => {
  return (
    <Container className="container">
      <Title title="ПРОДУКЦІЯ" />

      <ProductsList>
        {productsData.map((product) => (
          <ProductsItem key={product.id}>
            <ProductsItemContainer>
              <ProductsItemImg src={product.imageSrc} alt={product.alt} />
              <ProductsItemTitle>{product.title}</ProductsItemTitle>
              <ProductsItemText >{product.description}</ProductsItemText>
            </ProductsItemContainer>
          </ProductsItem>
        ))}
      </ProductsList>
    </Container>
  );
};

export default ProductsPage;
