const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/auth');
const passport = require('../middlewares/passport');

const MusicasController = require('../controllers/MusicasController');
const ArtistaController = require('../controllers/ArtistaController');
const AlbumController = require('../controllers/AlbumController');
const AlbumporArtistaController = require('../controllers/AlbumporArtistaController');
const MusicasporArtistaController = require('../controllers/MusicasporArtistaController');
const MusicasporGeneroController = require('../controllers/MusicasporGeneroController');
const AuthController = require('../controllers/AuthController');


// ---------- MusicasController ----------

router.get('/Musicas/Count', MusicasController.countMusicas);
router.get('/Musicas', MusicasController.retrieveMusicas);
router.post('/Musicas', auth, MusicasController.createMusica);

router.get('/Musica/:id', MusicasController.retrievemusicas);
router.put('/Musica/:id', auth, MusicasController.updateMusica);
router.delete('/Musica/:id', auth, MusicasController.deleteMusica);

// ---------- ArtistasController ----------

router.get('/Artistas/Count', ArtistaController.countArtista);
router.get('/Artistas', ArtistaController.retrieveArtista);
router.post('/Artistas', auth, ArtistaController.createArtista);

router.get('/Artista/:id', ArtistaController.retrieveartista);
router.put('/Artista/:id', auth, ArtistaController.updateArtista);
router.delete('/Artista/:id', auth, ArtistaController.deleteArtista);

// ---------- AlbumController ----------

router.get('/Albums/Count', AlbumController.countAlbums);
router.get('/Albums', AlbumController.retrieveAlbums);
router.post('/Albums', auth, AlbumController.createAlbum);

router.get('/Album/:id', AlbumController.retrieveAlbum);
router.put('/Album/:id', auth, AlbumController.updateAlbum);
router.delete('/Album/:id', auth, AlbumController.deleteAlbum);



// ---------- AlbumporArtistaController ----------

router.get('/Artista/:id/Album', AlbumporArtistaController.AlbumporArtista);

// ---------- MusicasporArtistaController ----------

router.get('/Artista/:id/Musica',MusicasporArtistaController.MusicasporArtista);

// ---------- MusicasporGeneroController ----------

router.get('/genero/:genero/Musica', MusicasporGeneroController.MusicasporGenero);

// ---------- AuthController ----------

router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);


module.exports = router;