import Contador from '../contador/Contador'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3 className='text-center' > {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <Link className='btnProducto text-center' to={`/item/${id}`} > Detalles Del Producto</Link>
    </div>
  )
}

export default Item