var si = require('systeminformation');

// callback style
si.cpu(function(data) {
    console.log('CPU-Information:');
    console.log(data);
})

// promises style - new in version 3
si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
