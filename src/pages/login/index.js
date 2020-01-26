import React from 'react';

import  './style.css';

export default function Login() {
  return (
    <div className="containerlogin">

        <div id="boxlogin">
            <form id="login">
                <label>Nome Usuario</label>
                <input type="text"></input>
                <label>Senha </label>
                <input></input>
                <button>Entrar</button>
            </form>
        </div>

    </div>
  );
}
