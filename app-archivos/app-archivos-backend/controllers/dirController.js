// Controladores para las rutas de los usuarios
const { response: res, request: req } = require ('express')
const path = require ('path')
const fs = require('fs')


const getFilesAndDirectorios = ( contenidoDirectorio, dirDefecto ) => {
    const objAcc = {
        archivos: [],
        directorios: []
    }

    contenidoDirectorio.forEach( file => {
        let claseFila = fs.statSync ( dirDefecto +'/' + file )  
        let isDir = claseFila.isDirectory()
        if ( isDir ) {
            objAcc.directorios = objAcc.directorios.concat ( file )
        } else {
            objAcc.archivos = objAcc.archivos.concat ( {
                name: file,
                size: claseFila.size,
                fechaCreacion: claseFila.birthtimeMs,
                fechaModificacion: claseFila.mtime,
                pathFile: dirDefecto,
                extension: path.extname (file)
            } )
        }
    })
    return objAcc
}

const getContenidoDirectorio = ( dirLeer ) => {
    return contentDirectorio = fs.readdirSync ( dirLeer )
}


const dirGet = async (req, res) => {
    // recuperamos los params. También se puede desestructurar
    const dirDefecto = __dirname
    const contentDirectorio = getContenidoDirectorio ( dirDefecto )
    const FilesAndDirectorios =  getFilesAndDirectorios ( contentDirectorio, dirDefecto )

    res.json({
        ok: true,
        message: "Controlador - Petición GET a la app Archivos",
        dirDefecto: __dirname, 
        separador: path.sep,
        archivos: FilesAndDirectorios.archivos,
        directorios: FilesAndDirectorios.directorios,
    })
}

const dirGetDirectorio = (req, res) => {
    // recuperamos los params. También se puede desestructurar
    const body   = req.body
    const { newRuta } = body
    // armamos la ruta a partir del body
    const sep = path.sep;
    let rutaDir = sep
    newRuta.forEach ( dirRuta => {
        rutaDir = rutaDir + dirRuta + sep
    })
    
    const contentDirectorio = getContenidoDirectorio ( rutaDir )
    const FilesAndDirectorios =  getFilesAndDirectorios ( contentDirectorio, rutaDir )

    res.json({
        ok: true,
        message: "Controlador - Petición POST a la app Archivos",
        rutaDir,
        archivos: FilesAndDirectorios.archivos,
        directorios: FilesAndDirectorios.directorios,
    })
}


module.exports = {
    dirGet,
    dirGetDirectorio
}