export const config = {
  port: process.env.PORT || 4000,
  sportsdb: {
    baseUrl: process.env.SPORTSDB_BASE_URL || "https://www.thesportsdb.com/api/v1/json/3",
    barcelonaTeamId: process.env.BARCELONA_TEAM_ID || "133739",
  },
};
