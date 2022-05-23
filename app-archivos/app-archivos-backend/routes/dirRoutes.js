/**Por ejemplo rutas relacionadas con los usuarios. */

const { Router } = require ('express')
const { dirGet,
    dirGetDirectorio
 } = require('../controllers/dirController')

const router = Router()

// en el router se configuran las rutas
// Ruta para obtener la información del directorio por defecto
router.get('/',  dirGet)

// ruta para obtener los archivos y directorios del directorio que viene
// en el body
router.post('/archdir',  dirGetDirectorio )

module.exports = router;