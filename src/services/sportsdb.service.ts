import { config } from "../config/constants";
import type { Player } from "../types/player";

/**
 * Capa de servicio: lógica de negocio y comunicación con API externa.
 * Aquí vive toda la lógica de "cómo obtener los jugadores".
 */

export async function getBarcelonaPlayers(): Promise<Player[]> {
  const url = `${config.sportsdb.baseUrl}/lookup_all_players.php?id=${config.sportsdb.barcelonaTeamId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error al conectar con TheSportsDB: ${response.status}`);
  }

  const data = await response.json();
  return data.player || [];
}
