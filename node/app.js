const button = require('node-dash-button')
const dash = button('f0:27:2d:0e:71:e8') // your button MAC address

dash.on('detected', function (){
  console.log('Button pressed!')
})
