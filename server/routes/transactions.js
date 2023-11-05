const router=require('express').Router()
const {addIncome,getIncomes, deleteIncome} =require('../controllers/income')
const {addExpense,getExpenses ,deleteExpense} =require('../controllers/expense')
router
.post('/addIncome',addIncome)
.get('/getIncomes',getIncomes)

.delete('/deleteincome/:id',deleteIncome)
.post('/addExpenses',addExpense)
.get('/getExpenses',getExpenses)
.delete('/deleteExpense/:id',deleteExpense)
module.exports=router