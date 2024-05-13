const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;

const CourseSubjectMappingSchema = new Schema({
  session: { type: String, required: true },
  subject: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  branch: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
  year: { type: Number, default: 1 },
  semester: { type: Number, default: 1 },
  craetedAt: Date,
  updatedAt: Date,
});
CourseSubjectMappingSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model("Subject", CourseSubjectMappingSchema);
