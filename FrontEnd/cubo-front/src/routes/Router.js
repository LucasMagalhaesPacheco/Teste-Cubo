import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from '../components/Headers/Headers'
import GlobalStyle from '../GlobalStyle'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'

const Router = () => {
  return (
    <BrowserRouter>
     <GlobalStyle />
     <Headers />
     <Routes>
        <Route index exact default path='/' element={<HomePage />} />
        <Route exact path='*' element={<ErrorPage />} />
     </Routes>
    </BrowserRouter>
  )
}

export default Router