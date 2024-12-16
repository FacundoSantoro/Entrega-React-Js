import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/Itemlistcontainer'

function App() {
  return (
    <>
    <body>
    <header>
      <Navbar color="purple"></Navbar>
    </header>
    <section>
      <ItemListContainer texth1="Bienvenidos a mi ecommerce" textp="Proximamente vendrá más contenido de calidad..."></ItemListContainer>
    </section>
    </body>
    </>
  )
}

export default App
