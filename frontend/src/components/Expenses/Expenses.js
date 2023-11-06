import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
function Expense(){
    return(
        <ExpenseStyle>
            <InnerLayout>
                Expense
           </InnerLayout>
        </ExpenseStyle>
    )
}

const ExpenseStyle=styled.div`
    
`;
export default Expense