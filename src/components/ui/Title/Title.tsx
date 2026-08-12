import { Title as StyledTitle } from './Title.styled';

interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export { Title };
