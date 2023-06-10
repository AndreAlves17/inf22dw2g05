import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const musicas = "http://localhost:3000/Musicas";
const musica = "http://localhost:3000/Musica";

const request = axios.create({
    withCredentials: true,
  });

export default function Musicas() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(musicas).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteMusica(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${musica}/${deletedId}`).then(() => {
        regs.splice(
          regs.findIndex((el) => String(el.id) === String(deletedId)),
          1
        );
        setPosts(regs);
        setState({});
      });
    }
  
    if (!regs) return null;
    return (
      <div>
        <Link to={`/musica/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Musica</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="20%">Nome</th>
              <th width="15%">Genero</th>
              <th width="15%">idArtista</th>
              <th width="15%">Datadelancamento</th>
              <th width="15%">idAlbum</th>
              
              <th width="4%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id}</td>
                <td>{reg.nome}</td>
                <td>{reg.genero}</td>
                <td>{reg.idartista}</td>
                <td>{reg.datadelancamento}</td>
                <td>{reg.idalbum}</td>
                
                <td>
                  <Link to={`/musica/${reg.id}`}><button class="btn btn-primary">Update</button></Link>

                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteMusica}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }