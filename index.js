const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

const API_KEYS = ["tu-clave-api-123"]; // Lista de claves válidas

// Middleware para autenticación por API key
app.use("/api", (req, res, next) => {
  const key = req.headers["x-api-key"];
  if (!API_KEYS.includes(key)) {
    return res.status(403).json({ error: "API Key inválida" });
  }
  next();
});

// Ruta para obtener precios de criptomonedas desde CoinGecko
app.get("/api/crypto", async (req, res) => {
  try {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});