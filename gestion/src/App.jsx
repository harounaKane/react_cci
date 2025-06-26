import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Article from './pages/article/Article'
import Detail from './pages/article/detail'
import Client from './pages/client/client'
import DetailClient from './pages/client/detail'
// import Commande from './pages/commande/Commande'
 
function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <main className="container-fluid">
        <Routes >
          <Route path="/Client" element={<Client />}/>
          <Route path="/client/:id/show" element={<DetailClient />}/>
          <Route path="/Article" element={<Article/>}/>
          <Route path="/article/:id/show" element={<Detail/>}/>
          {/* <Route path="/Commande" element={<Commande/>}/>   */}
        </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  )
}
 
export default App