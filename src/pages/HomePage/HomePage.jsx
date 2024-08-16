import React from 'react'
import { Container, Block} from './HomePage.styled';
import Hero from '../../components/Hero/Hero'
import AboutUsPage from '../AboutUsPage/AboutUsPage'
const HomePage = () => {
  return (
    <Container>
      <Block>
<Hero />
<AboutUsPage />
      </Block>
    </Container>
  )
}

export default HomePage