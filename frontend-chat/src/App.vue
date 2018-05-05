<template>
  <div id="app">
    <h1>55555</h1>
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
  </div>
</template>

<script>
import dgram from 'dgram'
export default {
  name: 'App',
  methods: {
    conn () {
      var PORT = 33333
      var HOST = '127.0.0.1'
      var message = Buffer.from('My KungFu is Good!')
      const client = dgram.createSocket('udp4')
      client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err
        console.log('UDP message sent to ' + HOST + ':' + PORT)
        client.close()
      })
    }
  },
  created () {
    console.log('create')
    this.conn()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
