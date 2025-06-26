
import { BrowserRouter } from 'react-router-dom'
// import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  )
}

export default App
