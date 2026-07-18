import { HiOutlineLightBulb } from 'react-icons/hi';
import { ErrorMessage } from './FormErrorText.styled';

const FormErrorText = ({ errorMessage }) => {
  return (
    <ErrorMessage>
      <HiOutlineLightBulb size={28} />
      <span>{errorMessage} </span>
    </ErrorMessage>
  );
};

export { FormErrorText };
