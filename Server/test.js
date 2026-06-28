const dns = require("dns").promises;

dns.resolveSrv("_mongodb._tcp.cluster0.xfwocsa.mongodb.net")
  .then(console.log)
  .catch(console.error);