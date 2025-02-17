const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Use file routes
app.use("/api/files", fileRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(error => console.log(error));
