const CreateArtista = ({
    artistas, handleCreateArtista, createNomeArtista, setCreateNomeArtista, createPais, setCreatePais
}) => {
  return (
    <main>
      <h2>Create Artista</h2>
      <form class="form-group" onSubmit={handleCreateArtista}>
        <label class="form-label">Nome:</label>
        <input class="form-control" type="text" required value={createNomeArtista} onChange={(e) => setCreateNomeArtista(e.target.value)}/>

        <label class="form-label">Pais:</label>	
        <input class="form-control" type="text" required value={createPais} onChange={(e) => setCreatePais(e.target.value)}/>

  
        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateArtista;
