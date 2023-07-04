
const misProductos = [
    {id:"1", nombre: "Guardianes De La Galaxia", precio: 7000, img:"../images/product/guardianes.jpg", idCat: "Juegos"},
    {id:"2", nombre: "Super Mario Wonder", precio: 15000, img:"../images/product/supermariowonder.jpg", idCat: "Juegos"},
    {id:"3", nombre: "Just Dance 2023", precio: 12000, img:"../images/product/justd.webp", idCat: "Juegos"},


    {id:"4", nombre: "combo teclado mouse y auriculares", precio: 10000, img:"../images/product/tecla.jpg", idCat: "Utilidades"},
    {id:"5", nombre: "Joistyc pc", precio: 21000, img:"../images/product/jois.webp", idCat: "Utilidades"},    
    {id:"6", nombre: "Fuente 700w", precio: 16000, img:"../images/product/fuente.webp", idCat: "Utilidades"},
    {id:"7", nombre: "Water Cooling", precio: 24000, img:"../images/product/water.webp", idCat: "Utilidades"},
    {id:"8", nombre: "Ventilador pc", precio: 12000, img:"../images/product/ventilador.webp", idCat: "Utilidades"},
    {id:"9", nombre: "Placa de video rtx 3090", precio: 350000, img:"../images/product/3090.webp", idCat: "Utilidades"},
    {id:"10", nombre: "Placa madre ", precio: 14000, img:"../images/product/970.jpg", idCat: "Utilidades"},
    {id:"11", nombre: "Memoria ram 8gb Kingston", precio: 12000, img:"../images/product/ram.jpg", idCat: "Utilidades"},
    {id:"12", nombre: "Disco duro 1tb", precio: 11000, img:"../images/product/duro.jpg", idCat: "Utilidades"},
    {id:"13", nombre: "Disco rigido 1tb", precio: 15000, img:"../images/product/rigido.webp", idCat: "Utilidades"},


    {id:"14", nombre: "Telefono Nokia ", precio: 75000, img:"../images/product/nokiav.webp", idCat: "Celulares"},
    {id:"15", nombre: "Celular Nokia 1100", precio: 250000, img:"../images/product/1100.jpg", idCat: "Celulares"},
    {id:"16", nombre: "Celular Samguns A10", precio: 56000, img:"../images/product/a10.jpg", idCat: "Celulares"},
    {id:"17", nombre: "Celular Samguns A50", precio: 71000, img:"../images/product/a50.webp", idCat: "Celulares"},
    {id:"18", nombre: "Celular Xiaomi redmi note 8 pro", precio: 80000, img:"../images/product/x8pro.webp", idCat: "Celulares"},
    {id:"19", nombre: "Celular Xiaomi redmi 10", precio: 95000, img:"../images/product/x10.jpeg", idCat: "Celulares"},
    {id:"20", nombre: "Celular Motorola g7", precio: 60000, img:"../images/product/g7.webp", idCat: "Celulares"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}





