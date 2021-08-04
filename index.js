const Express = require("express");
const App = Express();

App.get("/", function(req, res) {
  res.render("index.html", {
    req:req,
    res:res
  });
});

App.listen(process.env.PORT);
