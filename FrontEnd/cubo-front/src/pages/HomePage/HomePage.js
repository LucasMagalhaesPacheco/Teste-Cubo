import React from 'react'
import HomeComponents from '../../components/HomeComponents/HomeComponents'
import { DivH1P, H1, MainContainer, P } from './styled'

const HomePage = () => {
  return (
    <MainContainer>
      <DivH1P>
      <H1>DATA LOAD</H1>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
      </DivH1P>
        <HomeComponents />
    </MainContainer>
  )
}

export default HomePage