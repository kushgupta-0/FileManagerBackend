const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

// Get all files/folders
router.get("/", fileController.getFiles);

// Get a specific file (including content)
router.get("/:id", fileController.getFileById);

// Create a new file/folder
router.post("/", fileController.createFile);

// Rename a file/folder
router.put("/:id", fileController.renameFile);

// Delete a file/folder
router.delete("/:id", fileController.deleteFile);

// Move a file/folder
router.put("/move/:id", fileController.moveFile);

// Update file content
router.put("/content/:id", fileController.updateFileContent);

module.exports = router;
