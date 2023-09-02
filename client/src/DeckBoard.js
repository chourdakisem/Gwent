import { useContext } from 'react';
import { DeckContext } from './ActiveDeck';

const DeckBoard = () => {

    const { firstPlayerDeck, secondPlayerDeck } = useContext(DeckContext);

    return (
        <div className='deck-board'>
            <div className='deck-graveyard'>
                <div id='player2-graveyard' className='graveyard'></div>
                <div id='player2-deck' className='deck'><span>{secondPlayerDeck.length}</span></div>
            </div>
            <div className='deck-graveyard'>
                <div id='player1-graveyard' className='graveyard'></div>
                <div id='player1-deck' className='deck'><span>{firstPlayerDeck.length}</span></div>
            </div>
        </div>
    );
};

export default DeckBoard;