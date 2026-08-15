import { Item } from './ProductsItem.styled';
import { useTranslation } from 'react-i18next';
import { Product } from '@/types';

interface ProductsItemProps {
  product: Product;
}

const ProductsItem = ({ product }: ProductsItemProps) => {
  const { t } = useTranslation('products');

  return (
    <Item key={product.id}>
      <div>
        <img
          src={product.imageSrc}
          alt={t(`items.${product.id}.alt`)}
          loading="lazy"
        />
        <h2>{t(`items.${product.id}.title`)}</h2>
        <p>{t(`items.${product.id}.description`)}</p>
        <p>{t(`items.${product.id}.application`)}</p>
      </div>
    </Item>
  );
};

export { ProductsItem };
