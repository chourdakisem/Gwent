import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const chooseDeck = () => {
        navigate('/deck');
    }

    return (
        <div className='home-flex'>
            <button onClick={chooseDeck}>Choose your deck</button>
        </div>
    );
};

export default Home;