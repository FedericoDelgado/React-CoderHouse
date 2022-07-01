import './ItemCount.css'
import { useState } from "react";
import Swal from 'sweetalert2';

function ItemCount({stock , initial}){
    const [num, setNum] = useState(initial);

    const sumar = () => {
        if (num < stock){
            setNum(num + 1)  
        } 
        else{
            Swal.fire({
                title: 'Atencion!',
                text: 'Ya ha llegado al stock máximo de este producto',
                icon: 'warning',
                timer:2000
              })
        }
    }

    const restar =() => {
        if(num>0){
        setNum(num - 1)
        }
    }

    const reiniciar = () => {
        setNum(initial)
    }

    const onAdd = () => {
        if (num > 0){
        {console.log ('Se agregan ' + num + ' Unidades')}
        {
        Swal.fire({
                title: 'Genial!',
                text: 'Agregaste ' + num + ' unidades',
                icon: 'success',
                timer:2000
              })
        }}
    }
    
    return (
        <>
          <div className='botonCarrito'>
          <button onClick={restar} className='left'> - </button>
          <div className='Total'>{num}</div>
          <button onClick={sumar} className='right'> + </button> 
          </div>
          <button onClick={reiniciar} className='Reiniciar'>Limpiar carrito</button>
          <button onClick={onAdd} className='Reiniciar'>{ num > 0 ? 'Agregar al carrito' : 'Elegi la cantidad'}</button>
        </>
    )
}
export default ItemCount;