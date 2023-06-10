var sql = require("../utils/db");

const countArtista = (req, res) => {
    sql.query("SELECT COUNT(id) FROM Artista", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveArtista = (req, res) => {
  sql.query("SELECT * FROM Artista", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createArtista = (req, res) => {
  sql.query(
    "INSERT INTO Artista (nome, pais) values (?,?)",
    [req.body.nome, req.body.pais],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveartista = (req, res) => {
  sql.query(
    "SELECT * FROM Artista WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteArtista = (req, res) => {
  sql.query(
    "DELETE FROM Artista WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Artista " + req.params.id + " successfully deleted");
    }
  );
};

const updateArtista = (req, res) => {
  sql.query(
    "UPDATE Artista SET nome = ?, pais = ? WHERE id = ?",
    [req.body.nome, req.body.pais,req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countArtista, retrieveArtista, createArtista, retrieveartista, updateArtista, deleteArtista};