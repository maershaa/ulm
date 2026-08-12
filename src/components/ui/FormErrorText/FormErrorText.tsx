import { HiOutlineLightBulb } from 'react-icons/hi';
import { ErrorMessage } from './FormErrorText.styled';

interface FormErrorTextProps {
  errorMessage: string;
}
const FormErrorText = ({ errorMessage }: FormErrorTextProps) => {
  return (
    <ErrorMessage>
      <HiOutlineLightBulb size={28} />
      <span>{errorMessage} </span>
    </ErrorMessage>
  );
};

export { FormErrorText };
