import './App.css'
import BlogList from './components/BlogList'

function App() {


  return (
    <>
      <h1>Bog Liste</h1>
      <BlogList />
    </>
  )
}

export default App

/**
 * Créer une interface de blog simplifiée avec :
    Un composant ArticleCard qui affiche un article (titre, auteur, résumé, bouton)
    Un composant BlogList qui peut contenir plusieurs ArticleCard
    Utilisation de props pour personnaliser chaque carte
    Application d’un style CSS
 */