const { addIncome, getIncomes, deleteIncome, updateIncome } = require("../controllers/income");
const { addExpense, getExpenses, deleteExpense, updateExpense } = require("../controllers/expense");
const { addSaving, getSavings, deleteSaving, updateSaving } = require("../controllers/saving");
const { addInvestment, getInvestments, deleteInvestment, updateInvestment } = require("../controllers/investment");
const router = require("express").Router();
const verifyToken = require('../middleware/verifyToken');

//Income Routes
router.post("/add-income", addIncome);
router.get("/get-incomes", getIncomes);
router.delete("/delete-income/:id", deleteIncome);
router.put("/update-income/:id", updateIncome);

//Expense Routes
router.post("/add-expense", addExpense);
router.get("/get-expenses", getExpenses);
router.delete("/delete-expense/:id", deleteExpense);
router.put("/update-expense/:id", updateExpense);

//Saving Routes
router.post("/add-saving", addSaving);
router.get("/get-savings", getSavings);
router.delete("/delete-saving/:id", deleteSaving);
router.put("/update-saving/:id", updateSaving);

//Investment Routes
router.post("/add-investment", addInvestment);
router.get("/get-investments", getInvestments);
router.delete("/delete-investment/:id", deleteInvestment);
router.put("/update-investment/:id", updateInvestment);

//GPT Recommendation
router.post("/recommendation", async (req, res) => {
  const { category, amount } = req.body;
    const recommendation = await getRecommendation(category, amount);
    res.json(recommendation);
});


module.exports = router;
