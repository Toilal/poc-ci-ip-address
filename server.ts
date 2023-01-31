import { createServer } from 'node:net'

const server = createServer(function (socket) {
  console.log(`Connected: ${socket.remoteAddress}:${socket.remotePort}`)
  socket.write('Echo server')
  socket.destroy()
  server.close()
})

const port = 5555
server.listen(port, '0.0.0.0')
console.log(`Listening on 0.0.0.0:${port}`)
