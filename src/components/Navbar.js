import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
  return (
        <header className='navbar'>
        <h1>Fixar Sistemas</h1>
        <button>Home</button>
        <p>Nosotros</p>
        <a src="#">Tienda</a>
        <button>Login</button>
        <CartWidget />
    </header>
  );
}

export default Navbar;
