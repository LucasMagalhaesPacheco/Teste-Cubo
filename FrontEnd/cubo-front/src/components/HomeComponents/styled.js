import styled from "styled-components";

export const StyledTable = styled.table`
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 50%;`

export const StyledTh = styled.th`
padding-top: 0.75rem;
padding-bottom: 0.75rem;
text-align: left;
background-color: rgb(3, 169, 244) ;
color: white;
border: 0.0625rem solid #ddd;
padding: 0.5rem;
:hover {
background-color: rgb(233, 30, 99);  
}`

export const StyledTh2 = styled.th`
padding-top: 0.75rem;
padding-bottom: 0.75rem;
text-align: left;
background-color: rgb(233, 30, 99) ;
color: white;
border: 2px solid #ddd;
padding: 0.5rem;
:hover {
background-color:rgb(3, 169, 244);  
}`

export const StyledSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-around;`
