const readline = require('readline')
var PORT = 33333
var HOST = '192.168.1.20'
var dgram = require('dgram')
var user = {
  name: '',
  ip: '',
  port: ''
}
var msg = []
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('What do you think of Node.js? ', (answer) => {
    var message = new Buffer(answer)
    var client = dgram.createSocket('udp4')
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
        if (err) throw err
        console.log('UDP message sent to ' + HOST +':'+ PORT)
        client.close()
    })
    client.on('message', function (message, remote) {
      console.log(remote.address + ':' + remote.port +' - ' + message)
    })
    console.log(answer)
    rl.close()
  })
