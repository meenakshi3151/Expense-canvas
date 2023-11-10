import React from 'react'
import styled from 'styled-components';
import { dollar,calender,comment ,trash,money, freelance, stocks, users, card, bitcoin, yt, piggy, book, food, medical, tv, takeaway, clothing, circle, travel} from '../../utils/icons';
import { dateFormat } from '../../utils/dateFormat';
function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    indicatorColor,
    type,
    deleteItem,
    totalIncome
}){

    const categoryIcon=()=>{
        console.log('hello duniya');
        switch(category){
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;    
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card; 
            case 'youtube':
                return yt; 
            case 'other':
                return piggy;
            default:
                return ''                
        }
    }

    const expenseIcon = () => {
        console.log('hello world');
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return travel;
            case 'other':
                return circle;
            default:
                return '';
        }
    }



    return(
        <IncomeItemStyle indicator={indicatorColor}>
            
            <div className='icon'>
                {type==='expense'?expenseIcon() :categoryIcon()}
               
            </div>
            
            <div className='content'>
                <h5>{title}</h5>
                <div className='inner-content'>
                    <div className='text'>
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment} {description}
                        </p>
                    </div>
                    <div className='btn-con'>
                        <button onClick={()=>deleteItem(id)}>{trash}</button>
                    </div>
                </div>
            </div>
        </IncomeItemStyle>
    )
}
const IncomeItemStyle=styled.div`
background: #FCF6F9;
border: 2px solid #FFFFFF;
box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
border-radius: 20px;
padding: 1rem;
margin-bottom: 1rem;
display: flex;
align-items: center;
gap: 1rem;
width: 105%;
color: #222260;
.icon{
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FFFFFF;
    i{
        font-size: 2.6rem;
    }
}

.content{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    h5{
        font-size: 1.3rem;
        padding-left: 2rem;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: .8rem;
            height: .8rem;
            border-radius: 50%;
            background: ${props => props.indicator};
        }
    }

    .inner-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
            display: flex;
            align-items: center;
            gap: 1.5rem;
            p{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--primary-color);
                opacity: 0.8;
            }
        }
    }
}
`
export default IncomeItem;



