const express = require("express");

const app = express();

//Routes
app.use("/", require("./routes/index"));
//test

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server start on port ${PORT}`));
