const fetch = require('node-fetch');

fetch('https://example.com') .then(response => response.json())
 .then(data => { console.log(data) })
  .catch(err => ...)