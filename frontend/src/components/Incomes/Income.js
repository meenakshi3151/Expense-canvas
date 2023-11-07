import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem'
function Income(){
    const {addIncome,getIncome,incomes,deleteIncome,flag,totalIncome}=useGlobalContext()
    useEffect(()=>{
        getIncome()
    },[incomes])
    return(
        <IncomeStyle>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className='totalIncome'>Total Income: <span>${totalIncome()}</span></h2>
                <div className='income-content'>
                    <div className='income-form'>
                        <Form/>
                    </div>
                    <div className='incomes'>
                        {incomes.map((income)=>{
                            const {_id,title,amount,date,category,description}=income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyle>
    )
}

const IncomeStyle=styled.div`
    display:flex;
    oveflow:auto;
    .income-content{
        display:flex;
        gap:2rem;{
        .incomes{
            flex: 1;
        }
    }

`;
export default Income
