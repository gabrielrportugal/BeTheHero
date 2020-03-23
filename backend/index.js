const express = require('express');

const app = express();

app.listen(3333);

app.get('/', (req, res) => {
    //return res.json({ message: "Olá mundo" });
    return res.send('Hello world');
})