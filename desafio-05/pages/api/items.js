import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getAll(request, response) {
  if (request.method !== "GET") {
    response
      .status(500)
      .json({ message: "Desculpe, método não permitido para esta requisição" });
  }

  const db = await open({
    filename: "./db.sqlite3",
    driver: sqlite3.Database,
  });

  const items = await db.all("SELECT * FROM maratona_maratonaitem");

  response.status(200).json(JSON.stringify(items, null, 2));
}
