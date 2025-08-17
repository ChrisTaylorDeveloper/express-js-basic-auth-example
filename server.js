const express = require('express');
const basicAuth = require('express-basic-auth')

const app = express();

app.use(basicAuth({
    users: { 'admin': 'pass' }
}))

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
