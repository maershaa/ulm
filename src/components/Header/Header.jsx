import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'; 
import { HeaderContainer } from './Header.styled'; 
import Logo from '../Logo/Logo'; 
import NavMenu from './NavMenu/NavMenu'; 
import BurgerMenuButton from './BurgerMenuButton/BurgerMenuButton'; 
import MobileMenu from './MobileMenu/MobileMenu'; 

export const Header = () => {
  // Состояние для отображения или скрытия меню
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Используем медиазапрос для проверки ширины экрана
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  // Хук для отслеживания изменения состояния меню и управления прокруткой
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isOpenMenu) {
        window.document.body.style.overflow = 'hidden'; // Отключаем прокрутку при открытом меню
      } else {
        window.document.body.style.overflow = 'auto'; // Включаем прокрутку при закрытом меню
      }
    }
  }, [isOpenMenu]);

  // Функция для закрытия меню при клике
  const handleClick = () => setIsOpenMenu(false);

  return (
    <HeaderContainer>
      <Logo /> 
         {/* Отображаем десктопное меню, если экран является десктопным */}
         {isDesktop && <NavMenu />}

{/* Отображаем кнопку бургер-меню, если экран не является десктопным */}
{!isDesktop && (
  <BurgerMenuButton
    isOpenMenu={isOpenMenu}
    setIsOpenMenu={setIsOpenMenu}
  />
)}

{/* Отображаем мобильное меню, если оно открыто и экран не является десктопным */}
{isOpenMenu && !isDesktop && <MobileMenu handleClick={handleClick} />}
    </HeaderContainer>
  );
};
