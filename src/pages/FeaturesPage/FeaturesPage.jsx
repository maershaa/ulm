import React, { useState } from 'react';
import { Container, Title, FeatureGrid, FeatureItem, TextContainer, StyledImage, FeatureItemTitle,FeatureItemText  } from './FeaturesPage.styled';
import FeaturesModal from '../../components/FeaturesModal/FeaturesModal'
import featuresData from './featuresData';

const FeaturesPage = () => {
// Состояние для отображения или скрытия модалки
const [showFeaturesModal, setShowFeaturesModal] = useState(false);

// Состояние для хранения данных текущей особенности, которые будут отображаться в модалке
const [modalContent, setModalContent] = useState({});

// Функция для открытия модалки и установки данных выбранной особенности
const openFeaturesModal = (feature) => {
  setModalContent(feature); // Устанавливаем данные текущей особенности
  setShowFeaturesModal(true); // Отображаем модалку
};

// Функция для закрытия модалки
const closeFeaturesModal = () => {
  setShowFeaturesModal(false); // Скрываем модалку
};

  return (
    <Container className="container">
      <Title>ПЕРЕВАГИ</Title>
      <FeatureGrid>
        {featuresData.map((feature) => (
          <FeatureItem key={feature.id} onClick={() => openFeaturesModal(feature)}>
            <StyledImage src={feature.imageSrc} alt={feature.alt} />
            <TextContainer>
              <FeatureItemTitle>{feature.title}</FeatureItemTitle>
              <FeatureItemText >
                {feature.description}
              </FeatureItemText>
            </TextContainer>
          </FeatureItem>
        ))}
      </FeatureGrid>

      {/* Компонент модалки */}
      {showFeaturesModal && (
        <FeaturesModal
          show={showFeaturesModal}
          onClose={closeFeaturesModal}
          text={modalContent.description}
          imageSrc={modalContent.imageSrc}
        />
      )}
    </Container>
  );
};

export default FeaturesPage;
