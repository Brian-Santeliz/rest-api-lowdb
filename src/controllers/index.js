const { conexionDB } = require("../database");
const { generate } = require("shortid");

const getController = (req, res) => {
  const propiedades = conexionDB().get("propiedades").value();
  res
    .status(200)
    .json({ data: propiedades, totalEdificaciones: propiedades.length });
};

const getByIdController = (req, res) => {
  const { id } = req.params;
  const propiedades = conexionDB().get("propiedades").find({ id });
  res.status(200).json(propiedades);
};

const postController = (req, res) => {
  const {
    edificacion,
    ancho,
    largo,
    habitaciones,
    materiales,
    apartamentos,
    atracciones,
  } = req.body;
  const newPropertie = {
    id: generate(),
    edificacion,
    ancho,
    largo,
    habitaciones,
    materiales,
    apartamentos,
    atracciones,
  };
  conexionDB().get("propiedades").push(newPropertie).write();
  res.status(200).json({ msg: "Edificación creada", data: newPropertie });
};

const putController = async (req, res) => {
  const { id } = req.params;
  const propiedades = await conexionDB()
    .get("propiedades")
    .find({ id })
    .assign(req.body)
    .write();
  res.status(200).json({ msg: "Edificación modificada", data: propiedades });
};
const deleteController = (req, res) => {
  const { id } = req.params;
  const propiedades = conexionDB().get("propiedades").remove({ id }).write();
  res.status(200).json({ msg: "Edificación destruida", data: propiedades });
};
module.exports = {
  getController,
  getByIdController,
  postController,
  deleteController,
  putController,
};
