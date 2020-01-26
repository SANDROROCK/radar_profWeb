import React from 'react';
import {Link} from 'react-router-dom';
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
                <Link to='/home'>
                <button>Entrar</button>
                </Link>
            </form>
        </div>

    </div>
  );
}
