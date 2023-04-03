const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`AGORA VA ATE UM SITE DE UPTIMEBOT E COLE O LINK ACIMA`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("SERVIDOR ESTA PRONTO!!" + Date.now()) });
}
 
module.exports = keepAlive;
