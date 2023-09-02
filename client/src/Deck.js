import { useState, useContext } from 'react';
import { DeckContext } from './ActiveDeck';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Deck = () => {

    const navigate = useNavigate();
    const [deck, setDeck] = useState([]);
    const { activeDeck, setActiveDeck } = useContext(DeckContext);
    const { firstPlayerDeck, setFirstPlayerDeck } = useContext(DeckContext);
    const { setSecondPlayerDeck } = useContext(DeckContext);
    const [ready, setReady] = useState(false);

    const getDeck = async (deck) => {
        const response = await fetch('http://localhost:5000/deck', {
            method: 'Post', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({deck: deck})
        });

        if (response.ok) {
            const json = await response.json();
            setDeck(json);
            console.log(deck);
        }
    };

    const rightClick = (item) => {
        if(item.unique_card === 'unique') {
            console.log('unique');
            if (activeDeck.filter(element => element.unique_card === 'unique').length < 2 && activeDeck.length < 30 && activeDeck.filter(element => element.name === item.name).length < item.no) {
                setActiveDeck([...activeDeck, item]);
            }
            return;
        }

        if (item.type === 'special') {
            if (activeDeck.filter(element => element.type === 'special').length < 10 && activeDeck.length < 30 && activeDeck.filter(element => element.name === item.name).length < item.no) {
                setActiveDeck([...activeDeck, item]);
            }
            return;
        }
        if (activeDeck.filter(element => element.name === item.name).length < item.no && activeDeck.length < 30) {
            setActiveDeck([...activeDeck, item]);
        }
    };

    const leftClick = (item) => {
        const index = activeDeck.findIndex(element => element.name === item.name);
        if (index < 0) {
            return;
        }
        const newDeck = activeDeck.toSpliced(index, 1);
        setActiveDeck(newDeck);
    };

    const setDecks = () => {
        if (ready) {
            setSecondPlayerDeck(activeDeck);
            setActiveDeck([]);
            setReady(false);
            navigate('/game');
            return;
        }
        setFirstPlayerDeck(activeDeck);
        setActiveDeck([]);
        setReady(true);
        navigate('/deck');
    };

    console.log(firstPlayerDeck);

    return (
        <>
            <div className='deck-flex'>
                <div className='deck-choice'>
                    <ul>
                        <li><button onClick={() => getDeck('northern_realms')}>Northern Realms deck</button></li>
                        <li><button>Nilfgaardian Empire deck</button></li>
                        <li><button>Monsters deck</button></li>
                        <li><button>Scoia'tael deck</button></li>
                    </ul>
                    {deck[0] && <div className='deck-info'>
                        <p>Total cards in deck {activeDeck.length}/30</p>
                        <p>Number of unit cards {activeDeck.filter(element => element.type !== 'special').length}</p>
                        <p>Special cards {activeDeck.filter(element => element.type === 'special').length}/10</p>
                        <p>Unique cards {activeDeck.filter(element => element.unique_card === 'unique').length}/2</p>
                        <p>Hero cards {activeDeck.filter(element => element.ability === 'Hero' || element.ability.split(' ').includes('Hero')).length}</p>
                    </div>}
                    {deck[0] && <button onClick={setDecks} className='deck-btn' disabled={activeDeck[0] === undefined}>Ready</button>}
                </div>
                <div className='deck-grid'>
                    {deck.map(item => {
                        return (
                            <div className='card' key={item.id}>
                                <img src={item.url} />
                                <div className='choose-card'>
                                    <FaAngleLeft 
                                        className='fa-angle-left' 
                                        role='button'
                                        onClick = {() => leftClick(item)}
                                    />
                                    {activeDeck.filter(element => element.name === item.name).length}/{item.no}
                                    <FaAngleRight 
                                        className='fa-angle-right' 
                                        role='button'
                                        onClick = {() => rightClick(item)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Deck;