import { useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item';

function ItemList() {

  const [info, setInfo] = useState([]);

  useEffect(()=>{
    setTimeout(() => {
      
      fetch('data.json') //Trae el Response completo
      .then((resp) => resp.json())//Extrae la informacion a utilizar de dentro de el Response
      .then((data) => setInfo(data))//Setear esa informacion en nuestro State
      .catch(err=>console.log(err))
    }, 2000)
  }, [])

  return (
    <div className='cuerpo'>
        {info && info.map(i => <Item product={i.nombre}  price={i.precio} stock={i.stock} imagen={i.img}/>)}
    </div>
  );
}

export default ItemList;
