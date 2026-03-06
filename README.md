# FC Barcelona - Backend (Repo 2)

Backend que consume la API de TheSportsDB y expone los jugadores del FC Barcelona.

## Arquitectura

```
Rutas → Controladores → Servicios → API Externa
```

- **routes/**: Define los endpoints (`/api/players`)
- **controllers/**: Maneja request/response HTTP
- **services/**: Lógica de negocio y llamada a la API externa
- **config/**: Constantes y variables de entorno

## Requisitos

- Node.js 18+

## Instalación

```bash
npm install
```

## Configuración

Copia `.env.example` a `.env` y ajusta si es necesario:

```bash
cp .env.example .env
```

## Ejecutar

```bash
# Desarrollo (con recarga automática)
npm run dev

# Producción
npm run build
npm start
```

El servidor corre en `http://localhost:4000`.

## API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/players` | Lista de jugadores del FC Barcelona |
