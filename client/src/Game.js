import { useState, useEffect } from 'react';
import PlayersInfo from './PlayerInfo';
import CardsBoard from './CardsBoard';
import DeckBoard from './DeckBoard';

const Game = () => {
    return (
        <div className='game-grid'>
            <div className='player-board'>
                <PlayersInfo />
            </div>
            <div className='game-board'>
                <CardsBoard />
                <DeckBoard />
            </div>
        </div>
    );
};

export default Game;