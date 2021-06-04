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
        'prompt': 'English: Hello my name is Simon and i am a student for ABB working in tech and i will do a presentation about GPT-3\nSwedish:',
        'max_tokens': 50,
        'top_p': 1,
        'temperature': 1,
        //'stop': ['English']
    }

    client.post('https://api.openai.com/v1/engines/davinci/completions', data)
    .then(result => {
        console.log(data.prompt + result.data.choices[0].text);
    }).catch(err => {
        console.log(err);
    });
});