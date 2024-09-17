const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const app = express();

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// Server configuration
app.listen(3000, () => console.log("server started listening on port: 3000"));
