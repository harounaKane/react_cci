import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Client from './pages/Client';
import Langages from './pages/Langages';
import Navigation from './components/Navigation';
import DetailLangage from './pages/DetailLangage';

function App() {

  return (
    <BrowserRouter>
      <h1>Navigation</h1>
      <Navigation />
      <Routes>
        <Route path='/client' element={<Client />} />
        <Route path='/langage' element={<Langages />} />
        <Route path='/langage/:id' element={<DetailLangage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
