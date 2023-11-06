import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';

function Income(){
    const {addIncome}=useGlobalContext()
    return(
        <IncomeStyle>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className='income-content'>
                    <div className='income-form'>
                        <Form/>
                    </div>
                    <div className='incomes'>

                    </div>
                </div>
            </InnerLayout>
        </IncomeStyle>
    )
}

const IncomeStyle=styled.div`


`;
export default Income