import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const albums = "http://localhost:3000/Albums";
const album = "http://localhost:3000/Album";

const request = axios.create({
    withCredentials: true,
  });

export default function Albums() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(albums).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteAlbum(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${album}/${deletedId}`).then(() => {
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
        <Link to={`/album/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Album</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="37%">Nome</th>
              <th width="36%">idArtistaAlbum</th>
              <th width="10%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id}</td>
                <td>{reg.nome}</td>
                <td>{reg.idartistaalbum}</td>
                
                <td>
                  <Link to={`/artista/${reg.id}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteAlbum}>
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