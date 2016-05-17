'use strict'
let https = require('https')

console.log('Running Lambda function...')

exports.handler = (event, context, callback) => {

  console.log('Received event:', JSON.stringify(event, null, 2));

  let authToken = '<TOKEN_GOES_HERE>'

  let options = {
    hostname: 'aws-iot-button.firebaseio.com',
    path: '/events.json?auth=' + authToken,
    method: 'POST',
    headers: {
      'Content-Type': 'application-json'
    }
  }

  let req = https.request(options, (res) => {
    res.setEncoding('utf8')
    res.on('data', function(body) {
      console.log(JSION)
      callback()
    })
  })

  req.on('error', (e) => {
    console.log('problem with request: ' + e.message)
  })

  let data = event
  data['timestamp'] = Date.now()
  req.write(JSON.stringify(data))
  req.end()

}
