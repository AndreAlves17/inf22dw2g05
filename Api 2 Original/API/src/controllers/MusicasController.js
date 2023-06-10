var sql = require("../utils/db");

const countMusicas = (req, res) => {
    sql.query("SELECT COUNT(id) FROM Musica", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveMusicas = (req, res) => {
  sql.query("SELECT * FROM Musica", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createMusica = (req, res) => {
  sql.query(
    "INSERT INTO Musica (nome, genero, idArtista, idAlbum, datadelancamento) VALUES (?,?,?,?,?)",
    [
      req.body.nome,
      req.body.genero,
      req.body.idArtista,
      req.body.idAlbum,
      req.body.datadelancamento,
     
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrievemusicas = (req, res) => {
    sql.query(
    "SELECT * FROM Musica WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteMusica = (req, res) => {
    sql.query(
    "DELETE FROM Musica WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Musica " + req.params.id + " successfully deleted");
    }
  );
};

const updateMusica = (req, res) => {
  sql.query(
    "UPDATE Musica SET nome = ?, genero = ?, idArtista = ?, idAlbum = ?,datadelancamento = ? WHERE id = ?",
    [
      req.body.nome,
      req.body.genero,
      req.body.idArtista,
      req.body.idAlbum,
      req.body.datadelancamento,
      req.params.id
     
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countMusicas, retrieveMusicas, createMusica, retrievemusicas, updateMusica, deleteMusica};