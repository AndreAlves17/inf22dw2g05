var sql = require("../utils/db");

const MusicasporArtista = (req, res) => {
  sql.query("SELECT * FROM Musica WHERE idArtista = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = {MusicasporArtista};

