# Revendedora API de Criptomonedas

Este proyecto encapsula la API pública de CoinGecko para ofrecer un endpoint privado autenticado mediante API key.

## Cómo usar

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor:

```bash
npm start
```

3. Hacer una petición:

```bash
curl -H "x-api-key: tu-clave-api-123" http://localhost:3000/api/crypto
```

## Endpoints

- `GET /api/crypto` — Devuelve el precio de Bitcoin y Ethereum en USD.

## Monetización

Puedes alojar este servidor y vender acceso a tu API usando la clave API configurada.

¡Listo para vender!