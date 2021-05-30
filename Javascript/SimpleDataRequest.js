// cd to /GPT-3_API/Javascript
// run node SimpleDataRequest.js
const axios = require('axios');

const fs = require('fs');
fs.readFile('../API_KEY.txt', 'utf8', function(err, apiKey) {
    if (err) throw err;

    const client = axios.create({
        headers: { 'Authorization': 'Bearer ' + apiKey }
    });

    client.get('https://api.openai.com/v1/engines')
    .then(result => {
        console.log(result.data);
    }).catch(err => {
        console.log(err.message);
    });
});