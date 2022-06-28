
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import CounterComponent from "./components/Counter.jsx";
import Anime from './components/Anime.jsx';
import Animes from './components/Animes.jsx';
import AppHeader from './components/header/Header.jsx';
import CreateAnime from './components/createAnime.jsx';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<AppHeader />} >
          <Route path="" element={<CounterComponent />} />
          <Route path="animes" >
            <Route path="" element={<Animes />} />
            <Route path='createAnime' element={<CreateAnime />} />

            <Route path=":animeId" element={<Anime />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default observer(App) ;
