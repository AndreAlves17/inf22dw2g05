import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditMusica = ({
    musicas, handleEditMusica, editNome, setEditNome, editGenero, setEditGenero, editidArtista, setEditidArtista, 
    editdatadelancamento, setEditdatadelancamento, editidAlbum, setEditidAlbum
}) => {
    const { id } = useParams();
    const musica = musicas.find(musica => (musica.id).toString() === id);

    useEffect(() => {
        if (musica) {
            setEditNome(musica.nome);
            setEditGenero(musica.genero);
            setEditidArtista(musica.idartista);
            setEditdatadelancamento(musica.datadelancamento);
            setEditidAlbum(musica.idalbum);
            
        }
    }, [musica, setEditNome, setEditGenero, setEditidArtista, setEditdatadelancamento, setEditidAlbum])

    return (
        <div>
            {musica && <>
                <h2>Edit Musica #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Nome:</label>
                    <input class="form-control" type="text" required value={editNome} onChange={(e) => setEditNome(e.target.value)} />

                    <label class="form-label">Genero:</label>
                    <input class="form-control" type="text" required value={editGenero} onChange={(e) => setEditGenero(e.target.value)} />

                    <label class="form-label">ID Artista:</label>
                    <input class="form-control" type="number" required value={editidArtista} onChange={(e) => setEditidArtista(e.target.value)} />


                    <label class="form-label">Data de lancamento:</label>
                    <input class="form-control" type="number" required value={editdatadelancamento} onChange={(e) => setEditdatadelancamento(e.target.value)} />

                    <label class="form-label">ID Album:</label>
                    <input class="form-control" type="number" required value={editidAlbum} onChange={(e) => setEditidAlbum(e.target.value)} />

                    
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditMusica(id)}>Submit</button>
                </form>
            </>}
            {!musica && <>
                <p>Missing Musica #{id}</p>
                <p>Check other <Link to='/Musicas'>Musicas</Link>!</p>
            </>}
        </div>
    )
}

export default EditMusica