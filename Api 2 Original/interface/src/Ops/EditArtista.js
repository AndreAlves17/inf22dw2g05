import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditArtista = ({
    artistas, handleEditArtista, editNomeArtista, setEditNomeArtista, editPais, setEditPais
}) => {
    const { id } = useParams();
    const artista = artistas.find(artista => (artista.id).toString() === id);

    useEffect(() => {
        if (artista) {
            setEditNomeArtista(artista.nome);
            setEditPais(artista.pais);
           

        }
    }, [artista, setEditNomeArtista, setEditPais])

    return (
        <div>
            {artista && <>
                <h2>Edit Artista #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Nome:</label>
                    <input class="form-control" type="text" required value={editNomeArtista} onChange={(e) => setEditNomeArtista(e.target.value)} />

                    <label class="form-label">País:</label>
                    <input class="form-control" type="text" required value={editPais} onChange={(e) => setEditPais(e.target.value)} />

                    
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditArtista(id)}>Submit</button>
                </form>
            </>}
            {!artista && <>
                <p>Missing Artista #{id}</p>
                <p>Check other <Link to='/Artistas'>Artistas</Link>!</p>
            </>}
        </div>
    )
}

export default EditArtista;