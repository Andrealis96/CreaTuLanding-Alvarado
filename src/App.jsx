import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'; 
import '/app.css';

function App () {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo = {"Bienvenidos a Carbón y Leños Burger"} />
      <h6 className='text-center fw-bold fst-italic' > {" El mejor sabor con la calidad que nos caracteriza "} </h6>
    </>
  )
}

export default App
