import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import DonutChart from "react-donut-chart"
import { StyledSection, StyledTable, StyledTh, StyledTh2} from './styled'

const HomeComponents = () => {
    const {states} = useContext(GlobalContext)

    const MembersGraphs = states.users && states.users.map((user) => {
        return {
            label: user?.firstName,
            value: user?.participation 
        }
    })

    const allUsers = states.users && states.users.map((user)  => {
        return(
                <tr key={user?.id}>
                <StyledTh>{user?.firstName}</StyledTh>
                <StyledTh>{user?.lastName}</StyledTh>
                <StyledTh>{user?.participation}%</StyledTh>
                </tr>
            
        )
    })

    return(
        <>
        <StyledSection>
        <StyledTable>
        <tr>
        <StyledTh2>First Name</StyledTh2>
        <StyledTh2>Last Name</StyledTh2>
        <StyledTh2>Participation</StyledTh2>
        </tr>
            {allUsers}
        </StyledTable>
        <DonutChart 
        width={450}
        height={300}
        margin-top={6}
        strokenColor={"#FFFFFFFFF"}
        data={MembersGraphs}
        innerRadius={0.5}
        selectedOffset={0.05}
        rotation={0}
        />
        </StyledSection>
        </>
    )
}

export default HomeComponents