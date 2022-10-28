import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import DonutChart from "react-donut-chart"
import { StyledSection, StyledTable, StyledTh} from './styled'

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
                <StyledTh>{user?.participation}</StyledTh>
                </tr>
            
        )
    })

    return(
        <>
        <StyledSection>
        <StyledTable>
        <tr>
        <StyledTh>First Name</StyledTh>
        <StyledTh>Last Name</StyledTh>
        <StyledTh>Participation</StyledTh>
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