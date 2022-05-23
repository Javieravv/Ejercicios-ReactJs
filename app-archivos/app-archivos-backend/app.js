/**Servidor de backend que permitirá devolver información de lo que hay
 * en los directorios.
 * 
 */
const Server = require('./models/server')

/**Aplicación principal */
require('dotenv').config()

const server = new Server()


// levantamos el servidor.
server.listen()
