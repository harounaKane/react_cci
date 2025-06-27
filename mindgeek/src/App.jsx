import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Mutualise from "./pages/Mutualise"

function App() {
 
  return (
    <BrowserRouter>
      <Header />

      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mutualise" element={<Mutualise />} />
        </Routes>
      </main>    

      <Footer />
    </BrowserRouter>
  )
}

export default App
