const express = require("express");
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get("/", function(req, res) {
  res.render("index.html", {
    req:req,
    res:res
  });
});

app.listen(process.env.PORT | 8000);
