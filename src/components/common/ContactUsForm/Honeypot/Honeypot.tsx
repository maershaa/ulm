import { HoneypotWrapper } from './Honeypot.styled';
import { ChangeEventHandler } from 'react';

interface HoneypotProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

/* Honeypot: скрыто от людей, но видно ботам, которые заполняют все поля подряд. Не используем display:none тк некоторые боты его игнорируют, поэтому прячем через offscreen */

const Honeypot = ({ value, onChange }: HoneypotProps) => {
  return (
    <HoneypotWrapper aria-hidden="true">
      <label htmlFor="website">Website</label>

      <input
        type="text"
        id="website"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </HoneypotWrapper>
  );
};

export default Honeypot;
