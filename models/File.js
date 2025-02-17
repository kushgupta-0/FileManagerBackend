const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["file", "folder"], required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "File", default: null },
    content: { type: String, default: "" },
});

module.exports = mongoose.model("File", FileSchema);
