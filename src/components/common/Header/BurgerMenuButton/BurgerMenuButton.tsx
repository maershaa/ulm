import { Dispatch, SetStateAction } from 'react';
import { BtnBurger, SvgIconBurger } from './BurgerMenuButton.styled';

interface BurgerMenuButtonProps {
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenuButton = ({
  isOpenMenu,
  setIsOpenMenu,
}: BurgerMenuButtonProps) => {
  const toggleBurgerMenu = () => {
    setIsOpenMenu((isMenuOpen: boolean) => !isMenuOpen); // Переключаем значение isMenuOpen на противоположное
  };

  return (
    <BtnBurger type="button" onClick={toggleBurgerMenu}>
      <SvgIconBurger>
        {/* Используем тег <use> для отображения иконки из спрайта. 
    Если меню открыто, отображаем иконку закрытия (icon-close). 
    Если меню закрыто, отображаем иконку бургер-меню (icon-menu-burger). */}
        <use
          href={
            isOpenMenu
              ? '#icon-close' // Иконка закрытия, если меню открыто
              : '#icon-menu-burger' // Иконка бургер-меню, если меню закрыто
          }
        ></use>
      </SvgIconBurger>
    </BtnBurger>
  );
};

export default BurgerMenuButton;
