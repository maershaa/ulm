import { Item } from './ProductsItem.styled';
import { useTranslation } from 'react-i18next';

const ProductsItem = ({ product }) => {
  const { t } = useTranslation('products');

  return (
    <Item key={product.id}>
      <div>
        <img
          src={product.imageSrc}
          alt={t(`items.${product.id}.alt`)}
          loading="lazy"
        />
        <h3>{t(`items.${product.id}.title`)}</h3>
        <p>{t(`items.${product.id}.description`)}</p>
      </div>
    </Item>
  );
};

export { ProductsItem };
