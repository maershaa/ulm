import { Dispatch, SetStateAction } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { BtnBurger } from './BurgerMenuButton.styled';

interface BurgerMenuButtonProps {
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenuButton = ({
  isOpenMenu,
  setIsOpenMenu,
}: BurgerMenuButtonProps) => {
  const toggleBurgerMenu = () => {
    setIsOpenMenu((isMenuOpen) => !isMenuOpen);
  };

  return (
    <BtnBurger
      type="button"
      onClick={toggleBurgerMenu}
      aria-label={isOpenMenu ? 'Закрити меню' : 'Відкрити меню'}
      aria-expanded={isOpenMenu}
    >
      {isOpenMenu ? <IoClose /> : <IoMenu />}
    </BtnBurger>
  );
};

export default BurgerMenuButton;
