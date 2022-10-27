import React, { useContext, useState } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import DonutChart from "react-donut-chart"

const HomeComponents = () => {
    const {states, setters} = useContext(GlobalContext)

    const MembersGraphs = states.users && states.users.map((user) => {
        return {
            label: user?.firstName,
            value: user?.participation 
        }
    })

    const allUsers = states.users && states.users.map((user)  => {
        return(
                <tr key={user?.id}>
                <th>{user?.firstName}</th>
                <th>{user?.lastName}</th>
                <th>{user?.participation}</th>
                </tr>
            
        )
    })

    


    return(
        <>
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
        <table>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Participation</th>
        </tr>
            {allUsers}
        </table>
        </>
    )
}

export default HomeComponents