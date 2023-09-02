import { createContext, useState } from "react"

const DeckContext = createContext({});

const DeckContextProvider = ({children}) => {

    const [activeDeck, setActiveDeck] = useState([]);
    const [firstPlayerDeck, setFirstPlayerDeck] = useState([]);
    const [secondPlayerDeck, setSecondPlayerDeck] = useState([]);
    const [player1Power, setPlayer1Power] = useState(0);
    const [player2Power, setPlayer2Power] = useState(0);

    return (
        <DeckContext.Provider value={{ activeDeck, setActiveDeck, firstPlayerDeck, setFirstPlayerDeck, secondPlayerDeck, setSecondPlayerDeck, player1Power, setPlayer1Power, player2Power, setPlayer2Power }}>
            { children }
        </DeckContext.Provider>
    );
};

export { DeckContext, DeckContextProvider };