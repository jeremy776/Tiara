const Express = require("express");
const App = Express();
const Title = "Night Rest";

App.get("/", function(Req, Res) {
  Res.render("index.html", {
    Req: Req,
    Res: Res,
    Title: Title
  });
});

App.listen(process.env.PORT);
