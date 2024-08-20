import React from 'react';
import { Container, Title, FeatureGrid, FeatureItem, TextContainer, StyledImage, FeatureItemTitle,FeatureItemText  } from './FeaturesPage.styled';
import images from '../../assets/Featutes/featuresImg';

const FeaturesPage = () => {
  return (
    <Container>
      <Title>ПЕРЕВАГИ</Title>
      <FeatureGrid> {/* ul */}
        <FeatureItem>
          <StyledImage src={images.team} alt="Колектив працівників" />
          <TextContainer>
            <FeatureItemTitle>Колектив</FeatureItemTitle>
            <FeatureItemText>
              Колектив нашого підприємства складається з високопрофесійних працівників із величезним досвідом роботи у жестетарному виробництві. Стаж провідних спеціалістів коливається від 15 до 40 років. Завдяки їхньому досвіду наше підприємство розробило та впровадило унікальне виробництво, здатне випускати високоякісну продукцію.
            </FeatureItemText>
          </TextContainer>
        </FeatureItem>

        <FeatureItem>
          <StyledImage src={images.price} alt="Ціна продукції" />
          <TextContainer>
            <FeatureItemTitle>Ціна</FeatureItemTitle>
            <FeatureItemText>
              За допомогою нестандартних рішень використання жерсті та допоміжних матеріалів, а також скорочуючи свої накладні витрати, ми добиваємося ЦІНИ на наш виріб нижче за інших виробників зі збереженням високої якості.
            </FeatureItemText>
          </TextContainer>
        </FeatureItem>

        <FeatureItem>
          <StyledImage src={images.volumes} alt="Обсяги виробництва" />
          <TextContainer>
            <FeatureItemTitle>Обсяги</FeatureItemTitle>
            <FeatureItemText>
              Потужність нашого виробництва дозволяє забезпечити будь-який обсяг продукції найбільших виробників консервів.
            </FeatureItemText>
          </TextContainer>
        </FeatureItem>

        <FeatureItem>
          <StyledImage src={images.delivery} alt="Послуги з доставки" />
          <TextContainer>
            <FeatureItemTitle>Доставка</FeatureItemTitle>
            <FeatureItemText>
              Для зручності споживачів ми надаємо послуги з доставки нашого товару.
            </FeatureItemText>
          </TextContainer>
        </FeatureItem>

        <FeatureItem>
          <StyledImage src={images.ttt} alt="Контроль якості" />
          <TextContainer>
            <FeatureItemTitle>Якість</FeatureItemTitle>
            <FeatureItemText>
              Жорсткий контроль стосується не тільки продукції, що випускається, але і вхідної жерсті, лаків, емалей, фарб. У своєму виробництві ми використовуємо складові від перевірених постачальників, які відповідають якості європейських стандартів.
            </FeatureItemText>
          </TextContainer>
        </FeatureItem>

        <FeatureItem>
          <StyledImage src={images.ttt} alt="Відстрочка платежу" />
          <TextContainer>
            <FeatureItemTitle>Відстрочка платежу</FeatureItemTitle>
            <FeatureItemText>
              Для перевірених клієнтів нашому підприємстві існує система гнучких відстрочок від 30 до 90 днів /факторинг/.
            </FeatureItemText>
          </TextContainer>
        </FeatureItem>
      </FeatureGrid>
    </Container>
  );
};

export default FeaturesPage;
