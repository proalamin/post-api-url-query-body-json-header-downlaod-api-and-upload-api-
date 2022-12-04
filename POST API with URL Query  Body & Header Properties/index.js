const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;


// for URL Query post method
app.post('/', (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
})


// for header properties post method
app.post('/', (req, res) => {
    let username = req.header('username');
    let password = req.header('password');
    res.send('user name:' + username + " and " + 'password:' + password)
})


// Post application-json
app.post('/', (req,res)=>{
    let jsonData=req.body;
    let jsonString=JSON.stringify(jsonData);
    res.send(jsonString);
})


app.listen(port, () => {
    console.log(`URL Query ,Body & Header Properties method app listening on port ${port}`)
})