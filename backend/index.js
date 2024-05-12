const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json()); // to parse the incoming request with JSON payloads

const rootRouter = require("./routes/index");

// all the request coming to the /api/v1 will be redirected to the rootRouter which is defined in the routes/index.js file
app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
