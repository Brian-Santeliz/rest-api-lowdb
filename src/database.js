const lowdb = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

let db;
exports.conexion = async () => {
  const adapter = new FileAsync("bd.json");
  db = await lowdb(adapter);
  db.defaults({ propiedades: [] }).write();
};

exports.conexionDB = () => db;
