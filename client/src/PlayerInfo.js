import { useContext } from 'react';
import { DeckContext } from './ActiveDeck';

const PlayersInfo = () => {

    const { player1Power } = useContext(DeckContext);
    const { player2Power } = useContext(DeckContext);

    return (
        <>
            <div className='player-info'>
                <div className="leader-score-flex">
                    <div className='leader-card'></div>
                    <div className='player-score'>{player2Power}</div>
                </div>
                <div>
                    <p>Player 2</p>
                    <p>Northern Realms</p>
                    <div className='game-flex'>
                        <div className='cards'></div>
                        <p>10</p>
                        <div className='rounds'>
                            <div id='player2-round1' className='round'></div>
                            <div id='player2-round2' className='round'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='weather-and-pass'>
                <button className='upper-button'>Pass</button>
                <div className='weather-effects'></div>
                <button className='bottom-button'>Pass</button>
            </div>
            <div className='player-info'>
                <div className="leader-score-flex">
                    <div className='leader-card'></div>
                    <div className='player-score'>{player1Power}</div>
                </div>
                <div>
                    <p>Player 1</p>
                    <p>Northern Realms</p>
                    <div className='game-flex'>
                        <div className='cards'></div>
                        <p>10</p>
                        <div className='rounds'>
                            <div id='player1-round1' className='round'></div>
                            <div id='player1-round2' className='round'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayersInfo;