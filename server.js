
const cors = require("cors");
const express = require("express");
const axios = require("axios");

app = express();

// SERVINDO A API
app.use(cors());
port = 3265;

app.get("/", async (req, res) => {
  try {
    // a response é a resposta do axios MAS eu tiro o { data } de dentro do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port);
