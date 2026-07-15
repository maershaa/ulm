import { MdSunny, MdNightlight } from 'react-icons/md';
import { ThemeSwitcherWrapper } from './ThemeSwitcher.styled';
import { ThemeContext } from '@/context/theme/ThemeContext';
import { useContext } from 'react';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherWrapper>
      <input
        type="checkbox"
        id="check"
        value={theme}
        onChange={toggleTheme}
        checked={theme === 'dark' ? true : false}
      />
      <label htmlFor="check">
        <MdSunny className="sun" />
        <MdNightlight className="moon" />
      </label>
    </ThemeSwitcherWrapper>
  );
};

export { ThemeSwitcher };
