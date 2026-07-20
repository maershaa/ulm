import { useTranslation } from 'react-i18next';
import { Switcher, LanguageButton } from './LanguageSwitcher.styled';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Switcher role="group" aria-label="Language switcher">
      <LanguageButton
        type="button"
        $active={i18n.language === 'uk'}
        onClick={() => changeLanguage('uk')}
        aria-pressed={i18n.language === 'uk'}
      >
        UA
      </LanguageButton>

      <LanguageButton
        type="button"
        $active={i18n.language === 'en'}
        onClick={() => changeLanguage('en')}
        aria-pressed={i18n.language === 'en'}
      >
        EN
      </LanguageButton>
    </Switcher>
  );
};

export { LanguageSwitcher };
