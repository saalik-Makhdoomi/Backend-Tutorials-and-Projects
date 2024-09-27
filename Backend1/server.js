// 1.server Instantiate:
const express = require("express");
const app = express();

//4. used to parse req.body in express --> PUT or POST:
const bodyParser = require("body-parser");

//5. specifically pasre JSON data $ add it to the request.Body object:
app.use(bodyParser.json());

//2. activate the srever on port 3000:
app.listen(8000, () => {
  console.log("server started at port no. 8000");
});

//3. Routes:
app.get("/", (req, res) => {
  res.send("this is server");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car submitted successfully");
});

// 6.
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myData", {
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Recieved an error");
  });
