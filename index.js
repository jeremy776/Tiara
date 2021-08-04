const Express = require("express");
const App = Express();

App.get("/", function(Req, Res) {
  Res.render("index.html", {
    Req: Req,
    Res: Res
  });
});

App.listen(process.env.PORT);
