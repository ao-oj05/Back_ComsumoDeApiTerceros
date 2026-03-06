import { Request, Response } from "express";
import { getBarcelonaPlayers } from "../services/sportsdb.service";

/**
 * Controlador: maneja la petición HTTP y delega la lógica al servicio.
 * Solo se encarga de request/response, no de la lógica de negocio.
 */

export async function getPlayers(req: Request, res: Response) {
  try {
    const players = await getBarcelonaPlayers();
    res.json(players);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    res.status(502).json({ error: message });
  }
}
