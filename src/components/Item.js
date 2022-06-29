import './Item.css';
import ItemCount from './ItemCount';

function Item(props) {
  return (
    <section className='Item'>
      <h4>{props.product}</h4>
      <p>Precio: ${props.price}</p>
      <p>Stock: {props.stock}</p>
      <ItemCount className='Item'/>
    </section>
  );
}

export default Item;
