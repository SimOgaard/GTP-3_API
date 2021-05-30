// cd to /GPT-3_API/Javascript
// run node SimpleSearch.js
const axios = require('axios');

const fs = require('fs');
fs.readFile('../API_KEY.txt', 'utf8', function(err, apiKey) {
    if (err) throw err;

    const client = axios.create({
        headers: { 'Authorization': 'Bearer ' + apiKey }
    });

    const data = {
        "documents": [
            "Space Shooters",
            "GTA 5",
            "pewdiepie",
            "Mark Zuckerberg"
        ],
        "query": "A videogame"
    }

    client.post('https://api.openai.com/v1/engines/davinci/search', data)
    .then(result => {
        console.log(result.data);
    }).catch(err => {
        console.log(err);
    });
});