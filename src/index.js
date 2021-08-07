/* eslint global-require: "off" */
const Express = require("express");
const App = Express();
const DiscordClient = require('./Structures/Client');
const Client = new DiscordClient();

const Title = Client.user.username;

App.use(Express.static("./public/"));

App.get("/", function(Req, Res) {
  Res.render("index.ejs", {
    Req: Req,
    Res: Res,
    Title: Title
  });
});

Client.run();
App.listen(process.env.PORT);
