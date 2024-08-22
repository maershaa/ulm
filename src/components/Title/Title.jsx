import React from 'react'
import { Title as StyledTitle  } from './Title.styled';

const Title = ({ title }) => {
  return (
    <StyledTitle>{title}</StyledTitle> 
  )
}

export default Title