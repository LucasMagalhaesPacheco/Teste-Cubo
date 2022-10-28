import React, { useContext } from 'react'
import { BASE_URL } from '../../constants/BASEURL.js'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import GlobalContext from '../../Global/GlobalContext.js'
import { ButtonForm, FormCreate, HeaderStyled, InputForm, SectionHeader } from './styled.js'

const Headers = () => {
    const {states, setters} = useContext(GlobalContext)
    const {form, handleChange, cleanFields} = useForm({
        firstName: "",
        lastName: "",
        participation: ""
    })

    const onSubmitCreateUser = async (event) => {
       await event.preventDefault()

        const body =  {
            firstName: form.firstName,
            lastName: form.lastName,
            participation: Number(form.participation)
        }

        await axios.post(`${BASE_URL}/participation`, body)
        .then((res) => {
           console.log(res)
            cleanFields()
            setters.setAtualizationGets(states.atualizationGets + 1)
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return (
    <HeaderStyled>
        <SectionHeader>
        <FormCreate onSubmit={onSubmitCreateUser}>  
        
        <InputForm
        name='firstName'
        type="text"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First Name"
        pattern={"^.{3,}"}
        title={"Seu nome deve ter no mínimo 3 letras"}
        required />

        <InputForm
        name='lastName'
        type="text"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        pattern={"^.{3,}"}
        title={"Seu nome deve ter no mínimo 3 letras"}
        required />

        <InputForm
        name='participation'
        type="text"
        value={form.participation}
        onChange={handleChange}
        placeholder="Participation"
        required />

        <ButtonForm> Send </ButtonForm>
        </FormCreate>
        </SectionHeader>
        
    </HeaderStyled>
  )
}

export default Headers