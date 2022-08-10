import express from "express";

const PORT = 8800;

const app = express();

const handleHome = (req, res) => {
  return res.end("<h1>I still love you<h1>");
};

const handleLogin = (req, res) => {
  return res.end("Login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(PORT, () => {
  console.log(`🚀 server server listening http://localhost:${PORT}`);
});
