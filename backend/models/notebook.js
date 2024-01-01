const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notebookSchema = new Schema({
  code: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, enum: ["javascript", "python"], required: true },
  createdDate: { type: Date, required: true },
  author: {
    email: { type: String, required: true },
    avatar: { type: String, required: true },
  },
  sharedWith: {
    email: { type: String },
    avatar: { type: String },
  },
  lastOpenAt: { type: Date, required: true },
});

module.exports = mongoose.model("Notebook", notebookSchema);
