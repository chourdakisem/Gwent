import { useReducer, useState, useEffect, useContext } from 'react';
import { DeckContext } from './ActiveDeck';
import PlayerCards from './PlayerCards';
import Combat from './Combat';
import Ranged from './Ranged';
import Siege from './Siege';

function reducer(state, action) {
    switch (action.type) {
        case 'setPlayer1Cards':
            return {...state, player1Cards: action.payload};
        case 'setPlayer2Cards': 
            return {...state, player2Cards: action.payload};
        case 'setPlayer1Combat':
            return {...state, player1Combat: action.payload};
        case 'setPlayer2Combat':
            return {...state, player2Combat: action.payload};
        case 'setPlayer1Ranged':
            return {...state, player1Ranged: action.payload};
        case 'setPlayer2Ranged':
            return {...state, player2Ranged: action.payload};
        case 'setPlayer1Siege':
            return {...state, player1Siege: action.payload};
        case 'setPlayer2Siege':
            return {...state, player2Siege: action.payload};
        default:
            throw new Error('action.type is not recognized');
    }
};

const CardsBoard = () => {

    const { firstPlayerDeck, setFirstPlayerDeck } = useContext(DeckContext); 
    const { secondPlayerDeck, setSecondPlayerDeck } = useContext(DeckContext);
    const { setPlayer1Power } = useContext(DeckContext);
    const { setPlayer2Power } = useContext(DeckContext);
    const [state, dispatch] = useReducer(reducer, {
        player1Cards: [],
        player1Combat: [],
        player1Ranged: [],
        player1Siege: [],
        player2Cards: [],
        player2Combat: [],
        player2Ranged: [],
        player2Siege: []
    });
    
    useEffect(() => {
        let array = [];
        let deck = firstPlayerDeck.slice();
        for (let i = 0; i < 10; i++) {
            const index = Math.floor(Math.random() * deck.length);
            if (deck[index]) {
                array.push(deck[index] ? deck.splice(index, 1)[0] : '');
                
            }
        }
        setFirstPlayerDeck(deck);
        dispatch({type: 'setPlayer1Cards', payload: array});
    }, []);

    useEffect(() => {
        let array = [];
        let deck = secondPlayerDeck.slice();
        for (let i = 0; i < 10; i++) {
            const index = Math.floor(Math.random() * deck.length);
            if (deck[index]) {
                array.push(deck[index] ? deck.splice(index, 1)[0] : '');
            }
        }
        setSecondPlayerDeck(deck);
        dispatch({type: 'setPlayer2Cards', payload: array});
    }, []);

    const handleClick1 = (item) => {
        console.log(item.type);
        if (item.type === 'combat') {
            dispatch({type: 'setPlayer1Combat', payload: [...state.player1Combat, item]});
        } else if (item.type === 'ranged') {
            dispatch({type: 'setPlayer1Ranged', payload: [...state.player1Ranged, item]});
        } else {
            dispatch({type: 'setPlayer1Siege', payload: [...state.player1Siege, item]});
        }
        const index = state.player1Cards.findIndex(element => element.name === item.name);
        if (index < 0) return;
        const cards = state.player1Cards.toSpliced(index, 1);
        dispatch({type: 'setPlayer1Cards', payload: cards});
    };

    const handleClick2 = (item) => {
        if (item.type === 'combat') {
            dispatch({type: 'setPlayer2Combat', payload: [...state.player2Combat, item]});
        } else if (item.type === 'ranged') {
            dispatch({type: 'setPlayer2Ranged', payload: [...state.player2Ranged, item]});
        } else if (item.type === 'siege') {
            dispatch({type: 'setPlayer2Siege', payload: [...state.player2Siege, item]});
        } 

        const index = state.player2Cards.findIndex(element => element.name === item.name);
        if (index < 0) return;
        const cards = state.player2Cards.toSpliced(index, 1);
        dispatch({type: 'setPlayer2Cards', payload: cards});
    };

    useEffect(() => {
        const player1CombatPower = state.player1Combat.reduce((a, b) => a + b.power, 0);
        const player1RangedPower = state.player1Ranged.reduce((a, b) => a + b.power, 0);
        const player1SiegePower = state.player1Siege.reduce((a, b) => a + b.power, 0);
        setPlayer1Power(player1CombatPower + player1RangedPower + player1SiegePower);
        const player2CombatPower = state.player2Combat.reduce((a, b) => a + b.power, 0);
        const player2RangedPower = state.player2Ranged.reduce((a, b) => a + b.power, 0);
        const player2SiegePower = state.player2Siege.reduce((a, b) => a + b.power, 0);
        setPlayer2Power(player2CombatPower + player2RangedPower + player2SiegePower);
    }, [state])

    return (
        <div className='game-btlfld'>
            <PlayerCards 
                handleClick={handleClick2}
                playerCards={state.player2Cards}
            />
            <Siege siege={state.player2Siege} />
            <Ranged ranged={state.player2Ranged} />
            <Combat combat={state.player2Combat} />
            <Combat combat={state.player1Combat} />
            <Ranged ranged={state.player1Ranged} />
            <Siege siege={state.player1Siege} />
            <PlayerCards 
                handleClick={handleClick1}
                playerCards={state.player1Cards}
            />
        </div>
    );
};

export default CardsBoard;