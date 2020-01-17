const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/api/getInsult', (request, response) => {
    http.get('http://shakespeare-insults-generator.herokuapp.com/getInsult', (responseAPI) => {
        let data = '';

        responseAPI.on('data', (chunk) => {
            data += chunk;
        });

        responseAPI.on('end', () => {
            if (data) {
                insult = JSON.parse(data);
                response.send(JSON.stringify(insult));
            } else {
                const errorMessage = {
                    error: 'ERROR',
                    message: 'Något gick fel'
                }
                response.send(errorMessage);
            }

        });
    }).on('error', (error) => {
        console.error('ERROR: ', error);
    });
});

app.listen(port, () => {
    console.log('Starting webserver at port:', port);
});