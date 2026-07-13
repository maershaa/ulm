import { BtnBurger, SvgIconBurger } from "./BurgerMenuButton.styled"
import sprite from '/src/assets/icons.svg'


const BurgerMenuButton = ({isOpenMenu, setIsOpenMenu}) => {
    
    const toggleBurgerMenu = () => {
        setIsOpenMenu((isMenuOpen) => !isMenuOpen); // Переключаем значение isMenuOpen на противоположное
      };
      
  return (
  <BtnBurger type="button" onClick={toggleBurgerMenu}>
  <SvgIconBurger>
    {/* Используем тег <use> для отображения иконки из спрайта. 
    Если меню открыто, отображаем иконку закрытия (icon-close). 
    Если меню закрыто, отображаем иконку бургер-меню (icon-menu-burger). */}
    <use
      xlinkHref={
        isOpenMenu
          ? `${sprite}#icon-close` // Иконка закрытия, если меню открыто
          : `${sprite}#icon-menu-burger` // Иконка бургер-меню, если меню закрыто
      }
    ></use>
  </SvgIconBurger>
</BtnBurger>
  )
}

export default BurgerMenuButton