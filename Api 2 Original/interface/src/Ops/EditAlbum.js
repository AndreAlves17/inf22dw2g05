import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditAlbum = ({
    albums, handleEditAlbum, editNomeAlbum, setEditNomeAlbum, editidArtistaAlbum, setEditidArtistaAlbum
}) => {
    const { id } = useParams();
    const album = albums.find(album => (album.id).toString() === id);

    useEffect(() => {
        if (album) {
            setEditNomeAlbum(album.nome);
            setEditidArtistaAlbum(album.idartistaalbum);
          
        }
    }, [album, setEditNomeAlbum, setEditidArtistaAlbum])

    return (
        <div>
            {album && <>
                <h2>Edit Album #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Nome:</label>
                    <input class="form-control" type="text" required value={editNomeAlbum} onChange={(e) => setEditNomeAlbum(e.target.value)} />

                    <label class="form-label">ID Artista Album:</label>
                    <input class="form-control" type="number" required value={editidArtistaAlbum} onChange={(e) => setEditidArtistaAlbum(e.target.value)} />

                    
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditAlbum(id)}>Submit</button>
                </form>
            </>}
            {!album && <>
                <p>Missing Album #{id}</p>
                <p>Check other <Link to='/Albums'>Albums</Link>!</p>
            </>}
        </div>
    )
}

export default EditAlbum;