import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>{nombre} </h2>
        <h3>ID: {id} </h3>
        <h3>Precio: {precio} </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente laudantium consequatur ipsum unde inventore illum nam repellat quae mollitia explicabo. Non vitae similique eaque iusto natus, facere quo ducimus libero!</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail