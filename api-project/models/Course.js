const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseCode: { type: String, required: true },
  courseFullName: { type: String, required: true },
  courseNickName: { type: String, default: "" },
  courseDuration: { type: String, default: "" },
  courseMode: { type: String, default: "Semester", enum: ["Yearly", "Semester"] },
  affilatedUniversity: { type: String, default: "" },
  craetedAt: Date,
  updatedAt: Date,
});
CourseSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model("Course", CourseSchema);
