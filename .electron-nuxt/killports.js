
const kill = require('kill-port')
const http = require('http')
kill(5858, 'tcp')

// Currently you can kill ports running on TCP or UDP protocols
kill(9080, 'tcp')

 
