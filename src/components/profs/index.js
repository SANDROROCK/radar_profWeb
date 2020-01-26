import React from 'react';


function Prof(props){

const Base = "http://localhost:3333/files/";
const {prf} =props;
return(
    <li key={prf._id} className="prof-item">
    <header>
      <img src={`${Base}${prf.avatar_url}`} />
      <div className="user-info">
        <strong>{prf.name}</strong>
        <span>{prf.username}</span>
      </div>
    </header>
    <p>{prf.servicos}</p>
<p>{prf.bio}</p>
<p>{prf.telefone}</p>
    <button>Ver detalhes</button>
  </li>
)

}

export default  Prof;

