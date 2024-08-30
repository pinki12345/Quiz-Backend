const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/user");

const {
  createQuizOrPoll,
  getAllQuizzes,
  getQuizById,
  deleteQuizById,
  handleQuizResponse,
  incrementImpression,
  calculateStats,
  updateQuizOrPoll,
} = require("../controllers/quiz");

router.post("/login", login);

router.post("/signup", signup);

router.post("/createQuizOrPoll", createQuizOrPoll);

router.get("/getQuizById/:id", getQuizById);

router.get("/getAllQuizzes", getAllQuizzes);

router.delete("/deleteQuizById/:id", deleteQuizById);

router.post("/quiz/response", handleQuizResponse);

router.get("/calculateImpression/:id", incrementImpression);

router.get("/stats", calculateStats);

router.put("/updateQuizOrPoll/:id", updateQuizOrPoll);

module.exports = router;
