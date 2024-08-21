import styled from 'styled-components';


// Контейнер для всей модалки, включая затемнённый фон
export const ModalContainer = styled.div`

visibility: hidden; //!!! временное решение чтобы не обображать модалку на телефонах

@media (min-width: 768px) {
  visibility: visible; //!!! временное решение чтобы не обображать модалку на телефонах


  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1001; //! так как у header 1000  
}

`;

// Контейнер для контента модалки
export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;

  
`;

// Кнопка закрытия модалки
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(200, 200, 200, 0.8);
  border: none;
  border-radius: 50%; 
  width: 30px; 
  height: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333; 
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(150, 150, 150, 0.8); /* Более темный фон при наведении */
  }
`;



export const ModalImage = styled.img`
  width: 100%; 
  max-width: 400px; 
  height: auto; 
  
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
  }
`;

export const ModalText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;

  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;