import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

//dado para pesquisa
type FormData = {
  usuario: string;
};

//Getresultados
type InfoUsuario = {
  html_url: string; //html_url
  followers: string; //followers
  location: string; //location
  name: string; //name
  avatar_url: string
};

const UsuarioSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
  });

  const [infoUsuario, setInfoUsuario] = useState<InfoUsuario>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('Mudou para: ' + event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //https://api.github.com/users/acenelio
    axios
      .get(`https://api.github.com/users/${formData.usuario}`)
      .then((response) => {
        setInfoUsuario(response.data);
        console.log(response.data);
      })
      .catch(() => {
        setInfoUsuario(undefined);
      });
  };

  return (
    <>
      <div className="usuario-search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      <div className="info-container">
        <div className="info-img">
          <img src={infoUsuario && infoUsuario?.avatar_url} alt="perfil" />
        </div>

        <div className="info-content">
            <h4>Informações</h4>

          {infoUsuario && (
            <>
              <ResultCard
                title="Perfil: "
                description={infoUsuario?.html_url}
              />
              <ResultCard
                title="Seguidores: "
                description={infoUsuario?.followers}
              />
              <ResultCard
                title="Localidade: "
                description={infoUsuario?.location}
              />
              <ResultCard title="Nome: " description={infoUsuario?.name} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UsuarioSearch;
