const CreateMusica = ({
    musicas, handleCreateMusica, createNome, setCreateNome, createGenero, setCreateGenero, createidArtista, setCreateidArtista, 
    createdatadelancamento, setCreatedatadelancamento, createidAlbum, setCreateidAlbum
}) => {
  return (
    <main>
      <h2>Create Musica</h2>
      <form class="form-group" onSubmit={handleCreateMusica}>
        <label class="form-label">Nome:</label>
        <input class="form-control" type="text" required value={createNome} onChange={(e) => setCreateNome(e.target.value)}/>

        <label class="form-label">Genero:</label>	
        <input class="form-control" type="text" required value={createGenero} onChange={(e) => setCreateGenero(e.target.value)}/>

        <label class="form-label">ID Artista:</label>	
        <input class="form-control" type="text" required value={createidArtista} onChange={(e) => setCreateidArtista(e.target.value)}/>

        <label class="form-label">Data de lancamento:</label>	
        <input class="form-control" type="text" required value={createdatadelancamento} onChange={(e) => setCreatedatadelancamento(e.target.value)}/>

        <label class="form-label">ID Album:</label>	
        <input class="form-control" type="text" required value={createidAlbum} onChange={(e) => setCreateidAlbum(e.target.value)}/>

        
        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateMusica;
