const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

(async () => {
  const db = await open({
    filename: "./db.sqlite3",
    driver: sqlite3.Database,
  });

  const items = await db.all("SELECT * FROM maratona_maratonaitem");
  console.log("ITEMS", JSON.stringify(items, null, 2));
})();
