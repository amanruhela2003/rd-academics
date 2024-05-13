const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
  branchCode: { type: String, required: true },
  branchFullName: { type: String, required: true },
  branchNickName: { type: String, default: "" },
  course: {type:Schema.Types.ObjectId,ref:'Course',required:true},
  craetedAt: Date,
  updatedAt: Date,
});
BranchSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model("Branch", BranchSchema);
