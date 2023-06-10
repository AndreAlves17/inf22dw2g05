var sql = require("../utils/db");

const AlbumporArtista = (req, res) => {
  sql.query("SELECT * FROM Album WHERE idArtista = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = {AlbumporArtista};