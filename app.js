const { response } = require("express");
const express = require("express");

const shopRoutes = require("./routes/shopRoutes.js");

const PORT = 5555;
const app = express();

app.use(shopRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));