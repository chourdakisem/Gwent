import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Deck from './Deck';
import Game from './Game';
import { DeckContextProvider } from './ActiveDeck';

function App() {

  return (
    <DeckContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='deck' element={<Deck />} />
          <Route path='game' element={<Game />} />
        </Routes> 
      </BrowserRouter> 
    </DeckContextProvider>
  )
};

export default App;
