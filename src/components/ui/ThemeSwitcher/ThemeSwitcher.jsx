// import { MdSunny, MdNightlight } from 'react-icons/md';
import { ThemeSwitcherWrapper } from './ThemeSwitcher.styled';
import { ThemeContext } from '@/context/theme/ThemeContext';
import { useContext } from 'react';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherWrapper>
      {/* <MdNightlight />
        <MdSunny /> */}
      <input
        type="checkbox"
        value={theme}
        onChange={toggleTheme}
        checked={theme === 'light' ? true : false}
      />
    </ThemeSwitcherWrapper>
  );
};

export { ThemeSwitcher };
