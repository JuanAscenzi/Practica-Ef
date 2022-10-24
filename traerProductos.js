export const traerProductos = async() => {
    let response = await fetch('./Prod JD/JSON/productos.json')
    let data = await response.json()
    return await data

}