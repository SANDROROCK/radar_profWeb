import React, { useState, useEffect, useMemo } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import '../../global.css';
import './Sidebar.css';
import './style.css';
import api from '../../services/api';
import camera from '../../assets/camera.svg';
import Prof from '../../components/profs';
import InputMask from "react-input-mask";




function Home() {


  const dispatch = useDispatch();

  const [profs, setProfs] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [userName, setUserName] = useState('');
  const [servicos, setServicos] = useState([]);
  const [bio, setBio] = useState('');
  const [telefone, setTelefone] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');
 

  const preview = useMemo(
    () => {
      return avatar_url ? URL.createObjectURL(avatar_url) : null;
    },
    [avatar_url]
  );

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

      }, (err) => {
        console.log(err)
      }, {
      timeout: 30000
    });

    handleAtt();
  }, [])

  async function handleAtt() {

    dispatch({
      type:'ADD_TASK'
    })
     
    
  }


  async function handleAddProf(e) {

    e.preventDefault();

    const data = new FormData();

    data.append('avatar_url', avatar_url);
    data.append('latitude', latitude);
    data.append('longitude', longitude);
    data.append('username', userName);
    data.append('servicos', servicos);
    data.append('bio', bio);
    data.append('telefone', telefone);

    await api.post('/prof', data);
    handleAtt();

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddProf}>

          <div className="input-avatar">
            <label id="avatar"
              style={{ backgroundImage: `url(${preview})` }}
              className={avatar_url ? "avata_url" : ""}
            >
              <input type="file" onChange={event => setAvatarUrl(event.target.files[0])} />
              <img src={camera} alt="Select img" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="username">Usuario</label>

            <input
              name="username"
              id="username"
              required
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </div>

  <div className="input-block">
            <label htmlFor="telefone">Telefone</label>

            <InputMask
            mask='(99) 9999-9999'
              type="fone"
              name="telefone"
              id="telefone"
              required
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
            />
          </div>

          <div className="input-block">

            <label htmlFor="servicos">Serviços</label>

            <input
              name="servicos"
              id="servicos"
              required
              value={servicos}
              onChange={e => setServicos(e.target.value)} />
          </div>

          <div className="input-block">

            <label htmlFor="bio">Conte-nos sobre seus serviços</label>

            <input
              name="bio"
              id="bio"
              required
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>

              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>

              <input
                ype="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {profs.map(prf => (
            <Prof  prf={prf} key={prf._id} />
          ))}
        </ul>
      </main>

    </div>
  );
}

export default Home;
