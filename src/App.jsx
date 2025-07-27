import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'; 

function App () {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo = {"Bienvenidos a Carbón y Leños Burger.  El mejor sabor con la calidad que nos caracteriza "} />
    </>
  )
}

export default App
