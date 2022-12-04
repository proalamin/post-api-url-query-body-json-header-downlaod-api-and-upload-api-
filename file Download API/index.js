const express = require('express');
const app = express();
const port = 3000;

app.get('/download', (req, res) => {
    res.download("./uploads/ostad_logo.png");
})

app.listen(port, () => {
    console.log(`Download API method app listening on port ${port}`)
})