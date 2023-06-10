var sql = require("../utils/db");

const retrieveAlbums = (req, res) => {
  sql.query("SELECT * FROM Album", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const countAlbums = (req, res) => {
  sql.query("SELECT COUNT(id) FROM Album", function (err, result) {
      if (err) throw err;
      res.send(result);
  });
};

const createAlbum = (req, res) => {
  sql.query(
    "INSERT INTO Album ( nome, idArtista) VALUES (?,?)",
    [
      
      req.body.nome,
      req.body.idArtista,
      
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveAlbum = (req, res) => {
    sql.query(
    "SELECT * FROM Album WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteAlbum = (req, res) => {
    sql.query(
    "DELETE FROM Album WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Album " + req.params.id + " successfully deleted");
    }
  );
};

const updateAlbum = (req, res) => {
  sql.query(
    "UPDATE Album SET nome = ?, idArtista = ? WHERE id = ?",
    [
      req.body.id,
      req.body.nome,
      req.params.idArtista
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countAlbums, retrieveAlbums, retrieveAlbum, deleteAlbum, updateAlbum, createAlbum};