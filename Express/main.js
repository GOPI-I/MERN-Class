var express = require("express");
var app = express();
app.get("/myname" , (req,res) => {
    res.json({"message" :"pandiya"});

});
app.listen(8080)