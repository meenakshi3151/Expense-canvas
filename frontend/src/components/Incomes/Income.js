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
    overflow:auto;
    flex-direction:row;
    .totalIncome{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow:0px 1px 15px rgba(0,0,0,0.06);
        border-radius:20px;
        padding:1rem;
        margin:1rem 0;
        font-size:2rem;
        gap:0.5rem;
        span{
            font-size:2.5rem;
            font-weight:2rem;
            color:var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }

`;
export default Income
