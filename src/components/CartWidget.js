import "./CartWidget.css"
import carrito from '../assets/Carrito.jpg'

function CartWidget() {
    return (
<img src={carrito} className="carrito"></img>
    );
    
}

export default CartWidget;