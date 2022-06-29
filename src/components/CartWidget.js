import "./CartWidget.css"
import carrito from '../assets/img/Carrito.png';


function CartWidget() {
    return (
<img src={carrito} className="carrito"></img>
    );
    
}

export default CartWidget;