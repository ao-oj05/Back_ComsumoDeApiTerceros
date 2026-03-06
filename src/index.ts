import express from "express";
import cors from "cors";
import playersRoutes from "./routes/players.routes";
import { config } from "./config/constants";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", playersRoutes);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Bienvenido a la API del FC Barcelona. Los datos están en /api/players");
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log(`API disponible en: http://localhost:${PORT}/api/players`);
});
