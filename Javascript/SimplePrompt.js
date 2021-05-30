// cd to /GPT-3_API/Javascript
// run node SimplePrompt.js
const axios = require('axios');

const fs = require('fs');
fs.readFile('../API_KEY.txt', 'utf8', function(err, apiKey) {
    if (err) throw err;

    const client = axios.create({
        headers: { 'Authorization': 'Bearer ' + apiKey }
    });

    const data = {
        'prompt': 'Somebody once told me the world is gonna roll me',
        'max_tokens': 15
    }

    client.post('https://api.openai.com/v1/engines/davinci/completions', data)
    .then(result => {
        console.log(data.prompt + result.data.choices[0].text);
    }).catch(err => {
        console.log(err);
    });
});