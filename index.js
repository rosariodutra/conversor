const express = require("express");
const app = express();
const port = 3000;

// Endpoint para converter decimal para binário
app.get("/to-binary/:decimal", (req, res) => {
    const decimal = parseInt(req.params.decimal, 10);

    if (isNaN(decimal)) {
        return res.status(400).json({ error: "Invalid decimal number" });
    }

    const binary = decimal.toString(2);
    res.json({ decimal, binary });
});

// Novo endpoint para converter decimal para hexadecimal
app.get("/to-hex/:decimal", (req, res) => {
  const decimal = parseInt(req.params.decimal, 10);
  if (isNaN(decimal)) {
    return res.status(400).json({ error: "Invalid decimal number" });
  }
  const hex = decimal.toString(16).toUpperCase();
  res.json({ decimal, hex });
});

// O app.listen deve sempre ficar por último
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
