const express = require("express");
const dotenv = require("dotenv");
const Connection = require("./database/dbConnection");
const Routes = require("./routes/Route");
const app = express();
const bodyParser = require("body-parser");

dotenv.config();
const PORT = process.env.PORT;
Connection();
app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes);
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
