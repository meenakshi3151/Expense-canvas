const ExpenseSchema = require('../models/expenseModel');
const multer = require('multer');
//setting up multer to upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/src/images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});
//uploading the file
const upload = multer({ storage: storage }).single('file'); 

exports.addExpense = async (req, res) => {
  try {
    // setting up middleware 
    
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
      
        return res.status(400).json({ message: 'Multer error' });
      } else if (err) {
      //handling all the errors
        return res.status(500).json({ message: 'server side error in 2 block' });
      }
      //other data in expense
      const { title, amount, category, description, date, } = req.body;
  const fileName=req.file.filename;
      // Checking for required fields
      if (!title || !category || !description || !date || isNaN(amount) || amount <= 0 ) {
        return res.status(400).json({ message: 'All the fileds are required' });
      }
      const expense = new ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
        file:{
       image:fileName
        }
      });

      // Saving the expense
      await expense.save();

      res.status(200).json({ message: 'Expense successfully Added' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'SServer side error' });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'sserver side error' });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await ExpenseSchema.findByIdAndDelete(id);
    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json({ message: 'Expense Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server side error' });
  }
};



