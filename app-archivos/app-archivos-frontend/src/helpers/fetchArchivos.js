/**Función para los llamados al fetch */

export const fecthArchivos =  async  ( url ) => {
    return await fetch(url)
}

export const fetchArchivosNuevoDirectorio = async ( url, newRuta) => {
    const dataRuta = {
        newRuta: newRuta
    }
    return await fetch ( url, 
        {
            method: "POST", 
            body: JSON.stringify ( dataRuta ),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }
    )
}
