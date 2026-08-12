import {
  Wrapper,
  Title,
  Subtitle,
  SorryText,
  BackButton,
} from './ErrorPage.styled';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { IoMdArrowBack } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation('main');
  return (
    <Wrapper>
      <HiOutlineExclamationCircle />

      <Title>404</Title>
      <Subtitle>{t('error.404.title')}</Subtitle>

      <SorryText>{t('error.404.description')}</SorryText>

      <BackButton as={Link} to="/">
        <IoMdArrowBack />
        {t('error.404.button')}
      </BackButton>
    </Wrapper>
  );
};

export default ErrorPage;
