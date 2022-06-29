import './ItemCount.css'
import { useState } from "react";

function ItemCount(){
    const [num, setNum] = useState(0);

    const sumar = () => {
        setNum(num + 1)   
    }

    const restar =() => {
        if(num>0){
        setNum(num - 1)
        }
    }

    const reiniciar = () => {
        setNum(0)
    }

    return (
        <>
          <div className='botonCarrito'>
          <button onClick={restar} className='left'> - </button>
          <div className='Total'>{num}</div>
          <button onClick={sumar} className='right'> + </button> 
          </div>
          <button onClick={reiniciar} className='Reiniciar'>Agregar al carrito</button>
        </>
    )
}
export default ItemCount;