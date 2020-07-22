const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const user = {
        name: 'sally',
        hobby: 'soccer'
    }
    res.send(user);
});

app.listen(3000)