const express = require("express");

const app = express();

const port = 8900;

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
