import './Card.css';
import ItemCount from './ItemCount';

function Card({ product , price , img }) {
  return (
    <div className='card'>
        <h4>{product}</h4>
        <p>Precio: {price}</p>
        <img src={img} />
        <ItemCount />
    </div>
  );
}

export default Card;
