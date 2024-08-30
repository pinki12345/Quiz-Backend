const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Text", "Image URL", "Text & Image URL"],
    required: true,
  },
  text: {
    type: String,
    required: function () {
      return this.type === "Text" || this.type === "Text & Image URL";
    },
  },
  imageUrl: {
    type: String,
    required: function () {
      return this.type === "Image URL" || this.type === "Text & Image URL";
    },
  },
  isCorrect: {
    type: Boolean,
    required: true,
    default: false,
  },
  votes: {
    type: Number,
    default: 0
  }
});

const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: [OptionSchema],
  timeLimit: {
    type: [Number],
    enum: [0, 5, 10],
    default:0,
  },
  attempts: {
    type: Number,
    default: 0,
  },
  correctAnswers: {
    type: Number,
    default: 0,
  },
  incorrectAnswers: {
    type: Number,
    default: 0,
  },
});

const QuizSchema = new mongoose.Schema({
  quizName: {
    type: String,
    required: true,
  },
  quizType: {
    type: String,
    enum: ["Q&A", "Poll"],
    required: true,
  },
  questions: [QuestionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  impressions: {
    type: Number,
    default: 0,
  },
});


const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
