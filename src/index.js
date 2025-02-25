"use strict";
const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    let hello = 'Hello Incubator!!!';
    res.send(hello);
});
app.listen(PORT, () => {
    console.log(`Example app listener on port ${PORT}`);
});
