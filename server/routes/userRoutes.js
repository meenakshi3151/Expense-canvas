const express = require("express");
const dotenv=require('dotenv');
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {addIncome,getIncomes,deleteIncome}=require('../controllers/income')
const {addExpense,getExpenses ,deleteExpense,uploadImage} =require('../controllers/expense')
const { addBill, getBill, deleteBill } = require('../controllers/Bills');
const { addCrypto, getAllCoins } = require("../controllers/cryptoControllers");

router.route('/').get(protect, allUsers);
router.route('/').post(registerUser);
router.post('/login', authUser)

.post('/addIncome',addIncome)
.get('/getIncomes',getIncomes)

.delete('/deleteincome/:id',deleteIncome)
.post('/addExpenses',addExpense)
.get('/getExpenses',getExpenses)
.delete('/deleteExpense/:id',deleteExpense)
.post('/addBill',addBill)
.get('/getBills',getBill)
.delete('/deleteBill/:id',deleteBill)
router.post('/addCrypto', addCrypto);
router.get('/getAllCoins',getAllCoins);
// router.post('/addExpenses', uploadImage);



module.exports = router;