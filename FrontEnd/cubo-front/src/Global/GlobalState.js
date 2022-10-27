import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import axios from 'axios'
import { BASE_URL } from '../constants/BASEURL.js'

const GlobalState = (props) => {
    const [users, setUsers] = useState([])
    const [atualizationGets, setAtualizationGets] = useState(0)
    const [ordination, setOrdination] = useState("ASC")


    const GetAllUsers =  () => {
        axios.get(`${BASE_URL}/participation?sort=${ordination}`)
        .then((res) => {
            console.log(res.data.participation)
            setUsers(res.data.participation)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        GetAllUsers()
    }, [atualizationGets])

    const states = {users, atualizationGets, ordination}
    const setters = {setUsers, setAtualizationGets, setOrdination}

  return (
    <GlobalContext.Provider value={{states, setters}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState