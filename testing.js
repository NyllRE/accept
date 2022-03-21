const fs = require('fs')
const http = require('http');

const key = JSON.parse( fs.readFileSync('./whatsapp-key.json') )

if (key.accepted == 'true') {
   console.log('key accepted');
} else {
   http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
      resp.on('data', function(ip) {
         console.log(ip + '\n' + key.message);
      });
   });
}
