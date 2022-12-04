const express = require('express')
var multer = require('multer');
var app = express();
const port = 3000;

// file upload method
var storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, './uploads')
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname)
    }
});

var upload = multer({ storage: storage }).single("myfile");
app.post("/", (req, res) => {
    upload(req, res, function (error) {
        if (error) {
            res.send("file uplaod fail");
        }
        else {
            res.send("file uplaod success");
        }
    })
})

app.listen(port, () => {
    console.log(`File Upload method listening on port ${port}`)
})