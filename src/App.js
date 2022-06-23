import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <Body/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
