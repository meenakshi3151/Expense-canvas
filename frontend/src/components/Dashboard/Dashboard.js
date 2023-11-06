import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';

function Dashboard(){
    return(
        <DashboardStyle>
           <InnerLayout>
                DashBoard
           </InnerLayout>
        </DashboardStyle>
    )
}

const DashboardStyle=styled.div`


`;
export default Dashboard