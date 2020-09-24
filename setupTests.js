const net = require('net')

const server = net.createServer()
server.listen()

afterAll(() => {
  console.log('all tests run')
  server.close()
})
