import { Subtitle as StyledSubtitle } from './Subtitle.styled';

interface SubtitleProps {
  subtitle: string;
}
const Subtitle = ({ subtitle }: SubtitleProps) => {
  return <StyledSubtitle>{subtitle}</StyledSubtitle>;
};

export { Subtitle };
