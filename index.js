const Express = require("express");
const App = Express();
const Title = "Night Rest";

App.use(Express.static("./public/"));

App.get("/", function(Req, Res) {
  Res.render("index.ejs", {
    Req: Req,
    Res: Res,
    Title: Title
  });
});

App.listen(process.env.PORT);
