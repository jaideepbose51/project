const express = require("express");
const app = express();

// Serve static files
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/login",(req,res)=>{
  res.sendFile(__dirname + "/login.html");
});

app.get("/singup",(req,res)=>{
  res.sendFile(__dirname + "/singup.html");
});

app.get("/contact",(req,res)=>{
  res.sendFile(__dirname + "/contactme.html")
})
app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server started on port 3000");
});