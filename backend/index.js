const express = require("express");
//crea servidor
const db = require("./db");
//accede base de datos, con el postgres


// Define express app
const app = express(); 
const port = 4000; 
//define puerto

// Middleware to parse JSON requests
app.use(express.json());

// Routes de estudiantes
app.get("/api/ping", (req, res) => res.json({ message: "pong" }));
app.get("/api/students", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM students");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

//aca es la ruta de saludo
app.get('/greet', (req, res) => {res.json({ message: `¡Hola, ${name}` });}); 
//devuelve el nombre qye ingreso


// Start the server
app.listen(port, () => console.log(`App running on port ${port}`));
