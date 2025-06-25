
import { useState } from 'react';
import './App.css'

function App() {
 
  let  [prenom, setPrenom] = useState("toto");
  let  [compt, setCompt] = useState(0);

  return (
    <>
      <div>
        {prenom}
        <div>
          {compt}
        </div>
        <button onClick={() => setPrenom("tata") }>Changer de prenom</button>
        <button onClick={() => setCompt(++compt) }>Incrémenter</button>

        <input 
          type="text" 
          onChange={ (e) => setPrenom(e.target.value)} 
        />
      </div>
    </>
  )
}


export default App
