const feathers = require('feathers-client')
// const socketio = require('feathers-socketio/client');
const io = require('socket.io-client')
// const localstorage = require('feathers-localstorage');
// const hooks = require('feathers-hooks');
// const rest = require('feathers-rest/client');
// const authentication = require('feathers-authentication/client');

const HOST = 'http://localhost:3030'

const socket = io(HOST)

const app = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    .configure(feathers.authentication({
        storage: window.localStorage
    }))

export default app

export const service = (name) => app.service(name)
