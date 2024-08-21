import React from 'react'
import { Container, Block} from './HomePage.styled';
import Hero from '../../components/Hero/Hero'
import AboutUsPage from '../AboutUsPage/AboutUsPage'

import FeaturesPage from '../FeaturesPage/FeaturesPage'
import ProductsPage from '../ProductsPage/ProductsPage'
import ContactsPage from '../ContactsPage/ContactsPage'




const HomePage = () => {
  return (
    <Container>
      <Block>
<Hero />
<AboutUsPage />
<FeaturesPage />
<ProductsPage />
<ContactsPage />
      </Block>
    </Container>
  )
}

export default HomePage