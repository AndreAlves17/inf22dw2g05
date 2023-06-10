import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const artistas = "http://localhost:3000/Artistas";
const artista = "http://localhost:3000/Artista";

const request = axios.create({
    withCredentials: true,
  });

export default function Artistas() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(artistas).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteArtista(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${artista}/${deletedId}`).then(() => {
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
        <Link to={`/artista/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Artista</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="30%">Nome</th>
              <th width="30%">País</th>
             
              <th colspan="2" width="10%"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id}</td>
                <td>{reg.nome}</td>
                <td>{reg.pais}</td>
                
                <td>
                  <Link to={`/artista/${reg.id}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteArtista}>
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