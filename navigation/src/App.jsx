import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Client from './pages/Client';
import Langages from './pages/Langages';
import Navigation from './components/Navigation';

function App() {

  let route = "/";
  switch(route){
    case "/": break;
    case "/accueil": break;
    case "client": break;
  }

  return (
    <BrowserRouter>
      <h1>Navigation</h1>
      <Navigation />
      <Routes>
        <Route path='/client' element={<Client />} />
        <Route path='/langage' element={<Langages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
