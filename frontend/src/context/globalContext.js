import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
const BASE_URL="http://localhost:5000/api/v1/";
/* 
    To avoid passing the props multiple times we are using Context,
    which is used to share data and state across multiple components
*/
const GlobalContext=React.createContext()
export const GlobalProvider=({children})=>{

    const [incomes,setIncomes]=useState([])
    const [expenses,setExpenses]=useState([])
    const [error,setError]=useState(null)
    //adding the incomes in  databases
    //this function is responsible for posting the data to database
    const addIncome= async(income)=>{
        
        const response=await axios.post(`${BASE_URL}addIncome`,income)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        getIncome();
    }
    //Get the data from database 
    const getIncome=async()=>{
        const response=await axios.get(`${BASE_URL}getIncomes`)
        console.log('response'+response)
        setIncomes(response.data)
        console.log(response.data)
    }
    
    //Deleting the Income
    const deleteIncome=async(id)=>{
        const res=await axios.delete(`${BASE_URL}deleteIncome/${id}`)
        getIncome();
    }
    // calculating the Total income
    const totalIncome=()=>{
        let totalIncome=0;
        incomes.forEach((income)=>{
            totalIncome+=income.amount;
        })
        return totalIncome;
    }
    // console.log(totalIncome());

    //---->>>> EXPENSE


    const addExpense= async(expense)=>{
        
        const response=await axios.post(`${BASE_URL}addExpenses`,expense)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        getExpense();
    }

    const getExpense=async()=>{
        const response=await axios.get(`${BASE_URL}getExpenses`)
        setExpenses(response.data)
        console.log(response.data)
    }
    
    //Deleting the Expense
    const deleteExpense=async(id)=>{
        const res=await axios.delete(`${BASE_URL}deleteExpense/${id}`)
        getExpense();
    }
    // calculating the Total Expense
    const totalExpense=()=>{
        let totalExpense=0;
        expenses.forEach((expense)=>{
            totalExpense+=expense.amount;
        })
        return totalExpense;
    }
    //Calculating the total Balance
    const totalBalance=()=>{
        return totalIncome()-totalExpense();
    }
    const transactionHistory=()=>{
        const history=[...incomes,...expenses]
        history.sort((a,b)=>{
            return new Date(b.createdAt)-new Date(a.createdAt);
        })
        return history.slice(0,3);
    }

    return(
        //Providing the context to child components
        //providing the addIncome data to all the child components
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            expenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
//function to providing the context to components 
export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}