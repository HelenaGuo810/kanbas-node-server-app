import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseModel",
    },
    points: Number,
    dueDate: Date,
    availableFrom: Date,
    availableUntil: Date,
  },
  { collection: "assignments" }
);

export default schema;