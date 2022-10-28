import styled from "styled-components";

export const HeaderStyled = styled.header`
min-width: 100%;
height: 8rem;
background-color: #4040ff ;
margin-bottom: 2rem;`

export const FormCreate = styled.form`
display: flex;
align-items: center;
justify-content: center;`

export const SectionHeader = styled.section`
background-color: #4040ff; 
padding-top: 2rem;`

export const InputForm = styled.input `
height: 2rem;
width: 12rem;
border: 0.0625rem solid rgb(206, 133, 255);
padding: 0.5rem;
margin-left: 0.8rem; ;
font-size: 1rem;
`

export const ButtonForm = styled.button`
  background-color: #4040ff;
  border: 1px solid white;
  color: white;
  padding: 0.9375rem 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-left: 1rem;
  :hover {
    background-color: white;
    color: #4040ff;
  }`