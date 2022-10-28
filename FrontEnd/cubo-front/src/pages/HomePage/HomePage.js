import React from 'react'
import HomeComponents from '../../components/HomeComponents/HomeComponents'
import { DivH1P, H1, MainContainer, P } from './styled'

const HomePage = () => {
  return (
    <MainContainer>
      <DivH1P>
      <H1>DATA LOAD</H1>
      <P>Veja a Participação dos Membros na nossa competição de Bebida</P>
      </DivH1P>
        <HomeComponents />
    </MainContainer>
  )
}

export default HomePage