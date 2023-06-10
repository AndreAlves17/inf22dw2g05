import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Musica from "./Resources/Musica";
import EditMusica from "./Ops/EditMusica";
import CreateMusica from "./Ops/CreateMusica";

import Artista from "./Resources/Artista";
import EditArtista from "./Ops/EditArtista";
import CreateArtista from "./Ops/CreateArtista";

import Album from "./Resources/Album";
import EditAlbum from "./Ops/EditAlbum";
import CreateAlbum from "./Ops/CreateAlbum";



const request = axios.create({
  withCredentials: true,
});

const api = request.create({
  baseURL: "http://localhost:3000/",
});

const App = () => {
  // ----------------------------------------------------- HandleEditCar -----------------------------------------------------
  //Definição de estados para props para a Ediçao do carro
  const navigate = useNavigate();
  const [editNome, setEditNome] = useState("");
  const [editGenero, setEditGenero] = useState("");
  const [editidArtista, setEditidArtista] = useState("");
  const [editdatadelancamento, setEditdatadelancamento] = useState("");
  const [editidAlbum, setEditidAlbum] = useState("");
 

  const [musicas, setPosts] = React.useState([]);

  //fetchCars para popular array de carros
  React.useEffect(() => {
    const fetchMusicas = async () => {
      const response = await api.get("/Musicas");
      setPosts(response.data);
    };
    fetchMusicas();
  }, []);

  //função handleEditCar
  const handleEditMusica = async (id) => {
    const updatedMusica = {
      id,
      nome: editNome,
      genero: editGenero,
      idartista: editidArtista,
      datadelancamento: editdatadelancamento,
      idalbum: editidAlbum,
     
    };
    try {
      const response = await api.put(`Musica/${id}`, updatedMusica);
      setPosts(musicas.map((musica) => (musica.id === id ? { ...response.data } : musica)));
      setEditNome("");
      setEditGenero("");
      setEditidArtista("");
      setEditdatadelancamento("");
      setEditidAlbum("");
      
      navigate("/Musicas");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleEditCar -----------------------------------------------------
  // -----------------------------------------------------  HandleCreateCar -----------------------------------------------------
  const [createNome, setCreateNome] = useState("");
  const [createGenero, setCreateGenero] = useState("");
  const [createidArtista, setCreateidArtista] = useState("");
  const [createdatadelancamento, setCreatedatadelancamento] = useState("");
  const [createidAlbum, setCreateidAlbum] = useState("");
  

  const handleCreateMusica = async (e) => {
    e.preventDefault();
    const createMusica = {
      nome: createNome,
      genero: createGenero,
      idartista: createidArtista,
      datadelancamento: createdatadelancamento,
      idalbum: createidAlbum,
      
    };
    try {
      const response = await api.post("/Musicas", createMusica);
      const allMusicas = [...musicas, response.data];
      setPosts(allMusicas);
      setCreateNome("");
      setCreateGenero("");
      setCreateidArtista("");
      setCreatedatadelancamento("");
      setCreateidAlbum("");
     
      navigate("/Musicas");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // ----------------------------------------------------- Fim HandleCreateCar -----------------------------------------------------
  // ----------------------------------------------------- HandleEditEngine -----------------------------------------------------
  const [editNomeArtista, setEditNomeArtista] = useState("");
  const [editPais, setEditPais] = useState("");
 

  const [artistas, setArtistas] = React.useState([]);

  //fetchCars para popular array de carros
  React.useEffect(() => {
    const fetchArtistas = async () => {
      const response = await api.get("/Artistas");
      setArtistas(response.data);
    };
    fetchArtistas();
  }, []);

  //função handleEditCar
  const handleEditArtista = async (id) => {
    const updatedArtista = {
      id,
      nome: editNomeArtista,
      pais: editPais,
      
    };
    try {
      const response = await api.put(`Artista/${id}`, updatedArtista);
      setPosts(
        artistas.map((artista) =>
          artista.id === id ? { ...response.data } : artista
        )
      );
      setEditNomeArtista("");
      setEditPais("");
      
      navigate("/Artistas");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleEditEngine -----------------------------------------------------
  // -----------------------------------------------------  HandleCreateCar -----------------------------------------------------
  const [createNomeArtista, setCreateNomeArtista] = useState("");
  const [createPais, setCreatePais] = useState("");


  const handleCreateArtista = async (e) => {
    e.preventDefault();
    const createArtista = {
      nome: createNomeArtista,
      pais: createPais,
      
    };
    try {
      const response = await api.post("/Artistas", createArtista);
      const allArtistas = [...artistas, response.data];
      setPosts(allArtistas);
      setCreateNomeArtista("");
      setCreatePais("");
      
      navigate("/Pais");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // ----------------------------------------------------- Fim HandleCreateCar -----------------------------------------------------
  
  // ----------------------------------------------------- HandleEditManufacturer -----------------------------------------------------
  const [editNomeAlbum, setEditNomeAlbum] = useState("");
  const [editidArtistaAlbum, setEditidArtistaAlbum] = useState("");
  

  const [albums, setAlbums] = React.useState([]);

  React.useEffect(() => {
    const fetchAlbums = async () => {
      const response = await api.get("/Albums");
      setAlbums(response.data);
    };
    fetchAlbums();
  }, []);

  const handleEditAlbum = async (id) => {
    const updatedAlbum = {
      id,
      nome: editNomeAlbum,
      idartistaalbum: editidArtistaAlbum,
      
    };
    try {
      const response = await api.put(`Album/${id}`, updatedAlbum);
      setAlbums(
        albums.map((album) =>
          album.id === id ? { ...response.data } : album
        )
      );
      setEditNomeAlbum("");
      setEditidArtistaAlbum("");
      
      navigate("/Albums");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleEditManufacturer -----------------------------------------------------
  // ----------------------------------------------------- HandleCreateManufacturer -----------------------------------------------------
  const [createNomeAlbum, setCreateNomeAlbum] = useState("");
  const [createidArtistaAlbum, setCreateidArtistaAlbum] = useState("");
  

  const handleCreateAlbum = async (e) => {
    e.preventDefault();
    const createAlbum = {
      nome: createNomeAlbum,
      idartistaalbum: createidArtistaAlbum,
      
    };
    try {
      const response = await api.post("/Albums", createAlbum);
      const allAlbums = [...albums, response.data];
      setAlbums(allAlbums);
      setCreateNomeAlbum("");
      setCreateidArtistaAlbum("");
      
      navigate("/Albums");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // ----------------------------------------------------- Fim HandleCreateManufacturer -----------------------------------------------------

  return (
    <div className="app">
      <h1>Musicas</h1>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/artistas" element={<Artista />}></Route>
        <Route exact path="/musicas" element={<Musica />}></Route>
        <Route exact path="/albums" element={<Album />}></Route>
        
        <Route
          path="/musica/:id"
          element={
            <EditMusica
              musicas={musicas}
              handleEditMusica={handleEditMusica}
              editNome={editNome}
              setEditNome={setEditNome}
              editGenero={editGenero}
              setEditGenero={setEditGenero}
              editidArtista={editidArtista}
              setEditidArtista={setEditidArtista}
              editdatadelancamento={editdatadelancamento}
              setEditdatadelancamento={setEditdatadelancamento}
              editidAlbum={editidAlbum}
              setEditidAlbum={setEditidAlbum}
            />
          }
        ></Route>
        <Route
          exact
          path="/musica/create"
          element={
            <CreateMusica
              musicas={musicas}
              handleCreateMusica={handleCreateMusica}
              createNome={createNome}
              setCreateNome={setCreateNome}
              createGenero={createGenero}
              setCreateGenero={setCreateGenero}
              createidArtista={createidArtista}
              setCreateidArtista={setCreateidArtista}
              createdatadelancamento={createdatadelancamento}
              setCreatedatadelancamento={setCreatedatadelancamento}
              createidAlbum={createidAlbum}
              setCreateidAlbum={setCreateidAlbum}
            />
          }
        ></Route>
        <Route
          path="/artista/:id"
          element={
            <EditArtista
              artistas={artistas}
              handleEditArtista={handleEditArtista}
              editNomeArtista={editNomeArtista}
              setEditNomeArtista={setEditNomeArtista}
              editPais={editPais}
              setEditPais={setEditPais}
             
            />
          }
        ></Route>
        <Route
          exact
          path="/artista/create"
          element={
            <CreateArtista
              artistas={artistas}
              handleCreateArtista={handleCreateArtista}
              createNomeArtista={createNomeArtista}
              setCreateNomeArtista={setCreateNomeArtista}
              createPais={createPais}
              setCreatePais={setCreatePais}
              
            />
          }
        ></Route>
        <Route
          path="/album/:id"
          element={
            <EditAlbum
              albums={albums}
              handleEditAlbum={handleEditAlbum}
              editNomeAlbum={editNomeAlbum}
              setEditNomeAlbum={setEditNomeAlbum}
              editidArtistaAlbum={editidArtistaAlbum}
              setEditidArtistaAlbum={setEditidArtistaAlbum}

            />
          }
        ></Route>
        <Route
          exact
          path="/album/create"
          element={
            <CreateAlbum
              albums={albums}
              handleCreateAlbum={handleCreateAlbum}
              createNomeAlbum={createNomeAlbum}
              setCreateNomeAlbum={setCreateNomeAlbum}
              createidArtistaAlbum={createidArtistaAlbum}
              setCreateidArtistaAlbum={setCreateidArtistaAlbum}

            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/artistas">Artistas</NavLink>
      </li>
      <li>
        <NavLink to="/musicas">Musicas</NavLink>
      </li>
      <li>
        <NavLink to="/albums">Albums</NavLink>
      </li>
      
      <li>
        <a href="http://localhost:3000/auth/github"><i class="bi bi-github"></i> Login with GitHub</a>
      </li>
    </ul>
  </nav>
);

// ------------------------------- VISTAS -------------------------------

const Home = () => (
  <div className="home">
    <h1>Musicas Interface</h1>
  </div>
);

// ----------------------------- FIM VISTAS -----------------------------

export default App;
