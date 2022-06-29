import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavbarComp from './components/NavbarComp';
import Container from './components/Container/container';

function App() {
  return (
    <div>
      <NavbarComp/>
      <ItemListContainer Bienvenida="Bienvenido, arme su pedido!"/>
      <ItemList/>
      {/* <Container/> */}
    </div>
  );
}

export default App;
