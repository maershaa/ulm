import { MdSunny, MdNightlight } from 'react-icons/md';
import { ThemeSwitcherWrapper } from './ThemeSwitcher.styled';
import { ThemeContext } from '@/context/theme/ThemeContext';
import { useContext } from 'react';

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherWrapper>
      <input
        type="checkbox"
        id="check"
        value={mode}
        onChange={toggleTheme}
        checked={mode === 'dark' ? true : false}
      />
      <label htmlFor="check">
        <MdSunny className="sun" />
        <MdNightlight className="moon" />
      </label>
    </ThemeSwitcherWrapper>
  );
};

export { ThemeSwitcher };
