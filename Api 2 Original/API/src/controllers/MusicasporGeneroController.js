var sql = require("../utils/db");

const MusicasporGenero = (req, res) => {
  sql.query("SELECT * FROM Musica WHERE genero = ?", [req.body.genero], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = {MusicasporGenero};