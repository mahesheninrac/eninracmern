const express = require('express');
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());

app.use("/api/users",)
app.listen(PORT, (req, res) => console.log(`listening on ${PORT}`))