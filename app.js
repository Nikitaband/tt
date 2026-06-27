const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());

const db = new sqlite3.Database("users.db");


const SECRET = "my_super_secret_key";

app.post("/login", (req, res) => {
  const { username, password } = req.body;


  const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

  db.get(query, (err, row) => {
    if (err) return res.status(500).send(err);

    if (row) {
      res.json({
        message: "Login successful",
        token: SECRET
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials"
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
