import { Title } from '@/components';
import { ProductsList, ProductsItem } from './ProductsContent.styled';
import { useTranslation } from 'react-i18next';

const ProductsContent = ({ productsData }) => {
  const { t } = useTranslation('products');

  return (
    <>
      <Title title={t('title')} />
      <ProductsList>
        {productsData.map((product) => (
          <ProductsItem key={product.id}>
            <div>
              <img
                src={product.imageSrc}
                alt={t(`items.${product.id}.alt`)}
                loading="lazy"
              />
              <h3>{t(`items.${product.id}.title`)}</h3>
              <p>{t(`items.${product.id}.description`)}</p>
            </div>
          </ProductsItem>
        ))}
      </ProductsList>
    </>
  );
};

export { ProductsContent };
