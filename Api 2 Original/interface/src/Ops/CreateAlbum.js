const CreateAlbum = ({
    handleCreateAlbum, createNomeAlbum, setCreateNomeAlbum, createidArtistaAlbum, setCreateidArtistaAlbum
}) => {
  return (
    <main>
      <h2>Create Album</h2>
      <form class="form-group" onSubmit={handleCreateAlbum}>
        <label class="form-label">Nome:</label>
        <input class="form-control" type="text" required value={createNomeAlbum} onChange={(e) => setCreateNomeAlbum(e.target.value)}/>

        <label class="form-label">iD Artista Album:</label>	
        <input class="form-control" type="number" required value={createidArtistaAlbum} onChange={(e) => setCreateidArtistaAlbum(e.target.value)}/>

        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateAlbum;
