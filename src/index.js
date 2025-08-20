const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const UserRoute = require("../routes/user_route");

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", UserRoute);

const server = app.listen(PORT || 3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`)
);
