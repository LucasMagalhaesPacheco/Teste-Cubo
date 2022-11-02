import React from 'react'
import { useContext } from 'react'
import HomeComponents from '../../components/HomeComponents/HomeComponents'
import GlobalContext from '../../Global/GlobalContext'
import { DivH1P, H1, MainContainer, P } from './styled'
import Load from '../../assets/load.gif'
const HomePage = () => {
  const {states} = useContext(GlobalContext)
  return (
    <>
    {states.users && states.users.length > 0 ? 
      <MainContainer>
      <DivH1P>
      <H1>DATA LOAD</H1>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
      </DivH1P>
        <HomeComponents /> 
    </MainContainer> :
    <img src={Load} width="100%" alt="Loading" />
  }
  </>
    
  )
}

export default HomePage