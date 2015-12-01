var express = require('express');
var app = express();
var router = express.Router();
var topLevelPath = __dirname
var viewsPath = topLevelPath + '/views/';

router.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(viewsPath + "index.html");
});

router.get("/about", function(req, res) {
    res.sendFile(viewsPath + "about.html");
});

router.get("/contact", function(req, res) {
    res.sendFile(viewsPath + "contact.html");
});

app.use("/", router);

app.use("*", function(req, res) {
    res.sendFile(viewsPath + "404.html");
});

app.listen(3000, function() {
    console.log("Live at Port 3000");
});
