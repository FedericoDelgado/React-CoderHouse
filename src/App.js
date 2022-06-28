import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavbarComp from './components/NavbarComp'

function App() {
  return (
    <div>
      <NavbarComp/>
      <ItemListContainer greeting="Bienvendio, arme su pedido!"/>
      <Body/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
