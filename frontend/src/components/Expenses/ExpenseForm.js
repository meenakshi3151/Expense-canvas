import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from "../../context/globalContext";
import { plus } from "../../utils/icons";
function ExpenseForm(){
    // acessing the add income function using useGlobalContext() hook
    const {addExpense,getExpense,error,setError}=useGlobalContext()
    const [inputState,setInputState]=useState({
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',
    })
    const {title,amount,date,category,description}=inputState;
    //updating the Input Fields
    //Taking the name of fields that has to be updated
    const handleInput=(name)=>e=>{
        setError('')
        setInputState({...inputState,[name]:e.target.value})
        getExpense()
    }

    const handleSubmit=e=>{
        e.preventDefault();
        addExpense(inputState)
        //After Clicking the All fields become empty
        setInputState({
            title:'',
            amount:'',
            date:'',
            category:'',
            description:'',
        })
        
    }

    return(
        <ExpenseFormStyle onSubmit={handleSubmit} >
            {error && <p className="error">
                    {error}
                </p>}
            <div className="input">
                <input 
                    type="text"
                    value={title}
                    name={'title'}
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input">
                <input 
                    type="text"
                    value={amount}
                    name={'amount'}
                    placeholder="Expense Amount"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input">
                 <DatePicker 
                    id='date'
                    placeholderText='Enter a Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date)=>{
                        
                        setInputState({...inputState,date:date})
                    }}
                />
               
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
                </select>
            </div> 
            <div className="input-control">
                <textarea 
                    name="description" 
                    value={description} 
                    placeholder="Add some reference" 
                    id="description" 
                    cols="30" 
                    rows="4" 
                    onChange={handleInput('description')}
                ></textarea>
            </div>
            <div className="submit-btn">
                <button><span>{plus}</span> Add Expense</button>
            </div>
        </ExpenseFormStyle>
    )
}

const ExpenseFormStyle=styled.form`
display: flex;
flex-direction: column;
gap: 2rem;
input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
}
.input-control{
    input{
        width: 100%;
    }
}

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border:solid 3px;
            border-radius:10px;
            padding:5px;
            &:hover{
                background:#C2E0FF;
            }
        }
    }

`
export default ExpenseForm

