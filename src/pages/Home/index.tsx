import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h2>Desafio Github API</h2>
                <p>Bootcamp Spring React - DevSuperior</p>
            </div>
            <Link to="/cepsearch">
                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
