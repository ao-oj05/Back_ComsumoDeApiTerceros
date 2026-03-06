import express, { Request, Response } from "express";
import cors from "cors";
import playersRoutes from "./routes/players.routes";
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Bienvenido a la API del FC Barcelona",
        endpoints: {
            players: "/api/players"
        },
        status: "online"
    });
});
app.use("/api", playersRoutes);
app.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`API disponible en: http://localhost:${PORT}/api/players`);
});